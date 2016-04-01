YUI.add('dp-subitemrandomgifplugin', function (Y) {

    Y.namespace('DP');

    Y.DP.SubitemRandomGifPlugin = Y.Base.create('dpSubitemRandomGifPlugin', Y.Plugin.Base, [], {
        initializer: function () {
            this.get('host').addSubitemView(
                new Y.DP.SubitemRandomGifView()
            );
        },
    }, {
        NS: 'dpSubitemRandomGifPlugin',                                          
    });

    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.SubitemRandomGifPlugin, ['subitemBoxView']
    );
});
