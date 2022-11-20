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

// function squareArrayValues(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i] ** 2;
//   }
//   return result;
// }

function onlyFirstLetterOfWords(words) {
  return words.map((w) => w[0]);
}

function onlyLastLetterOfWords(words) {
  return words.map((w) => w[w.length - 1]);
}

// too difficult?
// yes, this is 6 kyu (feedback provided by Aleksis)
function honorifics(people) {
  return people.map((person) => {
    var honorific;
    if (person.gender === "male") {
      honorific = "Mr. ";
    } else if (person.gender === "female") {
      honorific = "Ms. ";
    }
    return honorific + person.name;
  });
}
