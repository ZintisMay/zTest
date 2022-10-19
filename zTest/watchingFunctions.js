function watchFunction(obj, funcName) {
  console.log(obj, obj?.constructor?.name);
  let constructorName = obj?.constructor?.name || null;
  let counter = 0;
  let oFunc;

  // const oFunc = obj[funcName];

  if (constructorName && constructorName !== "Window") {
    obj["originalFunction"] = obj[funcName];
    obj[funcName] = (...args) => {
      counter += 1;
      console.log("watching", funcName, counter);
      try {
        return obj["originalFunction"](...args);
      } catch (e) {
        console.log("error with class method call");
        return undefined;
      }
    };
  } else {
    oFunc = obj[funcName];
    obj[funcName] = (...args) => {
      counter += 1;
      console.log("watching", funcName, counter);
      return oFunc(...args);
    };
  }

  return {
    reset: () => {
      obj[funcName] = obj["originalFunction"];
      delete obj["originalFunction"];
    },
    getCount: () => {
      return counter;
    },
  };
}

let a = [1, 2, 3];
let watcherParseInt = watchFunction(window, "parseInt");
let watcherRandom = watchFunction(Math, "random");
let watcherMap = watchFunction(a, "map");
parseInt();
Math.random();
let result = a.map((i) => i * 2);
console.log(result);
