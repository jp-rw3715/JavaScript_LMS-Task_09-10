// Functions
function addNumbers(a, b) {
  return a + b;
}

function isEvenOrOdd(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}

function square(n) {
  return n * n;
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Event handlers
function calculateAddition() {
  const a = Number(document.getElementById("addA").value);
  const b = Number(document.getElementById("addB").value);
  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers for both inputs.");
    return;
  }
  const result = addNumbers(a, b);
  document.getElementById(
    "result"
  ).innerText = `Addition of ${a} + ${b} = ${result}`;
}

function checkEvenOdd() {
  const n = Number(document.getElementById("evenOddNum").value);
  if (isNaN(n)) {
    alert("Please enter a valid number.");
    return;
  }
  const result = isEvenOrOdd(n);
  document.getElementById("result").innerText = `Number ${n} is ${result}`;
}

function calculateSquare() {
  const n = Number(document.getElementById("squareNum").value);
  if (isNaN(n)) {
    alert("Please enter a valid number.");
    return;
  }
  const result = square(n);
  document.getElementById("result").innerText = `Square of ${n} is ${result}`;
}

function capitalizeString() {
  const str = document.getElementById("capitalizeStr").value.trim();
  if (str.length === 0) {
    alert("Please enter a valid string.");
    return;
  }
  const result = capitalize(str);
  document.getElementById(
    "result"
  ).innerText = `Capitalized string: "${result}"`;
}
