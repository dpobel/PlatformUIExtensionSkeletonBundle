YUI.add('dp-hellorouteplugin', function (Y) {

    Y.namespace('DP.Plugin');

    Y.DP.Plugin.HelloRoutePlugin = Y.Base.create('dpHelloRoutePlugin', Y.Plugin.Base, [], {
        initializer: function () {
            var app = this.get('host');

            app.views.serverSideHelloView = {
                type: Y.DP.ServerSideHelloView,
            };

            app.route({
                name: "dpServerSide",
                path: "/dp/:uri",
                view: "serverSideHelloView",
                service: Y.eZ.ServerSideViewService,
                sideViews: {navigationHub: true, discoveryBar: false},
                callbacks: ['open', 'checkUser', 'handleSideViews', 'handleMainView'],
            });
        },
    }, {
        NS: 'dpHelloRoutePlugin'
    });

    Y.eZ.PluginRegistry.registerPlugin(
        Y.DP.Plugin.HelloRoutePlugin, ['platformuiApp']
    );
});
