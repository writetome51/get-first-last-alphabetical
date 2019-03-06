import {alphabetize} from '@writetome51/alphabetize';


export function getLastAlphabetical(items): any {
	alphabetize(items);
	return items[items.length - 1];
}


export function getFirstAlphabetical(items): any {
	alphabetize(items);
	return items[0];
}
