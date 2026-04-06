let playerHead = document.createElement("div");
playerHead.setAttribute("id", "playerHead");

let playerSegment = document.createElement("div");
playerSegment.setAttribute("class", "playerSegment");


function addTailSegment() {
  let playerSegment = document.createElement("div");
  playerSegment.setAttribute("class", "playerSegment");
  return playerSegment;
}

// let playerLength = 2
// let playerSpaces = new Array(playerLength)
let playerSpaces = new Array();

let playerScore = 0;

function increaseScore(x) {
  playerScore = playerScore + x;
}

export { playerHead, playerSegment, addTailSegment,playerSpaces, playerScore, increaseScore };
