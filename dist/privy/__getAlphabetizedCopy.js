"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabetize_1 = require("@writetome51/alphabetize");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var array_get_copy_1 = require("@writetome51/array-get-copy");
function __getAlphabetizedCopy(items) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(items);
    var copy = array_get_copy_1.getCopy(items);
    alphabetize_1.alphabetize(copy);
    return copy;
}
exports.__getAlphabetizedCopy = __getAlphabetizedCopy;
