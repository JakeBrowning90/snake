import { gameActive, toggleGameState } from "./gameVariables";
import { playerScore } from "./playerBehavior";
import { getMovement, triggerActiveGame } from "./movementControls";
import { resetScore, resetPlayerSpaces } from "./playerBehavior";
import { updateScoreboard } from "./drawScoreboard";
import { drawNewGame } from "./drawNewGame";

function triggerGameOver() {
  // Switch game state to inactive, ending auto movement
  toggleGameState();
  // Disable controls
  document.removeEventListener("keydown", getMovement);
  document.removeEventListener("keydown", triggerActiveGame);

  let touchControls = document.getElementsByClassName("touchControl");
  for (const button of touchControls) {
    // console.log(button);
    button.removeEventListener("click", getMovement);
  }

  // Display score and reset button
  let gameOverDiv = document.createElement("div");
  gameOverDiv.textContent = "Game Over!";
  let resetButton = document.createElement("button");
  resetButton.textContent = "Try again";
  resetButton.addEventListener("click", resetGame);
  gameOverDiv.appendChild(resetButton);
  let scoreboard = document.getElementById("scoreboard");
  scoreboard.appendChild(gameOverDiv);
}

// On reset, clear score and window, start new game
function resetGame() {
  console.log("Reset!");
  resetScore();
  resetPlayerSpaces();
  let main = document.getElementsByTagName("main")[0];
  main.replaceChildren();
  // updateScoreboard();
  drawNewGame();
}

export { triggerGameOver };
