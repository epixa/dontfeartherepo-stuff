define([
    'backbone',
    'models/commit'
], function(Backbone, Commit){
    return Backbone.Collection.extend({
        model: Commit
    });
});