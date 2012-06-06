require.config({
    paths: {
        jquery: 'libraries/jquery/jquery',
        underscore: 'libraries/underscore/underscore.amd',
        backbone: 'libraries/backbone/backbone.amd'
    }
});

define(['jquery', 'backbone', 'router'], function($, Backbone, Router){
    // jquery is being loaded as an AMD module, so it was not available when backbone was first loaded
    Backbone.setDomLibrary($);

    new Router();
    Backbone.history.start({pushState: true});
});