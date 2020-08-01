# Algory

An Auto-Curried General purpose library composed of algorithms and data structures for `JavaScript`, `TypeScript` and `Node.js`

###### How to Import libraries 
Import all the function in TypeScript using `import` keyword:
``` properties 
import * as λ from 'algory'
λ.sumOfCubes(2, 3)
λ.sumOfCubes(2)(3)
```

Import specific functions in TypeScript using `import` keyword:
``` properties 
import { mergeSort, avgLst } from 'algory'
const arr = mergeSort([4, -32, 12, 0, 1, 44, 3])
const arr2 = avgLst([4, -32, 12, 0, 1, 44, 3])
```

Import all functions in TypeScript using `require` keyword:
```properties
const λ = require('algory')
λ.sumOfCubes(2, 3))
λ.sumOfCubes(2)(3)
```

Import all functions in JavaScript using `require` keyword:
```properties
const λ = require('algory')
λ.sumOfCubes(2, 3))
```

###### Tests
```properties
Run all tests: npm t or npm test
Run a specific test: npm test -- SomeFile.test.ts or jest SomeFile.test.ts or npm test -t SomeFile.test.ts
Help: npm test -- --help or jest help
```

###### License 
- This project is licensed under the terms of the [MIT license](/LICENSE.md).

###### Contributors
```properties
Anurag Muthyam <anu.drumcoder@gmail.com>
```
