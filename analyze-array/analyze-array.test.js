const analyzeArray = require("./analyze-array");

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test("average", () => expect(object.average).toBe(4));
test("min", () => expect(object.min).toBe(1));
test("max", () => expect(object.max).toBe(8));
test("length", () => expect(object.length).toBe(6));
