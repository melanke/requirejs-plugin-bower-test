requirejs.config({
    baseUrl: 'js',
    bower: {
        baseUrl: '../bower_components',
        extensions: 'js|css',
        ignore: 'requirejs|requirejs-domready|requirejs-text',
        auto: true,
        deps: ['dependencies'] // can add 'devDependencies' as well
    },
    paths: {
        'text': '../bower_components/requirejs-text/text',
        'json': '../bower_components/requirejs-plugins/src/json',
        'bower': '../bower_components/requirejs-plugin-bower/src/bower'
    },
    deps: []
});

define(['bower!../bower.json'], function(bowerConfig) {

    //  requirejs.config(bowerConfig); // optional if bower: {auto: true}
    requirejs(['bootstrap']);

});
