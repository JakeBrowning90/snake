// const functionName = () => {
//   console.log("Hello world");
// };

// Is game active or inactive
let gameActive = false;
function toggleGameState() {
  if (gameActive) {
    gameActive = false;
  } else if (!gameActive) {
    gameActive = true;
  }
  console.log("Game Active: " + gameActive);
}

// Adjust dimensions of play area
let fieldSize = 15;

// Starting length
let bodyLength = 3;

// Movement speed
// let speedInput = 8;
// let cellsPerSec = speedInput * 0.1;
let selection = "fast";
// let selection = "medium";
// let selection = "slow";

let cellsPerSec;
if (selection == "fast") {
  cellsPerSec = 0.8;
} else if (selection == "medium") {
  cellsPerSec = 0.6;
} else if (selection == "slow") {
  cellsPerSec = 0.4;
}

let speed = (1 - cellsPerSec) * 1000;

export { gameActive, toggleGameState, fieldSize, bodyLength, speed };
