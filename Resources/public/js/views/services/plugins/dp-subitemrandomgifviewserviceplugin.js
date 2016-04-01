YUI.add('dp-subitemrandomgifviewserviceplugin', function (Y) {
    Y.namespace('DP');

    Y.DP.SubitemRandomGifViewServicePlugin = Y.Base.create('dpSubitemRandomGifViewServicePlugin', Y.eZ.Plugin.ViewServiceBase, [], {
        initializer: function () {
            this.afterHostEvent('*:loadRandomGif', this._loadRandomGif);
        },

        _loadRandomGif: function (e) {
            var view = e.target;

            fetch('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat&fmt=json')
                .then(function (response) {
                    return response.json();
                })
                .then(Y.bind(this._success, this, view))
                .catch(Y.bind(this._failure, this, view));
        },

        _success: function (view, response) {
            var data = response.data;

            view.setAttrs({
                loadingError: false,
                gifInfo: {
                    src: data.image_original_url,
                    width: data.image_width,
                    height: data.image_height,
                },
            });
        },

        _failure: function (view) {
            view.setAttrs({
                loadingError: true,
                gifInfo: undefined,
            });
        },
    }, {
        NS: 'dpSubitemRandomGifViewServicePlugin',                                                     
    });
    
    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.SubitemRandomGifViewServicePlugin, ['locationViewViewService']
    );
});
