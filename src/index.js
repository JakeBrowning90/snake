import "./styles/style.css";
// import { functionName } from "./modules/xFuncModTemplate";
import { gameActive, fieldSize, bodyLength } from "./modules/gameVariables";
import {
  playerHead,
  addTailSegment,
  playerSpaces,
  playerScore,
} from "./modules/playerBehavior";
import { spawnFruit } from "./modules/fruitBehavior";
import { drawScoreboard, updateScoreboard } from "./modules/drawScoreboard";
import {
  drawPlayfield,
  positionPlayerStart,
  getCenterField,
} from "./modules/drawPlayfield";
import { drawTouchControls, drawKeyControls } from "./modules/drawControllers";
import {
  mapTouchControls,
  mapKeypadControls,
  getMovement,
  executeMovement,
  currentDirection,
} from "./modules/movementControls";

import { drawNewGame } from "./modules/drawNewGame";

drawNewGame();
// function timedLoop(){
//  console.log("move")
// }

while (gameActive) {
  // console.log("moving...");
  // setInterval(executeMovement, 1000, currentDirection);
  setInterval(console.log("moving..."), 1000);
}
// setInterval(executeMovement, 1000, "up");
// TODO: Set activeGame boolean and direction variable, change variable with input
