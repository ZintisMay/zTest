function welcome(x) {
  return `Hey there ${x}!`;
}

function isThisTruthy(x) {
  return !!x;
}

function isThisNumberOdd(x) {
  return x % 2 === 1;
}

function makeNumberPositive(x) {
  return Math.abs(x);
}

function doYouLikeCats(x) {
  return x ? "I love cats!" : "I don't really like cats.";
}

function stringLength(x) {
  return x.length;
}

function movieTitle(x, y, z) {
  return {
    title: x,
    yearOfRelease: y,
    mainCharacter: z,
  };
}

function bitcoinPrice(x) {
  return `The bitcoin price is currently set at ${Math.floor(
    x / 1000
  )} thousand.`;
}
