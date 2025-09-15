// Mini Game Logic
const btn = document.getElementById("target-btn");
const scoreDisplay = document.getElementById("score");
const gameArea = document.getElementById("game-area");
let score = 0;

// Move button randomly inside game area
function moveButton() {
  const areaWidth = gameArea.clientWidth - btn.offsetWidth;
  const areaHeight = gameArea.clientHeight - btn.offsetHeight;
  const randomX = Math.floor(Math.random() * areaWidth);
  const randomY = Math.floor(Math.random() * areaHeight);

  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";
}

// When button is clicked
btn.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveButton();
});

// Place button in random spot when game loads
window.onload = () => {
  moveButton();
};
