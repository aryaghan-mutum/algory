# Useful Commands for the Project

###### Tests
```properties
Run all tests: npm t or npm test
Run a specific test: npm test -- SomeFile.test.ts or jest SomeFile.test.ts or npm test -t SomeFile.test.ts
Help: npm test -- --help or jest help
```

###### Debug
```properties
- Debug: node --debug-brk --inspect ./node_modules/jest/bin/jest -i
- Debug and Watch: node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand --watch 
- Go to chrome browser and type: chrome://inspect/#devices
- Click Inspect link
```

###### Coverage 
```properties
jest --coverage
```

###### Eslint
Setup Configuration file:
```properties
eslint --init
```
