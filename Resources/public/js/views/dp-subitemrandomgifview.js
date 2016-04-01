YUI.add('dp-subitemrandomgifview', function (Y) {

    Y.namespace('DP');

    Y.DP.SubitemRandomGifView = Y.Base.create('dpSubitemRandomGifView', Y.eZ.SubitemBaseView, [Y.eZ.AsynchronousView], {
        events: {
            '.dp-new-one': {
                'tap': '_fireLoadRandomGif',
            },
        },

        initializer: function () {
            this._set('identifier', 'randomgif');
            this._set('name', 'Random Gif :)');

            this._fireMethod = this._fireLoadRandomGif;
            this._watchAttribute = 'gifInfo';

            this.after('activeChange', function () {
                if ( !this.get('active') ) {
                    this.set('gifInfo', undefined);
                }
            });
        },

        render: function () {
            this.get('container').setHTML(this.template({
                gifInfo: this.get('gifInfo'),                                          
                loadingError: this.get('loadingError'),
            }));
            return this;
        },

        _fireLoadRandomGif: function () {
            this.fire('loadRandomGif');
        },
    }, {
        ATTRS: {
            gifInfo: {},
        }
    });
});
