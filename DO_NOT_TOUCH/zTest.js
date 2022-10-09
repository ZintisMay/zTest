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

// zTestSuite should be defined in an earlier script.

// zTest example:
// const zTestSuite = {
//   nameOfTest: {
//     title: "someTitle",
//     tests: [
//       {
//         description: `variable X exists`,
//         function: () => {
//           expect(x).toBeDeclared();
//         },
//       },
//     ],
//   },
//   nameOfOtherTest: {
//     title: "someOtherTitle",
//     tests: [
//       {
//         description: `variable Y exists`,
//         function: () => {
//           expect(y).toBeDeclared();
//         },
//       },
//     ],
//   },
// };

// execute all categories and subtests, then display results
Z_T.testAll = function (testSuite) {
  let results = {};

  for (let sectionKey in testSuite) {
    let { tests = [], title } = testSuite[sectionKey];

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

// Sets a value and provides the function toolset. Makes for easier readability in test execution (i.e. expect(5).toBe(5) )
// (i.e. expect(functionAdd).withArgs(2,3).toReturn(5)))
function expect(value) {
  return {
    value,
    args: [],
    withArgs,
    exec,
    toBe,
    toBeDeclared,
    toBeType,
    toBeBoolean,
    toBeNumber,
    toBeString,
    toBeFunction,
    toBeArray,
    toBeObject,
    toBeSameArrayAs,
    toBeSameObjectAs,
    toBeTruthy,
    toBeFalsey,
    // toUseMethod,
    toReturn,
    toReturnNumber,
    toReturnString,
    toReturnObject,
    toReturnFunction,
    toReturnArray,
    toHaveObjectKeyCount,
    toHaveArrayLength,
    toReturnBoolean,
    toReturnSomething,
    toHaveValue,
    takesXArguments,
  };

  function toBe(x) {
    if (!_.isEqual(x, this.value)) {
      throw new Error(`not toBe ${x}`);
    }
    return this;
  }

  function toBeDeclared() {
    if (typeof this.value == undefined) {
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
      throw new Error(`is not a ${type}`);
    }
    return this;
  }

  function toBeNumber() {
    if (typeof this.value !== "number") {
      throw new Error(`is not a number`);
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
    if (
      typeof this.value !== "object" ||
      Array.isArray(this.value) ||
      this.value === null
    ) {
      throw new Error(`is not object`);
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

  function withArgs(...args) {
    this.args = [...args];

    return this;
  }

  function toHaveObjectKeyCount(x) {
    if (Object.keys(this.value) !== x) {
      throw new Error(`incorrect object key count`);
    }
    return this;
  }

  function toHaveArrayLength(x) {
    if (this.value.length !== x) {
      throw new Error(`incorrect array length`);
    }
    return this;
  }

  function toBeSameArrayAs(x) {
    if (!_.isEqual(x, this.value)) {
      throw new Error(
        `not same arrays ${JSON.stringify(x)} ${JSON.stringify(this.value)}`
      );
    }
    return this;
  }

  function toBeSameObjectAs(x) {
    if (!_.isEqual(x, this.value)) {
      throw new Error(`objects are not equal`);
    }
    return this;
  }

  function exec() {
    return this.value(...this.args);
  }

  function toReturn(expectedValue) {
    returnVal = this.exec();
    if (returnVal !== expectedValue) {
      throw new Error(
        `expected return value ${expectedValue} but got ${returnVal}`
      );
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
  }

  // function toUseMethod(funcToUse) {
  //   // Watch
  //   let watcher = watchFunction(funcToUse);

  //   // Call function
  //   this.exec();

  //   // How many times was it called? Should be 1
  //   let countAfter = watcher.getCount();

  //   // Reset to no watch, very important!
  //   watcher.reset();

  //   // Has the function not been called?
  //   if (countAfter <= 0) {
  //     throw new Error(`function "${funcToUse}" was not called`);
  //   }
  //   return this;
  // }

  // function watchFunction(f) {
  //   let originalFunction = f;
  //   let counter = 0;

  //   f = function (...args) {
  //     counter++;
  //     return originalFunction(...args);
  //   };

  //   // console.log("f, counter", f, counter);

  //   return {
  //     getCount: () => {
  //       return counter;
  //     },
  //     reset: () => {
  //       f = originalFunction;
  //     },
  //   };
  // }

  // function watchFunctionEval(f) {
  //   eval(`;var originalFunction = ${f};`);
  //   // console.log("originalFunction", originalFunction);

  //   let counter = 0;

  //   function wrapper(...args) {
  //     counter++;
  //     return originalFunction(...args);
  //   }

  //   eval(`;${f} = ${wrapper.toString()};`);

  //   console.log("f, counter", f, counter);

  //   return {
  //     getCount: () => {
  //       return counter;
  //     },
  //     reset: () => {
  //       // window[f] = originalFunction;
  //       eval(`;${f} = ${originalFunction.toString()};`);
  //     },
  //   };
  // }
}

// Displays the test results as divs on the page
Z_T.displayResults = function (results) {
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
  for (let key in results) {
    console.log(results[key]);
    Z_T.populateSection(results[key]);
  }
};

// Displays each section as a colored box
Z_T.populateSection = function (section) {
  const { results = [], title = "NO TITLE" } = section;
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
  h2.innerHTML = `${title}`;
  sectionDiv.appendChild(h2);

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
    span.style.cssText =
      "padding:2px 5px;display:inline-flex;margin:0 3px 0 0;border-radius:5px;";
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