define([
    'backbone',
    'models/commit'
], function(Backbone, Commit){
    return Backbone.Collection.extend({
        model: Commit,

        /**
         * Fetches the commits for the given vendor repo into this collection
         * 
         * @param vendor
         * @param repo
         * @param options
         */
        fetchByRepo: function(vendor, repo, options) {
            options = options ? _.clone(options) : {};
            options.url = 'https://api.github.com/repos/' + vendor + '/' + repo + '/commits';
            this.fetch(options);
        }
    });
});