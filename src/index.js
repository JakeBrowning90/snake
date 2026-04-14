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
} from "./modules/movementControls";

drawScoreboard();
drawPlayfield(fieldSize);
positionPlayerStart();
drawTouchControls();
drawKeyControls();
mapTouchControls();
mapKeypadControls();

let scoreboard = document.getElementById("scoreboard");
scoreboard.textContent = playerScore;

console.log(playerSpaces);

spawnFruit();
