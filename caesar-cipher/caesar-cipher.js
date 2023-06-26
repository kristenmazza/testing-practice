function getLetter(num) {
  const letter = String.fromCharCode(num);
  return letter;
}

function getNumber(letter) {
  const upperCaseLetter = letter.toUpperCase();
  const number = upperCaseLetter.charCodeAt();
  return number;
}

function isLowerCase(char) {
  return char === char.toLowerCase();
}

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

function caesarCipher(string, num) {
  let newString = "";
  for (let i = 0; i <= string.length - 1; i++) {
    let letterNumber = getNumber(string.charAt(i));
    let shiftedFactor = letterNumber + num;

    if (shiftedFactor > 90) {
      shiftedFactor = shiftedFactor - 26; // (-90 + 64);
    }

    let newLetter = getLetter(shiftedFactor);

    if (!isLetter(string.charAt(i))) {
      newString += string.charAt(i);
    } else if (isLowerCase(string.charAt(i))) {
      newString += newLetter.toLowerCase();
    } else {
      newString += newLetter;
    }
  }

  return newString;
}

module.exports = caesarCipher;
