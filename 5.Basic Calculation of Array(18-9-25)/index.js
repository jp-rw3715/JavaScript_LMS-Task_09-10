let numbers = [];

function addNumber() {
  const numInput = document.getElementById("numInput");
  const num = parseFloat(numInput.value);

  if (isNaN(num)) {
    alert("Please enter a valid number!");
    numInput.focus();
    return;
  }

  numbers.push(num);
  numInput.value = "";
  numInput.focus();

  const numArrayEl = document.getElementById("numArray");
  numArrayEl.textContent = numbers.join(", ");

  // Calculate sum, max, min
  let sum = 0,
    max = -Infinity,
    min = Infinity;
  for (const val of numbers) {
    sum += val;
    if (val > max) max = val;
    if (val < min) min = val;
  }
  const avg = sum / numbers.length;

  // Update UI fields
  document.getElementById("sum").textContent = sum.toFixed(2);
  document.getElementById("avg").textContent = avg.toFixed(2);
  document.getElementById("max").textContent = max.toFixed(2);
  document.getElementById("min").textContent = min.toFixed(2);
}
