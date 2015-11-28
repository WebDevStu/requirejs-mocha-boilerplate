
define(['backbone', 'models/model'], function (Backbone, Model) {

    "use strict";

    return Backbone.Collection.extend({

        model: Model
    });
});
