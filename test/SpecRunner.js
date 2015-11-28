"use strict";

require.config({
    baseUrl: '../js/',
    paths: {
        'mocha':        '../bower_components/mocha/mocha',
        'jquery':       '../bower_components/jquery/jquery',
        'chai-jquery':  '../bower_components/chai-jquery/chai-jquery',
        'chai':         '../bower_components/chai/chai',
        'underscore':   '../bower_components/underscore/underscore',
        'backbone':     '../bower_components/backbone/backbone',
        'handlebars':   '../bower_components/handlebars/handlebars.amd'
    },
    shim: {
        'mocha': {
            init: function () {

                if (window.initMochaPhantomJS) {
                    window.initMochaPhantomJS();
                }

                this.mocha.setup('bdd');

                return this.mocha;
            }
        },
        'chai-jquery': ['jquery', 'chai']
    },
    urlArgs: 'bust=' + (new Date()).getTime()
});

define(['mocha'], function (mocha) {

    "use strict";

    require([
        // model tests (module then test file)
        'model',
        '../test/modules/model-test',
        // view tests (module then test file)
        'view',
        '../test/modules/view-test'
        // collection test (module then test file)
        //..
    ], function (
        // model tests
        Model,
        modelTest,
        // view tests
        View,
        viewTest
        // collection tests
        //..
    ) {

        // register the tests, passing required deps.
        modelTest(Model);
        viewTest(View, Model);

        // start tests
        mocha.run();
    });
});