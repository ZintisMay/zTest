function removeOddNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function removeEvenNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function removeNumbersLessThan3(arr) {
  return arr.filter((num) => num >= 3);
}

function removeNumbersLessThanX(arr, x) {
  return arr.filter((num) => num >= x);
}

function removeEmptyStrings(arr) {
  return arr.filter((s) => s.length > 0);
}

function removeVowelsFromArray(arr) {
  return arr.filter((letter) => !["a", "e", "i", "o", "u"].includes(letter));
}

function removeConsonantsFromArray(arr) {
  return arr.filter((letter) => ["a", "e", "i", "o", "u"].includes(letter));
}

function removeWordFromArray(arr, wordToRemove) {
  return arr.filter((word) => word != wordToRemove);
}
