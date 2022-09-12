"use strict";
exports.__esModule = true;
exports.generate = void 0;
var fs_1 = require("fs");
var USE_LENS_LIBRARIES = ['react-apollo'];
var generate = function (library) {
    if (!USE_LENS_LIBRARIES.includes(library)) {
        throw new Error("".concat(library, " doesn't exists!")); // todo: exit, not throw error.
    }
    (0, fs_1.writeFileSync)('./codegen.yml', 'hello');
    console.log('generated2!');
};
exports.generate = generate;
