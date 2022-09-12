const Z_T = {
  targetDiv: document.getElementById("Z_T") || document.body,
  testContainer: null,
  testCounter: 0,
  comletelyPassed: true,
  PASSED_CSS: "color:green",
  FAILED_CSS: "color:#8b0000",
  WARNING_CSS: "color:orange",
  NORMAL_CSS: "color:default",
  LIGHT_RED: "#FF6961",
  LIGHT_GREEN: "#77DD77",
  LIGHT_ORANGE: "#FFB347",
  DARK_GREEN: "green",
  DARK_RED: "#8b0000",
  GRAY: "#6c757d",
};

// zTests should be defined in an earlier script.

// zTest example:
// const zTests = {
//   variableTest: [
//     {
//       section: `variable X`,
//       description: `variable X exists`,
//       function: () => {
//         expect(x).isDeclared();
//       },
//     },
//   ],
// };

// Adding a time delay so page scripts can load
setTimeout(() => {
  Z_T.testAll(zTests);
}, 100);

// Execute all categories and subtests, then display results
Z_T.testAll = function (tests) {
  let results = {};
  for (let category in tests) {
    results[category] = tests[category].map((test) => {
      const testResult = Z_T.test(test.description, test.test);
      return { ...test, result: testResult };
    });
  }
  Z_T.displayResults(results);
  if (Z_T.comletelyPassed) {
    Z_T.addBigCheckMark();
  }
};

// Evaluates the test, logs in the console, provides a resulting error (or null, null is passing)
Z_T.test = function (description, test) {
  Z_T.testCounter++;
  const { testCounter, FAILED_CSS, WARNING_CSS, PASSED_CSS } = Z_T;
  let error;
  try {
    test();
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
};

// Sets a value and provides the function toolset. Makes for easier readability in test execution (i.e. expect(5).toBe(5) )
function expect(value) {
  return {
    value,
    toBe,
    isDeclared,
    toBeNumber,
    toBeString,
    toBeFunction,
    toBeArray,
    toBeObject,
    toBeSameArrayAs,
    toBeSameObjectAs,
    toUseMethod,
    toHaveObjectKeyCount,
    toHaveArrayLength,
    toBeBoolean,
  };

  function toBe(x) {
    if (!_.isEqual(x, this.value)) {
      throw new Error(`not toBe ${x}`);
    }
  }

  function isDeclared() {
    if (typeof this.value === undefined) {
      throw new Error(`is not declared`);
    }
  }

  function toBeNumber() {
    if (typeof this.value !== "number") {
      throw new Error(`is not a number`);
    }
  }

  function toBeString() {
    if (typeof this.value !== "string") {
      throw new Error(`is not string`);
    }
  }

  function toBeFunction() {
    if (typeof this.value !== "function") {
      throw new Error(`is not function`);
    }
  }

  function toBeBoolean() {
    if (typeof this.value !== "boolean") {
      throw new Error(`is not a boolean`);
    }
  }

  function toBeArray() {
    if (!Array.isArray(this.value)) {
      throw new Error(`is not array`);
    }
  }

  function toBeObject() {
    if (
      typeof this.value !== "object" ||
      Array.isArray(this.value) ||
      this.value === null
    ) {
      throw new Error(`is not object`);
    }
  }

  function toUseMethod(x) {
    if (typeof this.value !== "function") {
      throw new Error(`is not function`);
    } else if (!this.value.toString().includes(x)) {
      throw new Error(`is not using the required method`);
    }
  }

  function toHaveObjectKeyCount(x) {
    if (Object.keys(this.value) !== x) {
      throw new Error(`incorrect object key count`);
    }
  }

  function toHaveArrayLength(x) {
    if (this.value.length !== x) {
      throw new Error(`incorrect array length`);
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
    if (!_.isEqual(x, this.value)) {
      throw new Error(`objects are not equal`);
    }
  }
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
  Z_T.targetDiv.appendChild(testContainer);
  Z_T.testContainer = testContainer;

  // Iterate over test sections
  for (let key in results) {
    Z_T.populateSection(results[key]);
  }
};

// Displays each section as a colored box
Z_T.populateSection = function (arr) {
  // Create Div
  const sectionDiv = document.createElement("div");

  // Assign bg color
  const allTestsFailed = arr.every((item) => !!item.result);
  const anyTestFailed = arr.find((item) => !!item.result);
  let sectionBGColor = Z_T.LIGHT_GREEN; // All tests passed
  if (allTestsFailed) {
    sectionBGColor = Z_T.LIGHT_RED;
    Z_T.comletelyPassed = false;
  } else if (anyTestFailed) {
    sectionBGColor = Z_T.LIGHT_ORANGE;
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
  h2.innerHTML = `${arr[0].section}`;
  sectionDiv.appendChild(h2);

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
    span.style.cssText =
      "padding:2px 5px;display:inline-flex;margin:0 3px 0 0;border-radius:5px;";
    span.style.backgroundColor = itemPassed ? Z_T.DARK_GREEN : Z_T.DARK_RED;
    span.style.color = "white";
    span.innerHTML = passFail;
    testContainer.appendChild(span);

    // Add Test Description
    testContainer.innerHTML += item.description;

    // Add Test Error
    if (item.result) {
      let errorSpan = document.createElement("span");
      errorSpan.style.color = Z_T.DARK_RED;
      errorSpan.textContent = " " + item.result;
      testContainer.appendChild(errorSpan);
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
