YUI.add('dp-serversidehelloview', function (Y) {

    Y.DP.ServerSideHelloView = Y.Base.create('serverSideHelloView', Y.eZ.ServerSideView, [], {
        events: {
            '.dp-refresh-button': {
                'tap': '_refresh',
            },
        },

        initializer: function () {
            this.containerTemplate = '<div class="ez-view-serversidehelloview"/>';

            this.after('activeChange', function () {
                if ( this.get('active') ) {
                    this._appendRefreshLink();
                }
            });
        },

        _appendRefreshLink: function () {
            this.get('container').one('h1').append(
                ' <span class="dp-refresh">(<a href="#" class="dp-refresh-button" data-icon="&#xe60f;">Refresh</a>)</span>'
            );
        },

        _refresh: function (e) {
            e.preventDefault();
            this.fire('refreshView');
        },
    });
});
