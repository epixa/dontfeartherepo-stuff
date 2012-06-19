define([
    'jquery',
    'underscore',
    'backbone',
    'models/repo',
    'text!templates/home/app.html'
], function($, _, Backbone, repoModel, mainTemplate){
    var mainHomeView = Backbone.View.extend({

        el: $("body"),

        className: "find-repo",

        events: {
            "click #find-button":"submitSearch" // not firing correctly
        },

        render: function(){
            var data = {
                model: new repoModel(),
                _: _
            };
            console.log(this.el); // show body
            var compiledTemplate = _.template(mainTemplate, data);
            $("body").html(compiledTemplate);
        },

        submitSearch: function(event) {
            event.preventDefault();
            var vendor = $("#vendor").val();
            var name = $("#name").val();
            if (!_.isEmpty(vendor) && !_.isEmpty(name)) {
                Backbone.history.navigate(vendor + "/" + name, {trigger: true});
            } else {
                console.log("Must enter name and repo");
            }
        }
    });
    return mainHomeView;
});

