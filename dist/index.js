"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __getAlphabetizedCopy_1 = require("./privy/__getAlphabetizedCopy");
function getLastAlphabetical(items) {
    items = __getAlphabetizedCopy_1.__getAlphabetizedCopy(items);
    return items[items.length - 1];
}
exports.getLastAlphabetical = getLastAlphabetical;
function getFirstAlphabetical(items) {
    items = __getAlphabetizedCopy_1.__getAlphabetizedCopy(items);
    return items[0];
}
exports.getFirstAlphabetical = getFirstAlphabetical;
