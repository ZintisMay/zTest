function makeArrayOfThings(length, item) {
  var arr = [];
  for (let x = 0; x < length; x++) {
    arr.push(item);
  }
  return arr;
}

function reverseArray(arr) {
  return arr.reverse();
}

function sortLetters(arr) {
  return arr.sort();
}

function sortNumbers(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}

function sortByWordLength(arr) {
  return arr.sort((a, b) => {
    return a.length - b.length;
  });
}
