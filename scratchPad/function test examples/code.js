function rand(x) {
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

function reverseString(s) {
  return s.split("").reverse().join("");
}
