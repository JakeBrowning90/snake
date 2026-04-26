let playerHead = document.createElement("div");
playerHead.setAttribute("id", "playerHead");
// playerHead.classList.add("facingUp");

// let playerSegment = document.createElement("div");
// playerSegment.setAttribute("class", "playerSegment");

function addTailSegment(neighborCode) {
  console.log(neighborCode);
  let playerSegment = document.createElement("div");
  playerSegment.setAttribute("class", "playerSegment");
  // Add class based on coordinates of neighboring segments
  if (neighborCode == "02" || neighborCode == "20") {
    playerSegment.classList.add("segment12and6");
  } else if (neighborCode == "13" || neighborCode == "31") {
    playerSegment.classList.add("segment3and9");
  } else if (neighborCode == "01" || neighborCode == "10") {
    playerSegment.classList.add("segment12and3");
  } else if (neighborCode == "12" || neighborCode == "21") {
    playerSegment.classList.add("segment3and6");
  } else if (neighborCode == "23" || neighborCode == "32") {
    playerSegment.classList.add("segment6and9");
  } else if (neighborCode == "30" || neighborCode == "03") {
    playerSegment.classList.add("segment9and12");
  }
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
