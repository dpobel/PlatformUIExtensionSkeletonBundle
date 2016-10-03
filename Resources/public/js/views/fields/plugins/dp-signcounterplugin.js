YUI.add('dp-signcounterplugin', function (Y) {

    Y.namespace('DP.Plugin');

    Y.DP.Plugin.SignCounter = Y.Base.create('dpSignCounterPlugin', Y.Plugin.Base, [], {
        initializer: function () {
            var fieldDef = this.get('host').get('fieldDefinition');

            if ( fieldDef.fieldType === 'eztext' ) {
                this.onceAfterHostEvent('activeChange', this._setupTextBlockCounter);
            } else if ( fieldDef.fieldType === 'ezrichtext' ) {
                this.afterHostEvent('instanceReady', this._setupRichTextCounter);
            }
        },

        _setupTextBlockCounter: function () {
            var view = this.get('host'),
                events = Y.merge(view.events, {
                    '.ez-textblock-input-ui textarea': {
                        'valuechange': Y.bind(this._updateTextBlockCounter, this),
                    }
                });

            this._addCounterPlaceHolder();
            this._updateTextBlockCounter();
            view.attachEvents(events);
        },

        _setupRichTextCounter: function () {
            this._addCounterPlaceHolder();
            this._updateRichTextCounter();
            this.get('host').get('editor').get('nativeEditor').on(
                'change',
                Y.bind(this._updateRichTextCounter, this)
            );
        },

        _addCounterPlaceHolder: function () {
            var view = this.get('host');

            view.get('container').one('.ez-fielddefinition-name').insert(
                '<p>(<span class="dp-signcounter"></span> signs)</p>',
                "after"
            );
        },

        _countRichText: function () {
            // this is buggy if an embed is added
            var data = this.get('host').get('editor').get('nativeEditor').getData(),
                tmpNode = Y.Node.create('<div />');

            tmpNode.append(data);
            return tmpNode.get('textContent').length;
        },

        _countTextBlock: function () {
            return this.get('host').get('container').one('textarea').get('value').length;
        },

        _updateRichTextCounter: function () {
            this._updateCounter(this._countRichText());
        },

        _updateTextBlockCounter: function () {
            this._updateCounter(this._countTextBlock());
        },

        _updateCounter: function (value) {
            this.get('host').get('container').one('.dp-signcounter').setContent(value);
        },
    }, {
        NS: 'dpSignCounterPlugin'
    });

    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.Plugin.SignCounter, ['textBlockEditView', 'richTextEditView']
    );
});
