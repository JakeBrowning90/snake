import { fieldSize, bodyLength } from "./gameVariables";
import {
  playerHead,
  addTailSegment,
  playerSpaces,
  rotateHead,
} from "./playerBehavior";

function drawPlayfield(fieldSize) {
  // let playField = document.getElementById("playField");
  let playField = document.createElement("div");
  playField.setAttribute("id", "playField");

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
  let main = document.getElementsByTagName("main")[0];
  main.appendChild(playField);
}

function positionPlayerStart() {
  let center = getCenterField(fieldSize);
  let startingCell = document.getElementById(`${center}, ${center}`);
  playerSpaces.push(startingCell);
  startingCell.appendChild(playerHead);
  rotateHead("up");
  for (let i = 1; i < bodyLength; i++) {
    let tailCell = document.getElementById(`${center}, ${center - i}`);
    playerSpaces.push(tailCell);
    let code;
    if (i < bodyLength - 1) {
      code = "02";
    } else {
      code = "0";
    }
    tailCell.appendChild(addTailSegment(code));
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

export { drawPlayfield, positionPlayerStart, getCenterField };
