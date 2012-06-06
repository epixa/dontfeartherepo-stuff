define([
    'backbone',
    'views/home',
    'views/repo'
], function(Backbone, HomeView, RepoView){
    return Backbone.Router.extend({
        routes: {
            '':              'home',
            ':vendor/:repo': 'repo'
        },

        home: function(){
            var view = new HomeView();
            view.render();
        },

        repo: function(vendor, repo) {
            var view = new RepoView();
            view.initialize(vendor, repo);
        }
    });
});