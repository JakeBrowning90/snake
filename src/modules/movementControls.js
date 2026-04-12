import { fieldSize } from "./gameVariables";
import {
  playerHead,
  addTailSegment,
  rotateHead,
  playerSegment,
  playerSpaces,
} from "./playerBehavior";
import { checkFruitGet } from "./fruitBehavior";

function getMovement(e) {
  if (e.code == "KeyW" || e.code == "ArrowUp" || e.srcElement.id == "TouchUp") {
    executeMovement("up");
  } else if (
    e.code == "KeyA" ||
    e.code == "ArrowLeft" ||
    e.srcElement.id == "TouchLeft"
  ) {
    executeMovement("left");
  } else if (
    e.code == "KeyS" ||
    e.code == "ArrowDown" ||
    e.srcElement.id == "TouchDown"
  ) {
    executeMovement("down");
  } else if (
    e.code == "KeyD" ||
    e.code == "ArrowRight" ||
    e.srcElement.id == "TouchRight"
  ) {
    executeMovement("right");
  }
}

function isMoveOffBoard(destination) {
  if (!destination) {
    return true;
  }
}

function isMoveThroughSelf(destination) {
  // Head can move into space occupied by end of tail, as tail is about to move
  let invalidSpaces = playerSpaces.slice(0, -1);
  if (invalidSpaces.includes(destination)) {
    return true;
  }
}

function executeMovement(input) {
  // console.log(input);
  // get current location from array instead of doc)
  let location = playerSpaces[0];

  // get destination based on direction
  let destination;
  if (input == "up") {
    destination = parseInt(location.getAttribute("yloc")) + 1;
  } else if (input == "down") {
    destination = parseInt(location.getAttribute("yloc")) - 1;
  } else if (input == "left") {
    destination = parseInt(location.getAttribute("xloc")) - 1;
  } else if (input == "right") {
    destination = parseInt(location.getAttribute("xloc")) + 1;
  }
  // console.log(destination);

  // complete movement if valid
  let newLocation;
  if (input == "up" || input == "down") {
    newLocation = document.getElementById(
      location.getAttribute("xloc") + ", " + destination,
    );
  } else if (input == "left" || input == "right") {
    newLocation = document.getElementById(
      destination + ", " + location.getAttribute("yloc"),
    );
  }

  // Determine if destination is valid, abort if not
  if (isMoveOffBoard(newLocation) || isMoveThroughSelf(newLocation)) {
    console.log("Invalid move");
    // TODO: Trigger game over
    return;
  }

  // Add space to start of array
  playerSpaces.unshift(newLocation);
  // Remove head from current location
  location.removeChild(playerHead);
  // if (checkFruitGet(newLocation)) {
  //   playerSpaces.splice(1, 0, location);
  // } else {
  // }

  // Remove all tail segments from their cells
  for (let i = 1; i < playerSpaces.length; i++) {
    let segment = playerSpaces[i].children[0];
    if (segment) {
      playerSpaces[i].removeChild(segment);
    }
  }
  if (!checkFruitGet(newLocation)) {
    // Remove end of tail
    playerSpaces.pop();
  }

  // Add head to new location
  playerSpaces[0].appendChild(playerHead);

  // Orient player head according to movement
  rotateHead(input);

  // Add tail segments to new spaces
  for (let i = 1; i < playerSpaces.length; i++) {
    playerSpaces[i].appendChild(addTailSegment());
  }

  // checkFruitGet(newLocation);
}

export { getMovement };
