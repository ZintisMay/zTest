const Z_T = {
  containerParent: document.getElementById("Z_T") || document.body,
  testContainer: null,
  testCounter: [],
  comletelyPassed: true,
  type: {
    BOOLEAN: "boolean",
    NUMBER: "number",
    STRING: "string",
    FUNCTION: "function",
    OBJECT: "object",
    // ARRAY: "", // This one doesn't work like that, need Array.isArray(arr)
  },
  colors: {
    LIGHT_RED: "#FF6961",
    LIGHT_GREEN: "#77DD77",
    LIGHT_ORANGE: "#FFB347",
    DARK_GREEN: "green",
    DARK_RED: "#8b0000",
    GRAY: "#6c757d",
  },
  css: {
    color: {
      BLACK: "color:black;",
      PASSED: "color:green;",
      FAILED: "color:#8b0000;",
      WARNING: "color:orange;",
      NORMAL: "color:default;",
      PRIMARY: "color:#1DA1F2;",
    },
    bg: {
      PASSED: "background-color:green;",
      FAILED: "background-color:#8b0000;",
      WARNING: "background-color:orange;",
      NORMAL: "background-color:default;",
      PRIMARY: "background-color:#1DA1F2;",
    },
  },
};

// execute all categories and subtests, then display results
Z_T.testAll = function (testSuite) {
  let results = {};

  for (let sectionKey in testSuite) {
    let { tests = [], title, instructions } = testSuite[sectionKey];

    console.log(
      `%cSection: ${title}`,
      Z_T.css.bg.PRIMARY + " " + Z_T.css.color.BLACK
    );

    let sectionResult = {};

    finishedTests = tests.map((test) => {
      const testRes = Z_T.test(test.description, test.test);
      return { ...test, result: testRes };
    });

    sectionResult.title = title;
    sectionResult.instructions = instructions;
    sectionResult.results = finishedTests;

    results[sectionKey] = sectionResult;
  }

  Z_T.displayResults(results);

  if (Z_T.comletelyPassed) {
    Z_T.addBigCheckMark();
  }
  Z_T.completedTests = results;
};

// Evaluates the test, logs in the console, provides a resulting error (or null, null is passing)
Z_T.test = function (description, testFunc) {
  Z_T.testCounter.push(description);
  const {
    testCounter,
    css: {
      color: { FAILED, WARNING, PASSED, PRIMARY },
    },
  } = Z_T;
  let error;
  try {
    testFunc();
    console.log(
      `%c Test #${testCounter.length}:` + ` ${description} %c PASSED`,
      PRIMARY,
      PASSED
    );
  } catch (e) {
    error = e;
    console.log(
      `%c Test #${testCounter.length}:` + ` ${description} %c FAILED %c ${e}`,
      PRIMARY,
      FAILED,
      WARNING
    );
  }
  return error || null;
};

// Sets the object value and provides the function toolset.
function expect(value) {
  return {
    // basics
    value,
    args: [],

    // declared variables
    toBe,
    toBeDeclared,
    toHaveValue,

    // typing
    toBeType, // generic (not for arrays)
    toBeNumber,
    toBeDecimal,
    toBeInteger,
    toBeString,
    toBeBoolean,
    toBeArray,
    toBeObject,
    toBeFunction,

    // comparison
    toBeSameArrayAs,
    toBeSameObjectAs,
    toBeTruthy,
    toBeFalsey,
    toBeBetween,

    // arrays
    toHaveLength,
    toOnlyContainType,

    // objects
    toHaveObjectKeyCount,
    toHaveKey,
    toHaveKeys,
    toHaveKeyValuePair,

    // functions
    withArgs,
    callsFunction,
    exec, // used to call function values and store result

    //checks function returns
    takesXArguments,
    toReturnSomething,
    toReturn,
    toReturnNumber,
    toReturnDecimal,
    toReturnInteger,
    toReturnString,
    toReturnBoolean,
    toReturnArray,
    toReturnArrayOfType,
    toReturnObject,
    toReturnFunction,
    toReturnBetween,
    toReturnUndefined,

    // Custom
    customTest,
  };

  function toBe(x) {
    if (!_.isEqual(x, this.value)) {
      throw new Error(`not toBe ${x}`);
    }
    return this;
  }

  function toBeDeclared() {
    if (typeof this.value === undefined) {
      throw new Error(`is not declared`);
    }
    return this;
  }

  function toHaveValue() {
    if (this.value === undefined) {
      throw new Error(`has no value`);
    }
    return this;
  }

  function toBeType(type) {
    if (typeof this.value !== type) {
      throw new Error(`is not ${type}`);
    }
    return this;
  }

  function toBeNumber() {
    if (typeof this.value !== "number") {
      throw new Error(`is not a number`);
    }
    return this;
  }

  function toBeDecimal() {
    if (typeof this.value !== "number" || this.value % 1 === 0) {
      throw new Error(`is not a decimal`);
    }
    return this;
  }

  function toBeInteger() {
    if (typeof this.value !== "number" || this.value % 1 !== 0) {
      throw new Error(`is not an integer`);
    }
    return this;
  }

  function toBeString() {
    if (typeof this.value !== "string") {
      throw new Error(`is not string`);
    }
    return this;
  }

  function toBeFunction() {
    if (typeof this.value !== "function") {
      throw new Error(`is not function`);
    }
    return this;
  }

  function toBeBoolean() {
    if (typeof this.value !== "boolean") {
      throw new Error(`is not a boolean`);
    }
    return this;
  }

  function toBeArray() {
    if (!Array.isArray(this.value)) {
      throw new Error(`is not array`);
    }
    return this;
  }

  function toBeObject() {
    if (typeof this.value !== "object" || this.value === null) {
      throw new Error(`is not object`);
    } else if (Array.isArray(this.value)) {
      throw new Error(`is an array (technically an object)`);
    }
    return this;
  }

  function toBeTruthy() {
    if (!!this.value === false) {
      throw new Error(`should be truthy`);
    }
    return this;
  }

  function toBeFalsey() {
    if (!!this.value === true) {
      throw new Error(`should be falsey`);
    }
    return this;
  }

  function toBeBetween(x, y) {
    if (!(this.value >= x) || !(this.value <= y)) {
      throw new Error(`is not between ${x} and ${y}`);
    }
    return this;
  }

  function toReturnBetween(x, y) {
    const result = this.exec();
    if (!(result >= x) || !(result <= y)) {
      throw new Error(`did not return between ${x} and ${y}`);
    }
    return this;
  }

  function toReturnUndefined() {
    const result = this.exec();
    if (result !== undefined) {
      throw new Error(`did not return undefined`);
    }
  }

  function withArgs(...args) {
    this.args = [...args];
    return this;
  }

  function toHaveObjectKeyCount(x) {
    if (Object.keys(this.value).length !== x) {
      throw new Error(`incorrect object key count`);
    }
    return this;
  }

  function toHaveKey(x) {
    if (this.value[x] === undefined) {
      throw new Error(`object does not have key ${x}`);
    }
    return this;
  }

  function toHaveKeys(...keys) {
    let missingKeys = keys.filter((key) => this.value[key] === undefined);
    if (missingKeys.length > 0) {
      throw new Error(`object does not have keys: ${missingKeys.join(", ")}`);
    }
    return this;
  }

  function toHaveKeyValuePair(x, y) {
    if (this.value[x] !== y) {
      throw new Error(`object does not have key ${x} with value ${y}`);
    }
    return this;
  }

  function toHaveLength(x) {
    if (this.value.length !== x) {
      throw new Error(`length is ${this.value.length} but should be ${x}`);
    }
    return this;
  }

  function toOnlyContainType(x) {
    if (!this.value.every((item) => typeof item === x)) {
      throw new Error(`items are not all type ${x}`);
    }
    return this;
  }

  function toBeSameArrayAs(x) {
    if (!Array.isArray(x)) {
      throw new Error(
        `There is a problem with the test (value to compare to is not array type), please contact the test creator.`
      );
    } else if (!Array.isArray(this.value)) {
      throw new Error(`Value is not array type`);
    } else if (!_.isEqual(x, this.value)) {
      throw new Error(
        `your array ${JSON.stringify(
          this.value
        )} is not the same as ${JSON.stringify(x)}`
      );
    }
    return this;
  }

  function toBeSameObjectAs(x) {
    if (typeof x !== Z_T.type.OBJECT) {
      throw new Error(
        `There is a problem with the test (value to compare to is not object type), please contact the test creator.`
      );
    } else if (Array.isArray(x)) {
      throw new Error(`value is an array, but should be object.`);
    } else if (!_.isEqual(x, this.value)) {
      throw new Error(
        `your object ${JSON.stringify(
          this.value
        )} is not the same as ${JSON.stringify(x)}`
      );
    }
    return this;
  }

  function exec() {
    return this.value(...this.args);
  }

  function toReturn(expectedVal) {
    const returnVal = this.exec();
    if (!_.isEqual(returnVal, expectedVal)) {
      let ev = expectedVal;
      let rv = returnVal;
      if (typeof ev === "object") {
        ev = JSON.stringify(ev, null, " ");
      }
      if (typeof rv === "object") {
        rv = JSON.stringify(rv, null, " ");
      }
      throw new Error(`expected return value ${ev} but got ${rv}`);
    }
    return this;
  }

  function toReturnBoolean() {
    if (typeof this.exec() !== Z_T.type.BOOLEAN) {
      throw new Error(`function does not return boolean type`);
    }
    return this;
  }
  function toReturnNumber() {
    if (typeof this.exec() !== Z_T.type.NUMBER) {
      throw new Error(`function does not return number type`);
    }
    return this;
  }
  function toReturnDecimal() {
    var result = this.exec();
    if (typeof result !== Z_T.type.NUMBER && result % 1 === 0) {
      throw new Error(`function does not return a decimal number`);
    }
    return this;
  }
  function toReturnInteger() {
    var result = this.exec();
    if (typeof result !== Z_T.type.NUMBER && result % 1 !== 0) {
      throw new Error(`function does not return an integer number`);
    }
    return this;
  }
  function toReturnString() {
    if (typeof this.exec() !== Z_T.type.STRING) {
      throw new Error(`function does not return string type`);
    }
    return this;
  }
  function toReturnObject() {
    if (typeof this.exec() !== Z_T.type.OBJECT) {
      throw new Error(`function does not return object type`);
    }
    return this;
  }
  function toReturnFunction() {
    if (typeof this.exec() !== Z_T.type.FUNCTION) {
      throw new Error(`function does not return function type`);
    }
    return this;
  }
  function toReturnArray() {
    if (!Array.isArray(this.exec())) {
      throw new Error(`function does not return array type`);
    }
    return this;
  }
  function toReturnArrayOfType(type) {
    let result = this.exec();
    if (!Array.isArray(result)) {
      throw new Error(`function does not return array type`);
    }
    result.forEach((item) => {
      if (typeof item !== type) {
        throw new Error(`array item ${item} is not of type ${type}`);
      }
    });

    return this;
  }
  function toReturnSomething() {
    if (this.exec() === undefined) {
      throw new Error(`returns value is undefined`);
    }
    return this;
  }
  function takesXArguments(argumentCount) {
    if (typeof this.value !== "function") {
      throw new Error(
        `should take ${argumentCount} arguments but isn't a function`
      );
    } else if (this.value.length !== argumentCount) {
      throw new Error(
        `should take ${argumentCount} arguments but takes ${this.value.length} instead`
      );
    }
    return this;
  }

  function customTest(f) {
    this._CUSTOM_TEST = f;
    this._CUSTOM_TEST();
    return this;
  }

  function callsFunction(obj, fName) {
    let callCount = 0;
    const originalFunction = obj[fName];

    obj[fName] = (...args) => {
      callCount++;
      return originalFunction.bind(obj)(...args);
    };

    // try catch needed to reset function watcher
    try {
      this.exec();
    } catch (e) {
      // This error bubbles up to Z_T
      throw new Error(e);
    } finally {
      // reset function watcher
      obj[fName] = originalFunction;
    }

    // was function called?
    if (callCount === 0) {
      throw new Error(`${fName} was not called`);
    }
    return this;
  }
}

// Displays the test results as divs on the page
Z_T.displayResults = function (section) {
  // Create vertical Section list
  const testContainer = document.createElement("div");
  testContainer.style.cssText = `
    display:inline-flex;
    flex-direction:column;
    flex-wrap:wrap;
    height: 98vh;
    align-items:start;
    justify-content: flex-start;
  `;
  Z_T.containerParent.appendChild(testContainer);
  Z_T.testContainer = testContainer;

  // Iterate over test sections
  let resultCounter = 0;
  for (let key in section) {
    section[key].testId = ++resultCounter;
    console.log(section[key]);
    Z_T.populateSection(section[key]);
  }
};

// Displays each section as a colored box
Z_T.populateSection = function (section) {
  const { testId, results = [], title = "NO TITLE", instructions } = section;
  const {
    colors: { LIGHT_GREEN, LIGHT_ORANGE, LIGHT_RED, DARK_GREEN, DARK_RED },
  } = Z_T;

  // Create Div
  const sectionDiv = document.createElement("div");

  // Assign bg color
  const allTestsFailed = results.every((item) => !!item.result);
  const anyTestFailed = results.find((item) => !!item.result);

  let sectionBGColor = LIGHT_GREEN; // All tests passed
  if (allTestsFailed) {
    sectionBGColor = LIGHT_RED;
    Z_T.comletelyPassed = false;
  } else if (anyTestFailed) {
    sectionBGColor = LIGHT_ORANGE;
    Z_T.comletelyPassed = false;
  }

  sectionDiv.style.cssText = `
    padding: 10px 10px; 
    margin: 5px; 
    background-color: ${sectionBGColor}; 
    border-radius: 10px;
    width:300px;
  `;

  // Create Title
  let h2 = document.createElement("h2");
  h2.style.cssText = `
    padding: 0px;
    margin: 0px;
  `;
  h2.innerHTML = `${testId}: ${title}`;
  sectionDiv.appendChild(h2);

  // Create Instructions
  if (instructions) {
    let instructionText = document.createElement("p");
    let b = document.createElement("b");
    b.textContent = "Instructions: ";
    instructionText.appendChild(b);
    instructionText.innerHTML += instructions;
    instructionText.style.cssText = `
      margin: 10px 0;
    `;
    sectionDiv.appendChild(instructionText);
  }

  // Go through tests
  results.forEach((item) => {
    const itemPassed = !item.result;
    let testContainer = document.createElement("div");
    testContainer.style.cssText = `
      padding: 3px;
      border-radius: 5px;
    `;

    // Add pass fail sticker
    const passFail = itemPassed ? "PASSED " : "FAILED ";
    let span = document.createElement("span");
    span.style.cssText = `padding:2px 5px;display:inline-flex;margin:0 3px 0 0;border-radius:5px;`;
    span.style.backgroundColor = itemPassed ? DARK_GREEN : DARK_RED;
    span.style.color = "white";
    span.innerHTML = passFail;
    testContainer.appendChild(span);

    // Add Test Description
    testContainer.innerHTML += item.description;

    // Add Test Error
    if (item.result) {
      let errorSpan = document.createElement("span");
      errorSpan.style.color = DARK_RED;
      // errorSpan.style.backgroundColor = "red";
      errorSpan.style.fontWeight = 700;
      errorSpan.textContent = " " + item.result;
      testContainer.append(errorSpan);
    }

    // Append to sectionDiv
    sectionDiv.appendChild(testContainer);
  });

  Z_T.testContainer.appendChild(sectionDiv);
};

Z_T.addBigCheckMark = function () {
  const checkMark = document.createElement("div");
  checkMark.style.cssText = `
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    font-size:50vw;
    color:green;
    z-index: 5000;
    font-weight: bold;
    opacity:.5;
  `;
  checkMark.innerHTML = "&check;";
  document.body.appendChild(checkMark);
};
