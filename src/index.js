import "./styles/style.css";
// import { functionName } from "./modules/xFuncModTemplate";
import { fieldSize } from "./modules/gameVariables";
import {
  playerHead,
  playerSegment,
  addTailSegment,
  playerSpaces,
  playerScore,
} from "./modules/playerBehavior";
import { spawnFruit } from "./modules/fruitBehavior";
import { getMovement } from "./modules/movementControls";

function hightlightKey(e) {
  // console.log(`${e.code}`);
  let targetedKey = document.getElementById(e.code);
  // Don't throw errors for unbound keys
  if (targetedKey) {
    targetedKey.classList.add("activeKey");
  }
}

function unhightlightKey(e) {
  // console.log(`${e.code}`);
  let targetedKey = document.getElementById(e.code);
  if (targetedKey) {
    targetedKey.classList.remove("activeKey");
  }
}

document.addEventListener("keydown", hightlightKey);
document.addEventListener("keyup", unhightlightKey);
document.addEventListener("keydown", getMovement);

function drawPlayfield(fieldSize) {
  let playField = document.getElementById("playField");

  playField.style.gridTemplateColumns = ` repeat(${fieldSize}, 1fr)`;

  for (let i = 0; i < fieldSize; i++) {
    let fieldRow = document.createElement("div");
    fieldRow.classList.add("fieldCol");
    fieldRow.style.gridTemplateRows = ` repeat(${fieldSize}, 1fr)`;

    for (let j = fieldSize - 1; j > -1; j--) {
      let playCell = document.createElement("div");
      playCell.classList.add("playCell");
      let x = document.createAttribute("xLoc");
      x.value = i;
      playCell.setAttributeNode(x);
      let y = document.createAttribute("yLoc");
      y.value = j;
      playCell.setAttributeNode(y);
      playCell.setAttribute("id", `${i}, ${j}`);
      // FOR TESTING: show ID in cell
      // playCell.textContent = playCell.id;
      fieldRow.appendChild(playCell);
    }

    playField.appendChild(fieldRow);
  }
}

function getCenterField(fieldSize) {
  let center;
  if (fieldSize % 2 == 0) {
    center = fieldSize / 2;
  } else {
    center = (fieldSize - 1) / 2;
  }
  return center;
}

drawPlayfield(fieldSize);

let scoreboard = document.getElementById("scoreboard");
scoreboard.textContent = playerScore;

let center = getCenterField(fieldSize);
let startingCell = document.getElementById(`${center}, ${center}`);
playerSpaces.push(startingCell);
startingCell.appendChild(playerHead);

// Length movement test
let bodyLength = 4;
for (let i = 1; i < bodyLength; i++) {
  let tailCell = document.getElementById(`${center}, ${center - i}`);
  playerSpaces.push(tailCell);
  // console.log(tailCell);
  tailCell.appendChild(addTailSegment());
}

console.log(playerSpaces);

spawnFruit();
