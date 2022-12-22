function makeYAmpersands(length) {
  var word = "";
  for (var x = 0; x < length; x++) {
    word += "&";
  }
  return word;
}

function allNumbersFromXToOne(x) {
  var numbers = [];
  for (var y = x; y >= 1; y--) {
    numbers.push(y);
  }
  return numbers;
}

function makeStringWithXLetters(y, x) {
  var word = "";
  for (var c = 0; c < x; c++) {
    word += y;
  }
  return word;
}

// finished at exercise above, must resume at exercise below

function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}

function removeSmallNumbers(num) {
  let numArray = num.toString().split("");
  var result = [];
  for (var i = 0; i < numArray.length; i++) {
    if (
      numArray[i] == "5" ||
      numArray[i] == "6" ||
      numArray[i] == "7" ||
      numArray[i] == "8" ||
      numArray[i] == "9"
    ) {
      console.log(result);
      result.push(numArray[i]);
      console.log(result);
    }
  }
  return Number(result.join(""));
}

function removeLargeNumbers(num) {
  let numArray = num.toString().split("");
  var result = [];
  for (var i = 0; i < numArray.length; i++) {
    if (
      numArray[i] == "0" ||
      numArray[i] == "1" ||
      numArray[i] == "2" ||
      numArray[i] == "3" ||
      numArray[i] == "4"
    ) {
      result.push(numArray[i]);
    }
  }
  return Number(result.join(""));
}

function keepOnlyLongWords(wordList, size) {
  var result = [];

  for (var x = 0; x < wordList.length; x++) {
    var word = wordList[x];
    if (word.length >= size) {
      result.push(word);
    }
  }
  return result;
}

function calculateAndMultiply(arr) {
  var sum = 1;
  for (var x = 0; x < arr.length; x++) {
    sum = sum * arr[x];
  }
  return sum / arr.length;
}
