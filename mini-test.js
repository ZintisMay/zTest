let testCounter = 0;
const PASSED_CSS = "color:green";
const FAILED_CSS = "color:red";
const NORMAL_CSS = "color:black";

function miniTestAll(arr) {
  arr.forEach((item) => {
    miniTest(item.description, item.function);
  });
}

function miniTest(description, func) {
  testCounter++;
  try {
    func();
    console.log(`Test #${testCounter}: ${description} %c PASSED`, PASSED_CSS);
  } catch (e) {
    console.log(`Test #${testCounter}: ${description} %c FAILED`, FAILED_CSS);
  }
}

function expect(value) {
  return {
    value,
    toBe,
    isDeclared,
    isNumber,
    isString,
    isFunction,
    isArray,
    isObject,
    toBeSameArrayAs,
    toBeSameObjectAs,
  };
}

function isDeclared() {
  if (typeof this.value === undefined) {
    throw new Error(`is not declared`);
  }
}
function isNumber() {
  if (typeof this.value !== "number") {
    throw new Error(`is not a number`);
  }
}
function isString() {
  if (typeof this.value !== "string") {
    throw new Error(`is not string`);
  }
}
function isFunction() {
  if (typeof this.value !== "function") {
    throw new Error(`is not function`);
  }
}
function isArray() {
  if (!Array.isArray(this.value)) {
    throw new Error(`is not array`);
  }
}
function isObject() {
  if (
    typeof this.value !== "object" ||
    Array.isArray(this.value) ||
    this.value === null
  ) {
    throw new Error(`is not object`);
  }
}

function toBe(x) {
  if (this.value !== x) {
    throw new Error(`not toBe ${x}`);
  }
}
function toBeSameArrayAs(x) {
  if (JSON.stringify(x) !== JSON.stringify(this.value)) {
    throw new Error(`not toBe ${x}`);
  }
}
function toBeSameObjectAs(x) {
  console.log(x, this.value);
  const sameKeyCount = Object.keys(x).length === Object.keys(this.value).length;
  console.log(sameKeyCount);
  if (!sameKeyCount) return false;
  for (const key in x) {
    console.log(this.value[key], x[key], this.value[key] !== x[key]);
    if (this.value[key] !== x[key]) return false;
  }
  return true;
}

miniTestAll(MINI_TESTS);
