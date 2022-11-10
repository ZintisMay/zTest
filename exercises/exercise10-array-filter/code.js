function removeOddNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function removeNumbersLessThan3(arr) {
  return arr.filter((num) => num > 3);
}

function removeLetterFromArray(arr, letterToRemove) {
  return arr.filter((letter) => letter != letterToRemove);
}

function removeVowelsFromArray(arr) {
  return arr.filter((letter) => !["a", "e", "i", "o", "u"].includes(letter));
}

function removeEmptyStringsFromArray(arr) {
  return arr.filter((s) => s.length > 0);
}

//need more...
