# Testing Practice

This sandbox repo is to practice Test Driven Development (TDD) using Jest. Per instructions from [The Odin Project](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice), I first wrote tests for the following and then made the tests pass:
- A `capitalize` function that takes a string and returns it with the first character capitalized
- A `reverseString` function that takes a string and returns it reversed
- A `calculator` object that contains functions for `add`, `subtract`, `divide`, and `multiply`, which each take two numbers and return the correct calculation
- A `caesarCipher` function that takes a string and a shift factor and returns the string with each character shifted the given amount
- An `analyzeArray` function that takes an array of numbers and returns an object with the properties of `average`, `min`, `max`, and `length`

# Getting Started with Jest
1. Install Jest using `npm install --save-dev jest`
2. Create a file (e.g., `example.js`) and a test file (e.g., `example.test.js`)
3. Add the following to `package.json`:
```
{
  "scripts": {
    "test": "jest"
  }
}
```
4. Run `npm test`
5. To automatically run tests upon save, add the following to `package.json` and then run `npm run watch`:
```
{
  "scripts": {
    "watch": "jest --watch *.js"
  }
}
```
6. By default, the current version of Jest will not recognize ES6 import statements. To use ES6 import statements with Jest, follow the Jest instructions [here](https://jestjs.io/docs/getting-started#using-babel).