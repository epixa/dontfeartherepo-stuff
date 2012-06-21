define([
    'backbone'
], function(Backbone){
    return Backbone.Model.extend({
        defaults: {
            message: null,
            name: null,
            email: null
        }
    });
});