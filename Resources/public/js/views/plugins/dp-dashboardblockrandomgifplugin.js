YUI.add('dp-dashboardblockrandomgifplugin', function (Y) {

    Y.namespace('DP');

    Y.DP.DashboardBlockRandomGifPlugin = Y.Base.create('dpDashboardBlockRandomGifPlugin', Y.Plugin.Base, [], {
        initializer: function () {
            this.get('host').addBlock(
                new Y.DP.DashboardBlockRandomGifView({
                    priority: 2000
                })
            );
        },
    }, {
        NS: 'dpDashboardBlockRandomGifPlugin',
    });

    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.DashboardBlockRandomGifPlugin, ['dashboardBlocksView']
    );
});
