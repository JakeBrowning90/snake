import { playerScore } from "./playerBehavior";
import { getMovement } from "./movementControls";

function triggerGameOver() {
  console.log("Game Over!");
  // Disable controls
  document.removeEventListener("keydown", getMovement);
  let touchControls = document.getElementsByClassName("touchControl");
  for (const button of touchControls) {
    console.log(button);
    button.removeEventListener("click", getMovement);
  }

  // Display score and reset button
  let gameOverDiv = document.createElement("div");
  gameOverDiv.textContent = "Game Over!";
  let scoreboard = document.getElementById("scoreboard");
  scoreboard.appendChild(gameOverDiv);
  // On reset, clear score and window, start new game
}

export { triggerGameOver };
