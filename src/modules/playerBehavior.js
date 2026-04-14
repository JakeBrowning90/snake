let playerHead = document.createElement("div");
playerHead.setAttribute("id", "playerHead");
// playerHead.classList.add("facingUp");

// let playerSegment = document.createElement("div");
// playerSegment.setAttribute("class", "playerSegment");

function addTailSegment() {
  let playerSegment = document.createElement("div");
  playerSegment.setAttribute("class", "playerSegment");
  return playerSegment;
}

function rotateHead(direction) {
  playerHead.className = "";
  if (direction == "up") {
    playerHead.classList.add("facingUp");
  } else if (direction == "down") {
    playerHead.classList.add("facingDown");
  } else if (direction == "left") {
    playerHead.classList.add("facingLeft");
  } else if (direction == "right") {
    playerHead.classList.add("facingRight");
  }
}

// let playerLength = 2
// let playerSpaces = new Array(playerLength)
let playerSpaces = new Array();

function resetPlayerSpaces() {
  playerSpaces = new Array();
}

let playerScore = 0;

function resetScore() {
  playerScore = 0;
}

function increaseScore(x) {
  playerScore = playerScore + x;
}

export {
  playerHead,
  // playerSegment,
  addTailSegment,
  rotateHead,
  playerSpaces,
  resetPlayerSpaces,
  playerScore,
  resetScore,
  increaseScore,
};
