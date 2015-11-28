define([
    // app dependencies
    //..
    // test dependencies
    'chai', 'chai-jquery'
], function (
    // app dependencies
    //..
    // test dependencies
    chai, chaiJquery
) {

    "use strict";

    // shorthands
    var should = chai.should(),
        expect = chai.expect;

    chai.use(chaiJquery);


    return function (Collection) {

        /**
         * Collection tests
         */
        describe('# Collection Tests', function () {

            var collection = new Collection({});

            /**
             * pre-requisites
             */
            describe('# Pre-requisites', function () {

                it('should have model object', function (done) {
                    expect(collection).to.have.property('model');
                    done();
                });
            });
        });
    };
});