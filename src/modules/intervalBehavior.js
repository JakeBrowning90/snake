import { speed } from "./gameVariables";
import { currentDirection, executeMovement } from "./movementControls";

let intervalId;

function autoMovement() {
  stopMovement();
  console.log("Beginning auto-movement " + currentDirection);
  intervalId ??= setInterval(executeMovement, speed, currentDirection);
}

function stopMovement() {
  clearInterval(intervalId);
  intervalId = null;
}

export { autoMovement, stopMovement };
