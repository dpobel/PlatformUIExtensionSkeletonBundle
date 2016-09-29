YUI.add('dp-randomgifviewserviceplugin', function (Y) {

    Y.namespace('DP');

    Y.DP.RandomGifViewServicePlugin = Y.Base.create('dpRandomGifViewServicePlugin', Y.eZ.Plugin.ViewServiceBase, [], {
        initializer: function () {
            this.afterHostEvent('*:loadRandomGif', this._loadRandomGif);
        },

        /**
         * `loadRandomGif` event handler.
         *
         * @method _loadRandomGif
         * @param {EventFacade} e
         */
        _loadRandomGif: function (e) {
            var view = e.target,
                search = e.searchString ? e.searchString : 'cat';

            fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + search + '&fmt=json')
                .then(function (response) {
                    return response.json();
                })
                .then(Y.bind(this._success, this, view))
                .catch(Y.bind(this._failure, this, view));
        },

        _success: function (view, response) {
            var data = response.data,
                gifInfo = {};

            if ( !Array.isArray(data) ) {
                gifInfo = {
                    src: data.image_original_url,
                    width: data.image_width,
                    height: data.image_height,
                };
            }
            view.setAttrs({
                loadingError: false,
                gifInfo: gifInfo,
            });
        },

        _failure: function (view) {
            view.setAttrs({
                loadingError: true,
                gifInfo: undefined,
            });
        },
    }, {
        NS: 'dpRandomGifViewServicePlugin',
    });

    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.RandomGifViewServicePlugin, ['dashboardBlocksViewService']
    );
});
