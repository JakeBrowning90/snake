import { fieldSize } from "./gameVariables";

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

export { drawPlayfield, getCenterField };
