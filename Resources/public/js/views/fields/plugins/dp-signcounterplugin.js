YUI.add('dp-signcounterplugin', function (Y) {

    Y.namespace('DP.Plugin');

    Y.DP.Plugin.SignCounter = Y.Base.create('dpSignCounterPlugin', Y.Plugin.Base, [], {
        initializer: function () {
            this.onceAfterHostEvent('activeChange', this._setupCounter);
        },

        _setupCounter: function () {
            var view = this.get('host'),
                events = Y.merge(view.events, {
                    '.ez-textblock-input-ui textarea': {
                        'valuechange': Y.bind(this._updateCounter, this),
                    }
                });

            this._addCounterPlaceHolder();
            this._updateCounter();
            view.attachEvents(events);
        },

        _addCounterPlaceHolder: function () {
            var view = this.get('host');

            view.get('container').one('.ez-fielddefinition-name').insert(
                '<p>(<span class="dp-signcounter"></span> signs)</p>',
                "after"
            );
        },

        _count: function () {
            return this.get('host').get('container').one('textarea').get('value').length;
        },

        _updateCounter: function () {
            this.get('host').get('container').one('.dp-signcounter').setContent(this._count());
        },
    }, {
        NS: 'dpSignCounterPlugin'
    });

    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.Plugin.SignCounter, ['textBlockEditView']
    );
});
