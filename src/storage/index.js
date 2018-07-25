import { STORAGE_GET, STORAGE_PUT } from "../fluid.info";

import { FluidFunc } from "../imports";

var storage = {};

FluidFunc.create(STORAGE_PUT)
    .onStart(({ field, value }) => {
        storage[field()] = value();
    })
    .spec("field", {
        require: true
    })
    .spec("value", {
        require: true
    });

FluidFunc.create(STORAGE_GET)
    .onStart(({ field }) => {
        return storage[field()];
    })
    .spec("field", {
        require: true
    });