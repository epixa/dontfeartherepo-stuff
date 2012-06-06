require.config({
    paths: {
        jquery: 'libraries/jquery',
        underscore: 'libraries/underscore',
        backbone: 'libraries/backbone'
    }
});

require(['router'], function(Router){
    var router = new Router;
    router.initialize();
});