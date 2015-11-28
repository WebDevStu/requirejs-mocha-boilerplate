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


    return function (Model) {

        /**
         * Model tests
         */
        describe('# Model Tests', function () {

            var model = new Model();

            /**
             * pre-requisites
             */
            describe('# Pre-requisites', function () {

                it('should have defaults object', function (done) {
                    expect(model).to.have.property('defaults');
                    done();
                });

                it('should have property "lol"', function (done) {
                    expect(model.get('lol')).to.be.a('string');
                    done();
                });
            });
        });
    };
});