import "./styles/style.css";
// import { functionName } from "./modules/xFuncModTemplate";
import { fieldSize, bodyLength } from "./modules/gameVariables";
import {
  playerHead,
  addTailSegment,
  playerSpaces,
  playerScore,
} from "./modules/playerBehavior";
import { spawnFruit } from "./modules/fruitBehavior";
import { drawScoreboard } from "./modules/drawScoreboard";
import { drawPlayfield, getCenterField } from "./modules/setupPlayfield";
import { drawTouchControls, drawKeyControls } from "./modules/drawControllers";
import { mapTouchControls, getMovement } from "./modules/movementControls";

// function highlightKey(e) {
//   console.log(`${e.code}`);
//   let targetedKey = document.getElementById(e.code);
//   console.log(targetedKey);

//   // Don't throw errors for unbound keys
//   if (targetedKey) {
//     targetedKey.classList.add("activeKey");
//   }
// }

// function unhighlightKey(e) {
//   // console.log(`${e.code}`);
//   let targetedKey = document.getElementById(e.code);
//   if (targetedKey) {
//     targetedKey.classList.remove("activeKey");
//   }
// }

function highlightKeyDisplay(e) {
  let targetedKey = translateKeystrokeToElementId(e.code);
  // Don't throw errors for unbound keys
  if (targetedKey) {
    targetedKey.classList.add("activeKey");
  }
}

function unhighlightKeyDisplay(e) {
  let targetedKey = translateKeystrokeToElementId(e.code);
  // Don't throw errors for unbound keys
  if (targetedKey) {
    targetedKey.classList.remove("activeKey");
  }
}

function translateKeystrokeToElementId(code) {
  if (code == "KeyW" || code == "ArrowUp") {
    return document.getElementById("keyUp");
  } else if (code == "KeyA" || code == "ArrowLeft") {
    return document.getElementById("keyLeft");
  } else if (code == "KeyS" || code == "ArrowDown") {
    return document.getElementById("keyDown");
  } else if (code == "KeyD" || code == "ArrowRight") {
    return document.getElementById("keyRight");
  } else {
    return;
  }
}

drawScoreboard();
drawPlayfield(fieldSize);
drawTouchControls();
drawKeyControls();
mapTouchControls();

document.addEventListener("keydown", highlightKeyDisplay);
document.addEventListener("keyup", unhighlightKeyDisplay);
document.addEventListener("keydown", getMovement);

let scoreboard = document.getElementById("scoreboard");
scoreboard.textContent = playerScore;

let center = getCenterField(fieldSize);
let startingCell = document.getElementById(`${center}, ${center}`);
playerSpaces.push(startingCell);
startingCell.appendChild(playerHead);

// MANUAL LENGTH SETTING FOR TESTING
// let bodyLength = 7;
for (let i = 1; i < bodyLength; i++) {
  let tailCell = document.getElementById(`${center}, ${center - i}`);
  playerSpaces.push(tailCell);
  // console.log(tailCell);
  tailCell.appendChild(addTailSegment());
}

console.log(playerSpaces);

spawnFruit();
