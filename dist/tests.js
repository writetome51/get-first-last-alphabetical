"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var strings = [
    'zz top', 'last night', 'dirty deeds done dirt cheap', 'paul walker',
    'demi lovato', 'ray milland', 'ray romano', 'abby allemand', 'amy adams',
    'abby allison', 'bad times at el royale', 'first man', 'action jackson', 'harry' +
        ' potter and the sorcerer\'s stone', 'harry potter and the prisoner of azkaban',
    'harry potter and the chamber of secrets',
    'harry potter and the nasty case of typhoid fever', 'xavier',
    'harry potter and the order of the phoenix', 'batman', 'riddler', 'joker',
    'commissioner gordon', 'batmobile', 'alfred lord tennyson', 'L Street',
    'LL Cool J', 'amy', 111, 100
];
var stringsCopy = strings;
var first = index_1.getFirstAlphabetical(strings);
var last = index_1.getLastAlphabetical(strings);
strings[0] = false;
console.log(stringsCopy);
console.log(first); // 100
console.log(last); // zz top
strings = ['today', null, false, true];
first = index_1.getFirstAlphabetical(strings);
console.log(first); // false
last = index_1.getLastAlphabetical(strings);
console.log(last); // true
strings = [0, false, [], {}, ''];
first = index_1.getFirstAlphabetical(strings);
console.log(first); // []
var items = ['', 'a', 'c', 'e', 'g', 'j', 'o', 'r', 'x', 'z', '!'];
first = index_1.getFirstAlphabetical(items);
console.log(first); // ''
last = index_1.getLastAlphabetical(items);
console.log(last); // 'z'
items = ['aa', 'a', 'A', 'AA'];
console.log(index_1.getFirstAlphabetical(items)); // 'A'
console.log(index_1.getLastAlphabetical(items)); // 'aa'
items = [0, false, [], {}, ''];
console.log(index_1.getLastAlphabetical(items)); // false
items = ['today', null, false, true];
console.log(index_1.getFirstAlphabetical(items));
// -->  false
console.log(index_1.getLastAlphabetical(items));
// --> true
items = ['John Adams', 'Ben Franklin', 'William Shakespeare', 'JJ Abrams', 'Bob Newhart',
    'Walter Cronkite'];
console.log(index_1.getFirstAlphabetical(items));
// -->  'Ben Franklin'
console.log(index_1.getLastAlphabetical(items));
// --> 'William Shakespeare'
