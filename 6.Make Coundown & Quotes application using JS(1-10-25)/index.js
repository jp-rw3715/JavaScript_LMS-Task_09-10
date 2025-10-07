// === 3D TIMER FUNCTIONALITY ===
let timerInstance = null,
  timeRem = 0,
  ticking = false;
const cubeDisplay = document.getElementById("cubeDigit"),
  secSetter = document.getElementById("secSetter"),
  startBtn = document.getElementById("launch"),
  stopBtn = document.getElementById("halt"),
  timerAlert = document.getElementById("timerAlert");

function stylizeNum(num) {
  return num.toString().padStart(2, "0");
}
function updateCube() {
  cubeDisplay.textContent = stylizeNum(timeRem);
  cubeDisplay.style.transform = `rotateY(${timeRem * 8}deg) scale(${
    1 + timeRem / 99
  })`;
}
startBtn.onclick = () => {
  clearInterval(timerInstance);
  let givenVal = parseInt(secSetter.value, 10);
  if (!givenVal || givenVal < 1) {
    timerAlert.textContent = "Pick a positive number!";
    timerAlert.classList.replace("text-cyan-300", "text-red-400");
    return;
  }
  timerAlert.textContent = "";
  timerAlert.classList.replace("text-red-400", "text-cyan-300");
  timeRem = givenVal;
  updateCube();
  ticking = true;
  timerInstance = setInterval(() => {
    timeRem--;
    updateCube();
    if (timeRem <= 0) {
      clearInterval(timerInstance);
      timerAlert.textContent = "🎉 Time's up! Enjoy your quote.";
      cubeDisplay.style.transform = "scale(1.3) rotateY(180deg)";
      ticking = false;
      showFloatQuote();
    }
  }, 1000);
};
stopBtn.onclick = () => {
  clearInterval(timerInstance);
  timeRem = 0;
  updateCube();
  timerAlert.textContent = "⏸️ Timer paused.";
  ticking = false;
};
updateCube();

// === 3D QUOTE FUNCTIONALITY ===
const freshQuotes = [
  {
    text: "Push yourself, no one else will do it for you.",
    author: "MotivationBot",
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
  },
  {
    text: "Greatness comes from relentless progress.",
    author: "Anonymous",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
  {
    text: "The best way to escape criticism is to do nothing.",
    author: "Jeff Bezos",
  },
  {
    text: "You are the architect of your future.",
    author: "Self-Driven",
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
  },
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci",
  },
  {
    text: "The code you write is the story you tell to the computer.",
    author: "Coding Sage",
  },
  { text: "Dreams don’t work unless you do.", author: "John C. Maxwell" },
  { text: "Stay humble, hustle hard.", author: "Techie Zen" },
];
function showFloatQuote() {
  const picked = freshQuotes[~~(Math.random() * freshQuotes.length)];
  const quoteEl = document.getElementById("floatedQuote");
  const authorEl = document.getElementById("floatedAuthor");
  quoteEl.textContent = `"${picked.text}"`;
  authorEl.textContent = `– ${picked.author}`;
  const quoteBox = document.getElementById("floatQuoteBox");
  quoteBox.classList.remove("quote-animate");
  // re-trigger animation
  void quoteBox.offsetWidth;
  quoteBox.classList.add("quote-animate");
}
document.getElementById("refreshFloatQuote").onclick = showFloatQuote;
showFloatQuote();
