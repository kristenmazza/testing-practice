const capitalize = require("./capitalize");

test("returns string with first character capitalized", () =>
  expect(capitalize("hi there")).toMatch("Hi there"));
