function makeArrayOfY(length, item) {
  var arr = [];
  for (let x = 0; x < length; x++) {
    arr.push(item);
  }
  return arr;
}

function reverseTheArray(arr) {
  return arr.reverse();
}

function sortAlphabetically(arr) {
  return arr.sort();
}

function incrementNumbers(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}

function decrementNumbers(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}
