function welcome(name) {
  return `Hey there ${name}!`;
}

function isThisTruthy(val) {
  return !!val;
}

function isThisNumberOdd(n) {
  return n % 2 !== 0;
}

function makeNumberPositive(n) {
  if (n < 0) {
    return n * -1;
  }
  return n;
}

function doYouLikeCats(hungry) {
  if (hungry) {
    return "I love cats!";
  }
  return "I don't really like cats :(";
}

function stringLength(string) {
  return string.length;
}

function movieTitle(title, yearOfRelease, mainCharacter) {
  return { title, yearOfRelease, mainCharacter };
}

// function createStudent(firstName, lastName, yearBorn, schoolName) {
//   return {
//     firstName,
//     lastName,
//     yearBorn,
//     schoolName,
//   }; return Math.floor(cost / 1000);
// }

function bitcoinPrice(cost) {
  return `The bitcoin price is currently set at ${Math.floor(
    cost / 1000
  )} thousands`;
}
