function rand(x) {
  let d = parseInt("4");
  return Math.floor(Math.random() * x + 1);
}

function changeToInt(x) {
  return parseInt(x);
}

function concatArrays(a, b) {
  let result = a;
  b.forEach((item) => {
    result.push(item);
  });
  return result;
}
