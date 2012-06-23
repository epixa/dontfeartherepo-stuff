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
            var userNames = {};
            var users = [];
            _.each(data, function(data){
                var userName;
                if (!_.isNull(data.author)) {
                    userName = data.author.login;
                } else {
                    userName = data.commit.author.email;
                }

                if (!_.has(userNames, userName)) {
                    var user = {};
                    if (!_.isNull(data.author)) {
                        user.login = data.author.login;
                        user.github = data.author.url;
                        user.avatar = data.author.avatar_url;
                    } else {
                        user.login = data.commit.author.email;
                        user.github = null;
                        user.avatar = null;
                    }
                    user.email = data.commit.author.email;
                    user.name = data.commit.author.name;
                    user.messages = [];
                    user.messages.push(data.commit.message);
                    user.commits = 1;
                    users.push(user);
                    userNames[user.login] = users.length - 1;
                } else {
                    users[userNames[userName]].commits++;
                    users[userNames[userName]].messages.push(data.commit.message);
                }
            });
            return users;
        }
    });
});