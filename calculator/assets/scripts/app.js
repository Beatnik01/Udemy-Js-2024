let currentResult = 0;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const description = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, description);
}

function add() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
