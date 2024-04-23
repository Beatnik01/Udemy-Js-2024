let currentResult = 0;
let logEntries = [];

// Gets input from input field.
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log.
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);
}

function add() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  logEntries.push(enteredNumber);
  console.log(logEntries);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
