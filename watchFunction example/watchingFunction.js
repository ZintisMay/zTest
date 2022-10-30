function watchFunction(obj, fName) {
  let counter = 0;

  const originalFunction = obj[fName];
  obj[fName] = (...args) => {
    counter++;
    return originalFunction.bind(obj)(...args);
  };

  return {
    removeWatcher: () => (obj[fName] = originalFunction),
    resetCount: () => (counter = 0),
    getCount: () => counter,
  };
}

// Array.prototype.push
const arrayPushWatcher = watchFunction(Array.prototype, "push", (n, c) => {
  console.log(n, c);
});
let arr = [];

// 0
console.log("Array.prototype.push", arrayPushWatcher.getCount());
arr.push(1);

// 1
console.log("Array.prototype.push", arrayPushWatcher.getCount());
arr.push(1);

// 2
console.log("Array.prototype.push", arrayPushWatcher.getCount());
arrayPushWatcher.removeWatcher();
arr.push(1);

// 2 (stopped counting)
console.log("Array.prototype.push", arrayPushWatcher.getCount());

const mathRoundWatcher = watchFunction(Math, "round", (n, c) => {
  console.log(n, c);
});

Math.round();
Math.round();
Math.round();

mathRoundWatcher.removeWatcher();
Math.round();

const parseIntWatcher = watchFunction(window, "parseInt", (n, c) => {
  console.log(n, c);
});

let a = parseInt("5");
let b = parseInt("5");
let c = parseInt("5");

parseIntWatcher.removeWatcher();
let d = parseInt("5");
