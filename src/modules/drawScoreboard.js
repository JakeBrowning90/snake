import { playerScore } from "./playerBehavior";

// function drawScoreboard() {
//   let scoreboard = document.createElement("span");
//   scoreboard.setAttribute("id", "scoreboard");
//   // let main = document.getElementsByTagName("main")[0];
//   // main.appendChild(scoreboard);
//   let headerRight = document.getElementsByClassName("headerRight")[0];
//   headerRight.appendChild(scoreboard);
// }

function updateScoreboard() {
  let scoreboard = document.getElementById("scoreboard");
  scoreboard.textContent = playerScore;
}

export { updateScoreboard };
