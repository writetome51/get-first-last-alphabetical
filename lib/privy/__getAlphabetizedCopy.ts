import { alphabetize } from '@writetome51/alphabetize';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { getCopy } from '@writetome51/array-get-copy';



export function __getAlphabetizedCopy(items) {
	errorIfNotPopulatedArray(items);
	let copy = getCopy(items);
	alphabetize(copy);
	return copy;
}
