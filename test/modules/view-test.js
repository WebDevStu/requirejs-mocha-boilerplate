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


    return function (View, Model) {

        /**
         * View tests
         */
        describe('# View Tests', function () {

            var model = new Model(),
                view = new View({
                    model: model
                });

            /**
             * pre-requisites
             */
            describe('# Pre-requisites', function () {

                it('should have model object', function (done) {
                    expect(view).to.have.property('model');
                    done();
                });

                it('should have property "lol"', function (done) {
                    expect(view).to.have.property('lol');
                    done();
                });
            });
        });
    };
});