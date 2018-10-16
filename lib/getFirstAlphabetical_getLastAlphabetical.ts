import {alphabetize} from '@writetome51/alphabetize';


export function getLastAlphabetical(strings): string {
	alphabetize(strings);
	return strings[strings.length - 1];
}


export function getFirstAlphabetical(strings): string {
	alphabetize(strings);
	return strings[0];
}
