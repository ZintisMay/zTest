let testCounter = 0;
const body = document.body;
const PASSED_CSS = "color:green";
const FAILED_CSS = "color:red";
const WARNING_CSS = "color:orange";
const NORMAL_CSS = "color:default";

function miniTestAll(arr) {
  let miniTestResults = arr.map((item) => {
    const testResult = miniTest(item.description, item.function);
    return { ...item, result: testResult };
  });
  // console.log(miniTestResults);
  miniTestDisplayResults(miniTestResults);
}

function miniTest(description, func) {
  testCounter++;
  let error;
  try {
    func();
    console.log(`Test #${testCounter}: ${description} %c PASSED`, PASSED_CSS);
  } catch (e) {
    error = e;
    console.log(
      `Test #${testCounter}: ${description} %c FAILED %c ${e}`,
      FAILED_CSS,
      WARNING_CSS
    );
  }
  return error || null;
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
  if (!_.isEqual(x, this.value)) {
    throw new Error(
      `not same arrays ${JSON.stringify(x)} ${JSON.stringify(this.value)}`
    );
  }
}

function toBeSameObjectAs(x) {
  console.log(x, this.value);
  if (!_.isEqual(x, this.value)) {
    throw new Error(`objects are not equal`);
  }
}

miniTestAll(MINI_TESTS);

function miniTestDisplayResults(miniTestResults) {
  console.log(miniTestResults);
  let results = {};
  for (let item of miniTestResults) {
    let section = item.section;
    if (!results[section]) {
      results[section] = [];
    }
    results[section].push(item);
  }
  console.log(results);
  for (let key in results) {
    console.log(key);
    populateSection(results[key]);
  }
}

function populateSection(arr) {
  let div = document.createElement("div");
  div.style.padding = "10px 10px";
  div.style.margin = "5px";
  // div.style.border = "5px solid black";
  div.style.backgroundColor = "gray";
  div.style.borderRadius = "10px";
  let h2 = document.createElement("h2");
  h2.style.padding = "0px";
  h2.style.margin = "0px";
  h2.innerHTML = `${arr[0].section}`;
  div.appendChild(h2);
  arr.forEach((item) => {
    const itemPassed = !item.result;
    let el = document.createElement("div");
    const itemText = itemPassed ? "PASSED " : "FAILED ";
    let span = document.createElement("span");
    span.style.color = itemPassed ? "green" : "red";
    span.innerHTML = itemText;

    el.appendChild(span);
    el.style.padding = "3px";
    el.style.borderRadius = "5px";
    el.innerHTML += item.description;
    if (item.result) {
      let errorSpan = document.createElement("span");
      errorSpan.style.color = "red";
      errorSpan.textContent = " " + item.result;
      el.appendChild(errorSpan);
    }

    div.appendChild(el);
  });

  body.appendChild(div);
}
