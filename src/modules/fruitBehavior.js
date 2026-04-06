import { fieldSize } from "./gameVariables";
import { playerScore, increaseScore, playerSpaces } from "./playerBehavior";

function checkFruitGet(newLocation) {
  if (newLocation.querySelector(".fruit")) {
    // Remove current fruit
    newLocation.removeChild(newLocation.querySelector(".fruit"));
    // Add to score
    increaseScore(1);
    scoreboard.textContent = playerScore;
    // Increase player length
    // Spawn new fruit
    spawnFruit();
    return true;
  }
}

function spawnFruit() {
  let fruit = document.createElement("div");
  fruit.classList.add("fruit");
  // Get random cell
  let randX = Math.floor(Math.random() * fieldSize);
  let randY = Math.floor(Math.random() * fieldSize);
  let randSpawn = document.getElementById(`${randX}, ${randY}`);
  // If the random cell is one occupied by the player, reroll until is not
  while (playerSpaces.includes(randSpawn)) {
    randX = Math.floor(Math.random() * fieldSize);
    randY = Math.floor(Math.random() * fieldSize);
    randSpawn = document.getElementById(`${randX}, ${randY}`);
  }
  randSpawn.appendChild(fruit);
}

export { checkFruitGet, spawnFruit };
