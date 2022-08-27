let testCounter = 0;
const body = document.body;
const PASSED_CSS = "color:green";
const FAILED_CSS = "color:red";
const WARNING_CSS = "color:orange";
const NORMAL_CSS = "color:default";

const LIGHT_RED = "#FF6961";
const LIGHT_GREEN = "#77DD77";
const GRAY = "#6c757d";

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
  // Create Div
  let testConsole = document.createElement("div");
  let anyTestFailed = arr.find((item) => !!item.result);
  let allTestsFailed = arr.every((item) => !!item.result);
  console.log("allTestsFailed", allTestsFailed);
  let sectionBGColor = LIGHT_GREEN;
  if (allTestsFailed) {
    sectionBGColor = GRAY;
  } else if (anyTestFailed) {
    sectionBGColor = LIGHT_RED;
  }
  console.log("anyTestFailed", anyTestFailed);
  testConsole.style.cssText = `
    padding: 10px 10px; 
    margin: 5px; 
    background-color: ${sectionBGColor}; 
    border-radius: 10px;
  `;

  // Create Title
  let h2 = document.createElement("h2");
  h2.style.cssText = `
    padding: 0px;
    margin: 0px;
  `;
  h2.innerHTML = `${arr[0].section}`;
  testConsole.appendChild(h2);

  // Go through tests
  arr.forEach((item) => {
    const itemPassed = !item.result;
    let testContainer = document.createElement("div");
    testContainer.style.cssText = `
      padding: 3px;
      border-radius: 5px;
    `;

    // Add pass fail sticker
    const passFail = itemPassed ? "PASSED " : "FAILED ";
    let span = document.createElement("span");
    span.style.color = itemPassed ? "green" : "red";
    span.innerHTML = passFail;
    testContainer.appendChild(span);

    // Add Test Description
    testContainer.innerHTML += item.description;

    // Add Test Error
    if (item.result) {
      let errorSpan = document.createElement("span");
      errorSpan.style.color = "red";
      errorSpan.textContent = " " + item.result;
      testContainer.appendChild(errorSpan);
    }

    // Append to testConsole
    testConsole.appendChild(testContainer);
  });

  body.appendChild(testConsole);
}
