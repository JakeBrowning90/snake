import { speed } from "./gameVariables";
import { direction, executeMovement } from "./movementControls";

let intervalId;

function autoMovement() {
  // stopMovement();
  console.log("Beginning auto-movement " + direction.current);
  intervalId ??= setInterval(executeMovement, speed);
}

function stopMovement() {
  clearInterval(intervalId);
  intervalId = null;
}

export { autoMovement, stopMovement };
