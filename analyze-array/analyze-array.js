function analyzeArray(arr) {
  const object = {
    average: average(arr),
    min: min(arr),
    max: max(arr),
    length: length(arr),
  };

  return object;
}

function average(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

function min(arr) {
  arr.sort((a, b) => a - b);

  return arr[0];
}

function max(arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

function length(arr) {
  return arr.length;
}

module.exports = analyzeArray;
