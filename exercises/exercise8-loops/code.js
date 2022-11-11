function makeXAsterisks(length) {
  var word = "";
  for (var x = 0; x < length; x++) {
    word += "*";
  }
  return word;
}

function makeArrayOfNumbersUpToX(x) {
  var numbers = [];
  for (var y = 1; y <= x; y++) {
    numbers.push(y);
  }
  return numbers;
}

function makeWordWithXLetterY(x, y) {
  var word = "";
  for (var c = 0; c < x; c++) {
    word += y;
  }
  return word;
}

function reverseWord(w) {
  var rWord = "";
  for (var x = w.length - 1; x >= 0; x--) {
    rWord += w[x];
  }
  return rWord;
}

function removeVowels(w) {
  var result = "";
  for (var x = 0; x < w.length; x++) {
    var letter = w[x];
    if (
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
    ) {
      result += letter;
    }
  }
  return result;
}

function removeConsonants(w) {
  var result = "";
  for (var x = 0; x < w.length; x++) {
    var letter = w[x];
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
    ) {
      result += letter;
    }
  }
  return result;
}

function removeWordsOfLengthXPlus(wordList, size) {
  var result = [];

  for (var x = 0; x < wordList.length; x++) {
    var word = wordList[x];
    if (word.length < size) {
      result.push(word);
    }
  }
  return result;
}

function calculateAverage(arr) {
  var sum = 0;
  for (var x = 0; x < arr.length; x++) {
    sum += arr[x];
  }
  return sum / arr.length;
}

//Might be too hard
// function shortenName(name) {
//   var nameParts = name.replaceAll(/\.\,/g, "").split(" ");
//   if (nameParts.length == 1) {
//     return nameParts.pop();
//   }
//   var initials = [];
//   for (var x = 0; x < nameParts.length - 1; x++) {
//     var letter = nameParts[x][0];
//     initials.push(letter.toUpperCase() + ".");
//   }
//   initials.push(nameParts.pop());
//   var shortName = initials.join(" ");
//   return shortName;
// }
