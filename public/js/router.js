define([
    'backbone',
    'views/home',
    'views/repo'
], function(Backbone, HomeView, RepoView){
    return Backbone.Router.extend({
        initialize: function(){
            Backbone.history.start({pushState: true});
        },

        routes: {
            '':              'home',
            ':vendor':       'vendor',
            ':vendor/:repo': 'repo'
        },

        home: function(){
            var view = new HomeView();
            view.render();
        },

        vendor: function(){
            // todo: implement this
        },

        repo: function(vendor, repo) {
            var view = new RepoView();
            view.initialize(vendor, repo);
        }
    });
});