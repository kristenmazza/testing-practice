const caesarCipher = require("./caesar-cipher");

test("shifts basic string", () =>
  expect(caesarCipher("abcd", 1)).toMatch("bcde"));

test("keeps same case", () =>
  expect(caesarCipher("Hello", 1)).toMatch("Ifmmp"));

test("wraps from z to a", () => expect(caesarCipher("xyz", 3)).toMatch("abc"));

test("punctuation", () =>
  expect(caesarCipher("How fun!", 1)).toMatch("Ipx gvo!"));
