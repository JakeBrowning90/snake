import { fieldSize, bodyLength } from "./gameVariables";

import { spawnFruit } from "./fruitBehavior";
import { drawScoreboard, updateScoreboard } from "./drawScoreboard";
import { drawPlayfield, positionPlayerStart } from "./drawPlayfield";
import { drawTouchControls } from "./drawControllers";
import { mapTouchControls, mapKeypadControls } from "./movementControls";
import { drawControlSpan } from "./drawControlSpan";

function drawNewGame() {
  // drawScoreboard();
  updateScoreboard();
  drawPlayfield(fieldSize);
  positionPlayerStart();
  // drawControlSpan();
  drawTouchControls();
  // drawKeyControls();
  mapTouchControls();
  mapKeypadControls();
  spawnFruit();
}

export { drawNewGame };
