"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabetize_1 = require("@writetome51/alphabetize/alphabetize");
function getLastAlphabetical(strings) {
    alphabetize_1.alphabetize(strings);
    return strings[strings.length - 1];
}
exports.getLastAlphabetical = getLastAlphabetical;
function getFirstAlphabetical(strings) {
    alphabetize_1.alphabetize(strings);
    return strings[0];
}
exports.getFirstAlphabetical = getFirstAlphabetical;
