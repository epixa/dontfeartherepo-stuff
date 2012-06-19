define([
    'jquery',
    'underscore',
    'backbone',
    '../collections/commit'
], function($, _, Backbone, Commits){
    return Backbone.View.extend({
        initialize: function(commits) {
            if (_.isUndefined(commits)) {
                throw new Error('Vendor and Repo must be defined.');
            }
            console.log('-------committers--------');

            var allCommits = commits;
            commits.forEach(function(obj){
                console.log(obj.attributes);
            });
        },

        el: $("body"),

        tagName: "li",

        className: "user",

        render: function(){

        }
    });
});