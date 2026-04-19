import { gameActive, toggleGameState, fieldSize } from "./gameVariables";
import {
  playerHead,
  addTailSegment,
  rotateHead,
  playerSegment,
  playerSpaces,
} from "./playerBehavior";
import { checkFruitGet } from "./fruitBehavior";
import { triggerGameOver } from "./drawGameOver";

let currentDirection = "";

function mapTouchControls() {
  let touchControls = document.getElementsByClassName("touchControl");
  for (const button of touchControls) {
    button.addEventListener("click", getMovement);
  }
}

function mapKeypadControls() {
  document.addEventListener("keydown", highlightKeyDisplay);
  document.addEventListener("keyup", unhighlightKeyDisplay);
  document.addEventListener("keydown", triggerActiveGame);
  document.addEventListener("keydown", getMovement);
  // Replace getMovement with runInput after testing
}

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

function triggerActiveGame(e) {
  if (!gameActive) {
    toggleGameState();
    // while (gameActive) {
    //   setInterval(() => executeMovement, 1000);
    // }
  }
  // else if (gameActive) {
  //   currentDirection =
  //   setInterval(executeMovement, 1000, currentDirection);
  // }

  // console.log(currentDirection);
}

function getMovement(e) {
  // console.log("Moving");
  // let currentMovement = () =>
  //   setInterval(executeMovement, 1000, currentDirection);

  // clearInterval(currentMovement);
  if (e.code == "KeyW" || e.code == "ArrowUp" || e.srcElement.id == "TouchUp") {
    currentDirection = "up";
  } else if (
    e.code == "KeyA" ||
    e.code == "ArrowLeft" ||
    e.srcElement.id == "TouchLeft"
  ) {
    currentDirection = "left";
  } else if (
    e.code == "KeyS" ||
    e.code == "ArrowDown" ||
    e.srcElement.id == "TouchDown"
  ) {
    currentDirection = "down";
  } else if (
    e.code == "KeyD" ||
    e.code == "ArrowRight" ||
    e.srcElement.id == "TouchRight"
  ) {
    currentDirection = "right";
  }
  console.log("Input " + currentDirection);
  executeMovement(currentDirection);
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

  // Prevent movement if trying to immediately reverse into last occupied space
  if (newLocation == playerSpaces[1]) {
    // console.log("Can't reverse!");
    return;
  }

  // Orient player head according to movement,
  // Show before checks to indicate failed move
  rotateHead(input);

  // Determine if destination is triggers GAME OVER, trigger if so
  if (isMoveOffBoard(newLocation) || isMoveThroughSelf(newLocation)) {
    triggerGameOver();
    return;
  }
  // Start of valid movement
  console.log("Moving " + input);
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

  // // Orient player head according to movement
  // rotateHead(input);

  // Add tail segments to new spaces
  for (let i = 1; i < playerSpaces.length; i++) {
    playerSpaces[i].appendChild(addTailSegment());
  }

  // checkFruitGet(newLocation);
}

export {
  currentDirection,
  mapTouchControls,
  mapKeypadControls,
  getMovement,
  triggerActiveGame,
  executeMovement,
};
