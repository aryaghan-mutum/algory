# Useful Commands for the Project

###### Eslint
Setup Configuration file:
```properties
eslint --init
```

###### Build
```properties 
npm run build
```

###### Debug
```properties
- Debug: node --debug-brk --inspect ./node_modules/jest/bin/jest -i
- Debug and Watch: node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand --watch 
- Go to chrome browser and type: chrome://inspect/#devices
- Click Inspect link
```

###### Coverage 
- All Coverage:
  - jest --coverage
  - npm test -- --coverage

###### Test Report
```properties 
- Run tests and type: test-report
- The test-report.html is generated under the root and open the html file in the browser
```

###### Tests
- Run all tests: 
  - npm t or npm test 
  - jest or jest --watch
  - npm test -- --group=unit

- Run a specific test: 
  - npm test -- SomeFile.test.ts 
  - jest SomeFile.test.ts 
  - npm test -t SomeFile.test.ts

- Run tests related to changed files based on uncommitted files:
  - jest -o

- Run on watch mode:
  - Runs jest -o by default: jest --watch
  - Runs all tests: jest --watchAll

- Help: 
  - npm test -- --help
  - jest help
