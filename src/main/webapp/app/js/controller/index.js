requirejs.config({
    bower: {
        root: "../../../bower.json",
        baseUrl: '../../../bower_components',
        extensions: 'js|css',
        ignore: 'requirejs|requirejs-domready|requirejs-text',
        auto: true,
        deps: ['dependencies'] // can add 'devDependencies' as well
    },
    paths: {
        bower: '../../../bower_components/requirejs-plugin-bower/src/bower',
        json: '../../../bower_components/requirejs-plugins/src/json',
        text: '../../../bower_components/requirejs-text/text'
    }
});

define(['bower!bower.json'], function() {
                
    require(['jquery'], function($){
        $("body").append("oi");
    });

});