// Game variables
let score = 0;
let timeLeft = 30; // game time in seconds
let gameActive = true;

const scoreDisplay = document.getElementById("score");
const targetBtn = document.getElementById("target-btn");
const gameArea = document.getElementById("game-area");

// Create and display timer
const timerDisplay = document.createElement("h4");
timerDisplay.textContent = "Time Left: " + timeLeft + "s";
document.querySelector("#game").appendChild(timerDisplay);

// Function to move button randomly inside the game area
function moveButton() {
  if (!gameActive) return;
  const areaWidth = gameArea.clientWidth - targetBtn.clientWidth;
  const areaHeight = gameArea.clientHeight - targetBtn.clientHeight;

  const randomX = Math.floor(Math.random() * areaWidth);
  const randomY = Math.floor(Math.random() * areaHeight);

  targetBtn.style.left = randomX + "px";
  targetBtn.style.top = randomY + "px";
}

// When button is clicked → increase score + move button
targetBtn.addEventListener("click", () => {
  if (!gameActive) return;
  score++;
  scoreDisplay.textContent = score;
  moveButton();
});

// Countdown timer
const countdown = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.textContent = "Time Left: " + timeLeft + "s";
  } else {
    endGame();
  }
}, 1000);

// End game function
function endGame() {
  gameActive = false;
  clearInterval(countdown);
  targetBtn.style.display = "none"; // hide the button
  timerDisplay.textContent = "⏳ Time’s Up!";
  
  const resultMsg = document.createElement("h3");
  resultMsg.textContent = "🎉 Game Over! Your final score: " + score;
  document.querySelector("#game").appendChild(resultMsg);
}

// First move when game loads
window.onload = moveButton;
