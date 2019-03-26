import { alphabetize } from '@writetome51/alphabetize';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { getCopy } from '@writetome51/array-get-copy';


export function getLastAlphabetical(items): any {
	items = __getAlphabetizedCopy(items);
	return items[items.length - 1];
}


export function getFirstAlphabetical(items): any {
	items = __getAlphabetizedCopy(items);
	return items[0];
}


function __getAlphabetizedCopy(items) {
	errorIfNotPopulatedArray(items);
	let copy = getCopy(items);
	alphabetize(copy);
	return copy;
}
