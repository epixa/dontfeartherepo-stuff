define([
    'backbone'
], function(Backbone){
    var mainHomeView = Backbone.View.extend({
        render: function(){
            $("body").html('Don\'t Fear the Repo.');
        }
    });
    return mainHomeView;
});