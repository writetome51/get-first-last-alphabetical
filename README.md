# getFirstAlphabetical(items): any

Creates a copy of `items` re-arranged in alphabetical order and returns the  
first item in sorted result.  
Does not modify `items`.

# getLastAlphabetical(items): any

Creates a copy of `items` re-arranged in alphabetical order and returns the  
last item in sorted result.  
Does not modify `items`.


For both functions:  if not every item in `items` is type 'string',  
the function will attempt to coerce the item into a string before  
doing the comparisons.  None of the items are modified.

Since `items` can technically include any data type, it's possible  
any data type could end up being the first or last item in the  
sorted result.

## Examples
```
let items = ['c', 'a', 'e', '', 'g', 'j', 'z', 'o', 'r', 'x', '!'];

getFirstAlphabetical(items);
    // -->  ''
    
getLastAlphabetical(items);
    // -->  'z'
  
    
items = ['aa', 'a', 'A', 'AA'];

getFirstAlphabetical(items);
    // -->  'A'
    
getLastAlphabetical(items);
    // -->  'aa'


items = ['John Adams', 'Ben Franklin', 'William Shakespeare', 'JJ Abrams', 
          'Bob Newhart', 'Walter Cronkite'];

getFirstAlphabetical(items);
    // -->  'Ben Franklin'

getLastAlphabetical(items);
    // --> 'William Shakespeare'


items = ['today', null, false, true];

getFirstAlphabetical(items);
    // -->  false
    
getLastAlphabetical(items);
    // --> true
    
    
items = [0, false, [], {}, ''];

getFirstAlphabetical(items);
    // -->  []
    
getLastAlphabetical(items);
    // --> false
```

## Installation
`npm i  @writetome51/get-first-last-alphabetical`

## Loading
```
// if using TypeScript:
import {getFirstAlphabetical, getLastAlphabetical} 
    from '@writetome51/get-first-last-alphabetical';
// if using ES5 JavaScript:
var firstLastAlphabetical =  require('@writetome51/get-first-last-alphabetical');
var getFirstAlphabetical = firstLastAlphabetical.getFirstAlphabetical;
var getLastAlphabetical = firstLastAlphabetical.getLastAlphabetical;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
