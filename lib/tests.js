"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFirstAlphabetical_getLastAlphabetical_1 = require("./getFirstAlphabetical_getLastAlphabetical");
var strings = [
    'last night', 'dirty deeds done dirt cheap', 'paul walker',
    'demi lovato', 'ray milland', 'ray romano', 'abby allemand', 'amy adams',
    'abby allison', 'bad times at el royale', 'first man', 'action jackson', 'harry' +
        ' potter and the sorcerer\'s stone', 'harry potter and the prisoner of azkaban',
    'harry potter and the chamber of secrets',
    'harry potter and the nasty case of typhoid fever', 'xavier', 'zz top',
    'harry potter and the order of the phoenix', 'batman', 'riddler', 'joker',
    'commissioner gordon', 'batmobile', 'alfred lord tennyson', 'L Street',
    'LL Cool J', 'amy'
];
var first = getFirstAlphabetical_getLastAlphabetical_1.getFirstAlphabetical(strings);
var last = getFirstAlphabetical_getLastAlphabetical_1.getLastAlphabetical(strings);
console.log(first);
console.log(last);
