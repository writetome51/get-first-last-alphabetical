import {
	getFirstAlphabetical,
	getLastAlphabetical
} from './index';


let strings: any[] = [
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

let stringsCopy = strings;

let first = getFirstAlphabetical(strings);
let last = getLastAlphabetical(strings);

strings[0] = false;
console.log(stringsCopy);

console.log(first); // 100
console.log(last); // zz top


strings = ['today', null, false, true];
first = getFirstAlphabetical(strings);
console.log(first); // false
last = getLastAlphabetical(strings);
console.log(last); // true


strings = [0, false, [], {}, ''];
first = getFirstAlphabetical(strings);
console.log(first); // []


let items: any[] = ['', 'a', 'c', 'e', 'g', 'j', 'o', 'r', 'x', 'z', '!'];
first = getFirstAlphabetical(items);
console.log(first); // ''

last = getLastAlphabetical(items);
console.log(last); // 'z'


items = ['aa', 'a', 'A', 'AA'];
console.log(getFirstAlphabetical(items)); // 'A'
console.log(getLastAlphabetical(items)); // 'aa'


items = [0, false, [], {}, ''];
console.log(getLastAlphabetical(items)); // false


items = ['today', null, false, true];

console.log(getFirstAlphabetical(items));
// -->  false

console.log(getLastAlphabetical(items));
// --> true


items = ['John Adams', 'Ben Franklin', 'William Shakespeare', 'JJ Abrams', 'Bob Newhart',
	'Walter Cronkite'];

console.log(getFirstAlphabetical(items));
// -->  'Ben Franklin'

console.log(getLastAlphabetical(items));
// --> 'William Shakespeare'

