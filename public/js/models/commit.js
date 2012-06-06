define([
    'backbone'
], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            hash: null,
            message: null,
            name: null,
            email: null
        }
    });
});