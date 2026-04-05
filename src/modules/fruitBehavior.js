import { fieldSize } from "./gameVariables";
import { playerScore, increaseScore } from "./playerBehavior";

function checkFruitGet(newLocation) {
  if (newLocation.querySelector(".fruit")) {
    // Remove current fruit
    newLocation.removeChild(newLocation.querySelector(".fruit"));
    // Add to score
    increaseScore(1);
    scoreboard.textContent = playerScore;
    // Spawn new fruit
    spawnFruit();
  }
}

function spawnFruit() {
  let fruit = document.createElement("div");
  fruit.classList.add("fruit");
  // Get random cell
  let randX = Math.floor(Math.random() * fieldSize);
  let randY = Math.floor(Math.random() * fieldSize);
  // console.log(`${randX}, ${randY}`);
  // TODO: disallow spawn in same space or space occupied by playerChar
  let randSpawn = document.getElementById(`${randX}, ${randY}`);
  randSpawn.appendChild(fruit);
}

export { checkFruitGet, spawnFruit };
