const tableNumInput = document.getElementById("tableNum");
const maxEvenInput = document.getElementById("maxEven");
const tableError = document.getElementById("tableError");
const evenError = document.getElementById("evenError");
const output = document.getElementById("output");
const loadingSpinner = document.getElementById("loadingSpinner");

const tableBtn = document.getElementById("tableBtn");
const evenBtn = document.getElementById("evenBtn");
const exitBtn = document.getElementById("exitBtn");
const resetBtn = document.getElementById("resetBtn");

let isRunning = true;

function validateNumberInput(input, errorElem) {
  const value = input.value.trim();
  if (!value || isNaN(value) || Number(value) <= 0) {
    errorElem.textContent = "Please enter a valid positive number.";
    errorElem.classList.remove("hidden");
    return false;
  }
  errorElem.classList.add("hidden");
  return true;
}

function showLoading(state) {
  loadingSpinner.style.display = state ? "block" : "none";
  output.style.opacity = state ? "0.5" : "1";
}

async function simulateDelay(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

async function displayTable() {
  if (!isRunning) return;
  if (!validateNumberInput(tableNumInput, tableError)) return;

  showLoading(true);
  await simulateDelay(500);

  const num = Number(tableNumInput.value);
  let result = `Multiplication Table for ${num}:\n\n`;
  for (let i = 1; i <= 10; i++) {
    result += `${num} × ${i} = ${num * i}\n`;
  }

  output.textContent = result;
  showLoading(false);
}

async function displayEvenNumbers() {
  if (!isRunning) return;
  if (!validateNumberInput(maxEvenInput, evenError)) return;

  showLoading(true);
  await simulateDelay(500);

  const maxNum = Number(maxEvenInput.value);
  let result = `Even numbers up to ${maxNum}:\n\n`;
  for (let i = 2; i <= maxNum; i += 2) {
    result += `${i} `;
  }

  output.textContent = result;
  showLoading(false);
}

function exitProgram() {
  if (!isRunning) return;

  if (confirm("Are you sure you want to exit the program?")) {
    isRunning = false;
    output.textContent = "Program exited. Reload to restart.";
    disableInputs(true);
  }
}

function resetProgram() {
  isRunning = true;
  output.textContent = "Output will appear here...";
  tableNumInput.value = "";
  maxEvenInput.value = "";
  tableError.classList.add("hidden");
  evenError.classList.add("hidden");
  disableInputs(false);
}

function disableInputs(state) {
  tableNumInput.disabled = state;
  maxEvenInput.disabled = state;
  tableBtn.disabled = state;
  evenBtn.disabled = state;
  exitBtn.disabled = state;
}

// Button event listeners
tableBtn.addEventListener("click", displayTable);
evenBtn.addEventListener("click", displayEvenNumbers);
exitBtn.addEventListener("click", exitProgram);
resetBtn.addEventListener("click", resetProgram);

// Handle Enter key for inputs
tableNumInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") displayTable();
});
maxEvenInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") displayEvenNumbers();
});
