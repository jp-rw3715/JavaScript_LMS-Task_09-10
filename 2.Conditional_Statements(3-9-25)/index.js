// If statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

// If-else statement
let score = 45;
if (score >= 50) {
  console.log("You passed the examination.");
} else {
  console.log("You failed the examination.");
}

// If-else-if ladder
let rating = 4;
if (rating <= 2) {
  console.log("Bad rating");
} else if (rating >= 4) {
  console.log("Good rating!");
} else {
  console.log("Average rating");
}

// Switch statement
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
    break;
}

// Ternary operator
let number = 7;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log("The number is", result);
