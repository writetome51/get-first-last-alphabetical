"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabetize_1 = require("@writetome51/alphabetize");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var array_get_copy_1 = require("@writetome51/array-get-copy");
function getLastAlphabetical(items) {
    items = __getAlphabetizedCopy(items);
    return items[items.length - 1];
}
exports.getLastAlphabetical = getLastAlphabetical;
function getFirstAlphabetical(items) {
    items = __getAlphabetizedCopy(items);
    return items[0];
}
exports.getFirstAlphabetical = getFirstAlphabetical;
function __getAlphabetizedCopy(items) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(items);
    var copy = array_get_copy_1.getCopy(items);
    alphabetize_1.alphabetize(copy);
    return copy;
}
