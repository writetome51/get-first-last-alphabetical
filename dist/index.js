"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabetize_1 = require("@writetome51/alphabetize");
function getLastAlphabetical(items) {
    alphabetize_1.alphabetize(items);
    return items[items.length - 1];
}
exports.getLastAlphabetical = getLastAlphabetical;
function getFirstAlphabetical(items) {
    alphabetize_1.alphabetize(items);
    return items[0];
}
exports.getFirstAlphabetical = getFirstAlphabetical;
