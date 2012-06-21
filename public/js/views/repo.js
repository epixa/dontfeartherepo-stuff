define([
    'jquery',
    'underscore',
    'backbone',
    'collections/commit',
    'text!templates/repo/repo.html'
], function($, _, Backbone, Commits, repoTemplate){
    return Backbone.View.extend({
        initialize: function(commits) {
            if (_.isUndefined(commits)) {
                throw new Error('Vendor and Repo must be defined.');
            }
            this.commits = commits;
            this.collection = new Commits();
        },

        el: $("body"),

        tagName: "li",

        className: "repo",

        events: {
            "click #back":"goHome"
        },

        render: function(){
            var data = {
                commits: this.commits,
                _: _
            };
            console.log(this.el); // show body
            var compiledTemplate = _.template(repoTemplate, data);
            $("body").html(compiledTemplate);
        },

        goHome: function(event) {
            Backbone.history.navigate("/", {trigger: true});
        }
    });
});