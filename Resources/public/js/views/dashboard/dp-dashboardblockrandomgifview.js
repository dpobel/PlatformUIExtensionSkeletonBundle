YUI.add('dp-dashboardblockrandomgifview', function (Y) {

    Y.namespace('DP');

    Y.DP.DashboardBlockRandomGifView = Y.Base.create('dpDashboardBlockRandomGifView', Y.eZ.DashboardBlockAsynchronousView, [], {
        events: {
            '.dp-gif-search': {
                'submit': '_search',
            },
        },

        /**
         * `submit` event handler for the search GIF form.
         *
         * @method _search
         * @param {EventFacade} e
         * @protected
         */
        _search: function (e) {
            var str = e.target.get('searchstring').get('value');

            e.preventDefault();

            if ( str ) {
                this.set('searchString', str);
                this.reset('gifInfo');
                this._fireLoadDataEvent();
            }
        },

        initializer: function () {
            this._set('identifier', 'randomgif');

            this.after('gifInfoChange', function (e) {
                this.set('items', [this.get('gifInfo')]);
            });
        },

        render: function () {
            this.get('container').setHTML(this.template({
                gifInfo:  this.get('gifInfo'),
                searchString: this.get('searchString'),
                loadingError: this.get('loadingError'),
            }));

            return this;
        },

        /**
         * Fires the event to trigger the search.
         *
         * @method _fireLoadDataEvent
         * @protected
         */
        _fireLoadDataEvent: function () {
            this._set('loading', true);
            /**
             * Fired to trigger the search with the Giphy API.
             * This event is handled in the DP.RandomGifViewServicePlugin
             *
             * @event loadRandomGif
             * @param {String} searchString
             */
            this.fire('loadRandomGif', {
                searchString: this.get('searchString'),
            });
        },
    }, {
        ATTRS: {
            searchString: {
                value: 'bike',
            },

            gifInfo: {
                value: null,
            },
        }
    });
});
