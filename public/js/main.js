require.config({
    paths: {
        jquery: 'libraries/jquery/jquery',
        underscore: 'libraries/underscore/underscore.amd',
        backbone: 'libraries/backbone/backbone.amd'
    }
});

define(['jquery', 'backbone', 'router', 'underscore'], function($, Backbone, Router, _){
    // jquery is being loaded as an AMD module, so it was not available when backbone was first loaded
    Backbone.setDomLibrary($);

    var router = new Router;
    router.initialize();
});