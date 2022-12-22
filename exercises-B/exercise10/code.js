function removeWordsThatAreShort(arr) {
  return arr.filter((str) => str.length > 3);
}

function removeWordsThatAreLong(arr) {
  return arr.filter((str) => str.length < 8);
}

function removeNegativeNumbers(arr) {
  return arr.filter(function (x) {
    if (x >= 0) {
      return x;
    }
  });
}

function removeWordsShorterThanX(arr, x) {
  let result = [];
  arr.filter(function (element) {
    if (element.length >= x) {
      result.push(element);
    }
  });
  return result;
}

function findTheIndexOfWord(arr, str) {
  let result = 0;
  arr.filter(function (element, index) {
    if (element === str) {
      result = index;
    }
  });
  return result;
}

function getSmallNumberIndices(arr) {
  let result = [];
  arr.filter(function (element, index) {
    if (element < 10) {
      result.push(index);
    }
  });
  return result;
}

function removeVowelsFromWords(arr) {
  let result = [];
  arr.filter(function (element) {
    result.push(element.replace(/([aeiou])/g, ""));
  });
  return result;
}

function removeConsonantsFromWords(arr) {
  let result = [];
  arr.filter(function (element) {
    result.push(element.replace(/([bcdfghjklmnpqrstvwxyz])/gi, ""));
  });
  return result;
}

// this one is really advanced, but super helpful if they want to get to the next level

function amountOfCharactersInString(word) {
  let wordArray = word.split("");
  let obj = {};
  wordArray.filter(function (x) {
    obj[x] = 0;
  });
  wordArray.filter(function (x) {
    obj[x] = obj[x] + 1;
  });
  return obj;
}
