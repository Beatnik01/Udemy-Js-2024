let currentResult = 0;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  outputResult(currentResult, `${currentResult} + ${userInput.value}`);
}

addBtn.addEventListener("click", add);
