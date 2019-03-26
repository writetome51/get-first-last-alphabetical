import {__getAlphabetizedCopy} from './privy/__getAlphabetizedCopy';


export function getLastAlphabetical(items): any {
	items = __getAlphabetizedCopy(items);
	return items[items.length - 1];
}


export function getFirstAlphabetical(items): any {
	items = __getAlphabetizedCopy(items);
	return items[0];
}
