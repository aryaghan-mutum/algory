##### Algory

###### Commands
`npm run build`
`npm test`
`npm version 0.0.0`

###### Imports
- TS specific imports
`import sqr from 'algory/lib/shapes/Square'
sqr.area(3)
sqr.perimeter(3)`

- TS all imports 
`import * as A from 'algory'
A.Circle.area(3)
A.Rectangle.perimeter(2,3)`

- JS
`const {Circle, Square} = require('algory')
Circle.area(2)
Square.perimeter(3)`
 

###### Author
`Anurag Muthyam`