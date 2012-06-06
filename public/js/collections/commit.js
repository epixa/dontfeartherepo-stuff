define([
    'backbone',
    'underscore',
    'models/commit'
], function(Backbone, _, Commit){
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
        },
        parse: function(data) {
            console.log(data);
            var emails = {};
            var users = [];
            _.each(data, function(data){
                if (!_.has(emails, data.commit.author.email)) {
                    var user = {};
                    if (!_.isUndefined(data.author)) {
                        user.login = data.author.login;
                        user.github = data.author.url;
                        user.avatar = data.author.avatar_url;
                    }
                    user.email = data.commit.author.email;
                    user.name = data.commit.author.name;
                    user.message = data.commit.message;
                    user.commits = 1;
                    users.push(user);
                    emails[data.commit.author.email] = users.length - 1;
                } else {
                    users[emails[data.commit.author.email]].commits++;
                }
            });
            return users;
        }
    });
});