function arrayValuesPlusOne(arr) {
  return arr.map((num) => num + 1);
}

function doubleArrayValues(arr) {
  return arr.map((num) => num * 2);
}

function halveArrayValues(arr) {
  return arr.map((num) => num / 2);
}

function squareArrayValues(arr) {
  return arr.map((num) => num ** 2);
}

function onlyFirstLetterOfWords(words) {
  return words.map((w) => w[0]);
}

function onlyLastLetterOfWords(words) {
  return words.map((w) => w[w.length - 1]);
}
