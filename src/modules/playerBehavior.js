let playerChar = document.createElement("div");
playerChar.setAttribute("id", "playerChar");

let playerScore = 0;

function increaseScore(x) {
  playerScore = playerScore + x;
}

export { playerChar, playerScore, increaseScore };
