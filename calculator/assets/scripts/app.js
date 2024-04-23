let currentResult = 0;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const description = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, description);
}

addBtn.addEventListener("click", add);
