define([
    'backbone',
    'underscore',
    '../collections/commit'
], function(Backbone, _, Commits){
    return Backbone.View.extend({
        initialize: function(commits) {
            if (_.isUndefined(commits)) {
                throw new Error('Vendor and Repo must be defined.');
            }
            commits.forEach(function(obj){
                console.log('-------committer--------')
                console.log(obj.attributes);
            });
        },

        render: function(){
            $("body").html('All your base.');
        }
    });
});