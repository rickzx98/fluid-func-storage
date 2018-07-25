"use strict";

var _fluid = require("../fluid.info");

var _imports = require("../imports");

var storage = {};

_imports.FluidFunc.create(_fluid.STORAGE_PUT).onStart(function (_ref) {
    var field = _ref.field,
        value = _ref.value;

    storage[field()] = value();
}).spec("field", {
    require: true
}).spec("value", {
    require: true
});

_imports.FluidFunc.create(_fluid.STORAGE_GET).onStart(function (_ref2) {
    var field = _ref2.field;

    return storage[field()];
}).spec("field", {
    require: true
});