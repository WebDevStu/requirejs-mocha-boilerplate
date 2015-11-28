"use strict";

require.config({
    baseUrl: '../js/',
    paths: {
        'mocha':        'library/mocha/mocha',
        'jquery':       'library/jquery/jquery',
        'chai-jquery':  'library/chai-jquery/chai-jquery',
        'chai':         'library/chai/chai',
        'underscore':   'library/underscore/underscore',
        'backbone':     'library/backbone/backbone',
        'handlebars':   'library/handlebars/handlebars.amd'
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
        'models/model',
        '../test/modules/model-test',
        // view tests (module then test file)
        'views/view',
        '../test/modules/view-test',
        // collection test (module then test file)
        'collections/collection',
        '../test/modules/collection-test'
    ], function (
        // model tests
        Model,
        modelTest,
        // view tests
        View,
        viewTest,
        // collection tests
        Collection,
        collectionTest
    ) {

        // register the tests, passing required deps.
        modelTest(Model);
        viewTest(View, Model);
        collectionTest(Collection);

        // start tests
        mocha.run();
    });
});