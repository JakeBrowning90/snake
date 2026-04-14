import { fieldSize, bodyLength } from "./gameVariables";

import { spawnFruit } from "./fruitBehavior";
import { drawScoreboard, updateScoreboard } from "./drawScoreboard";
import { drawPlayfield, positionPlayerStart } from "./drawPlayfield";
import { drawTouchControls, drawKeyControls } from "./drawControllers";
import {
  mapTouchControls,
  mapKeypadControls,
} from "./movementControls";

function drawNewGame() {
  drawScoreboard();
  updateScoreboard();
  drawPlayfield(fieldSize);
  positionPlayerStart();
  drawTouchControls();
  drawKeyControls();
  mapTouchControls();
  mapKeypadControls();
  spawnFruit();
}

export { drawNewGame };
