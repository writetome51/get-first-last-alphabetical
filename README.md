# getFirstAlphabetical(items): any

Alphabetizes `items` and returns the first item in sorted result.

# getLastAlphabetical(items): any

Alphabetizes `items` and returns the last item in sorted result.


For both functions:  if not every item in `items` is type 'string',  
the function will attempt to coerce the item into a string before  
doing the comparisons.  None of the items are modified.

Since `items` can technically include any data type, it's possible  
any data type could end up being the first or last item in the  
sorted result.

## Examples
```
let items = ['', 'a', 'c', 'e', 'g', 'j', 'o', 'r', 'x', 'z', '!'];
getFirstAlphabetical(items);
    // -->  ''
    
getLastAlphabetical(items);
    // -->  'z'
    
items = ['aa', 'a', 'A', 'AA'];
getFirstAlphabetical(items);
    // -->  'A'
    
getLastAlphabetical(items);
    // -->  'aa'

items = ['today', null, false, true];
getFirstAlphabetical(items);
    // -->  false
    
items = [0, false, [], {}, ''];
getFirstAlphabetical(items);
    // -->  []
```

## Installation
`npm i  @writetome51/get-first-last-alphabetical`

## Loading
```
// if using TypeScript:
import {getFirstAlphabetical, getLastAlphabetical} 
    from '@writetome51/get-first-last-alphabetical';
// if using ES5 JavaScript:
var getFirstAlphabetical = 
    require('@writetome51/get-first-last-alphabetical').getFirstAlphabetical;
var getLastAlphabetical = 
    require('@writetome51/get-first-last-alphabetical').getLastAlphabetical;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)