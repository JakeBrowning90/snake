import { gameActive, toggleGameState } from "./gameVariables";
import { playerScore, setDirection } from "./playerBehavior";
import { getMovement, checkActiveGame } from "./movementControls";
import { resetScore, resetPlayerSpaces } from "./playerBehavior";
import { updateScoreboard } from "./drawScoreboard";
import { drawNewGame } from "./drawNewGame";
import { stopMovement } from "./intervalBehavior";

function triggerGameOver() {
  // Switch game state to inactive, ending auto movement
  toggleGameState();
  stopMovement();
  // Disable controls
  document.removeEventListener("keydown", getMovement);
  document.removeEventListener("keydown", checkActiveGame);

  let touchControls = document.getElementsByClassName("touchControl");
  for (const button of touchControls) {
    // console.log(button);
    button.removeEventListener("click", getMovement);
  }

  // Display score and reset button
  let gameOverDisplay = document.createElement("div");
  gameOverDisplay.setAttribute("id", "gameOverDisplay");
  gameOverDisplay.textContent = "Game Over!";

  let resetButton = document.createElement("button");
  resetButton.textContent = "Retry";
  resetButton.addEventListener("click", resetGame);
  gameOverDisplay.appendChild(resetButton);

  let scoreboard = document.getElementById("scoreboard");
  scoreboard.appendChild(gameOverDisplay);
}

// On reset, clear score and window, start new game
function resetGame() {
  console.log("Reset!");
  resetScore();
  resetPlayerSpaces();
  setDirection();
  let main = document.getElementsByTagName("main")[0];
  main.replaceChildren();
  // updateScoreboard();
  drawNewGame();
}

export { triggerGameOver };
