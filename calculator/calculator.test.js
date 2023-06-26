const calculator = require("./calculator");

test("adds 2+3", () => expect(calculator.add(2, 3)).toBe(5));

test("subtracts 10-1", () => expect(calculator.subtract(10, 1)).toBe(9));

test("divides 12/2", () => expect(calculator.divide(12, 2)).toBe(6));

test("multiplies 8*8", () => expect(calculator.multiply(8, 8)).toBe(64));
