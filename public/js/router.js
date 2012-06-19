define([
    'backbone',
    'views/home',
    'views/repo',
    'collections/commit'
], function(Backbone, HomeView, RepoView, Commits){
    return Backbone.Router.extend({
        routes: {
            '':              'home',
            ':vendor':       'vendor',
            ':vendor/:repo': 'repo'
        },

        home: function(){
            var view = new HomeView();
            view.render();
        },

        vendor: function(vendor){
            // todo: implement this
        },

        repo: function(vendor, repo) {
            var commits = new Commits();
            commits.fetchByRepo(vendor, repo, {
                success: function() {
                    var repoData = new RepoView(commits);
                    repoData.render();
                }
            });
        }
    });
});