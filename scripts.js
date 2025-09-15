// script.js
document.addEventListener("DOMContentLoaded", () => {
  const targetBtn = document.getElementById("target-btn");
  const scoreDisplay = document.getElementById("score");
  const gameArea = document.getElementById("game-area");

  let score = 0;

  // When button is clicked
  targetBtn.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;

    // Move button to random position
    const areaRect = gameArea.getBoundingClientRect();
    const btnSize = 60; // approximate size of button

    const maxX = areaRect.width - btnSize;
    const maxY = areaRect.height - btnSize;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    targetBtn.style.left = `${randomX}px`;
    targetBtn.style.top = `${randomY}px`;
  });
});
