import { playerScore } from "./playerBehavior";

function drawScoreboard() {
  let scoreboard = document.createElement("span");
  scoreboard.setAttribute("id", "scoreboard");
  let main = document.getElementsByTagName("main")[0];
  main.appendChild(scoreboard);
}

function updateScoreboard() {
  scoreboard.textContent = playerScore;
}

export { drawScoreboard, updateScoreboard };
