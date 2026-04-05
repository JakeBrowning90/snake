import { fieldSize } from "./gameVariables";
import { playerChar } from "./playerBehavior";
import { checkFruitGet } from "./fruitBehavior";

function getMovement(e) {
  if (e.code == "KeyW" || e.code == "ArrowUp") {
    executeMovement("up");
  } else if (e.code == "KeyA" || e.code == "ArrowLeft") {
    executeMovement("left");
  } else if (e.code == "KeyS" || e.code == "ArrowDown") {
    executeMovement("down");
  } else if (e.code == "KeyD" || e.code == "ArrowRight") {
    executeMovement("right");
  }
}

function executeMovement(input) {
  console.log(input);
  // get current location
  let location = document.getElementById("playerChar").parentElement;
  // console.log(location);
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
  // determine if destination is valid
  if (destination < 0 || destination >= fieldSize) {
    console.log("invalid move");
    return;
  }

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

  // console.log(newLocation);
  location.removeChild(playerChar);
  newLocation.appendChild(playerChar);
  checkFruitGet(newLocation);
}

export { getMovement };
