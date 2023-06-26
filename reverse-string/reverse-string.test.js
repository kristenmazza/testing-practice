const reverseString = require("./reverse-string");

test("reverses string", () => expect(reverseString("panda")).toMatch("adnap"));
