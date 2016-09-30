YUI.add('dp-hellonavigationplugin', function (Y) {

    Y.namespace('DP.Plugin');

    Y.DP.Plugin.HelloNavigationPlugin = Y.Base.create('dpHelloNavigationPlugin', Y.eZ.Plugin.ViewServiceBase, [], {
        initializer: function () {
            var service = this.get('host');

            service.addNavigationItem({
                Constructor: Y.eZ.NavigationItemParameterView,
                config: {
                    title: 'Hello eZ Conference',
                    identifier: 'dp-hello',
                    matchParameter: 'uri',
                    route: {
                        name: 'dpServerSide',
                        params: {
                            uri: 'pjax/hello',
                        },
                    },
                }
            }, 'platform');
        },
    }, {
        NS: 'dpHelloNavigationPlugin'
    });

    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.Plugin.HelloNavigationPlugin, ['navigationHubViewService']
    );
});
