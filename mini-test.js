const M_T = {
  testCounter: 0,
  PASSED_CSS: "color:green",
  FAILED_CSS: "color:red",
  WARNING_CSS: "color:orange",
  NORMAL_CSS: "color:default",
  LIGHT_RED: "#FF6961",
  LIGHT_GREEN: "#77DD77",
  LIGHT_ORANGE: "#FFB347",
  GRAY: "#6c757d",
};

function miniTestAll(arr) {
  let miniTestResults = arr.map((item) => {
    const testResult = miniTest(item.description, item.function);
    return { ...item, result: testResult };
  });
  miniTestDisplayResults(miniTestResults);
}

function miniTest(description, func) {
  M_T.testCounter++;
  const { testCounter, FAILED_CSS, WARNING_CSS, PASSED_CSS } = M_T;
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
  if (!_.isEqual(x, this.value)) {
    throw new Error(`objects are not equal`);
  }
}

miniTestAll(MINI_TESTS);

function miniTestDisplayResults(miniTestResults) {
  let results = {};
  for (let item of miniTestResults) {
    let section = item.section;
    if (!results[section]) {
      results[section] = [];
    }
    results[section].push(item);
  }
  // Create vertical Section list
  const miniTestContainer = document.createElement("div");
  miniTestContainer.style.cssText = `
    display:inline-flex;
    flex-direction:column;
    flex-wrap:wrap;
    height: 98vh;
    align-items:start;
    justify-content: flex-start;
  `;
  document.body.appendChild(miniTestContainer);
  M_T.miniTestContainer = miniTestContainer;

  // Iterate over test sections
  for (let key in results) {
    populateSection(results[key]);
  }
}

function populateSection(arr) {
  // Create Div
  const sectionDiv = document.createElement("div");

  // Assign bg color
  const anyTestFailed = arr.find((item) => !!item.result);
  const allTestsFailed = arr.every((item) => !!item.result);
  let sectionBGColor = M_T.LIGHT_GREEN;
  if (allTestsFailed) {
    sectionBGColor = M_T.LIGHT_RED;
  } else if (anyTestFailed) {
    sectionBGColor = M_T.LIGHT_ORANGE;
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
    span.style.backgroundColor = itemPassed ? "green" : "red";
    span.style.color = "white";
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

    // Append to sectionDiv
    sectionDiv.appendChild(testContainer);
  });

  M_T.miniTestContainer.appendChild(sectionDiv);
}
