function drawControlSpan() {
  let main = document.getElementsByTagName("main")[0];
  let controlSpan = document.createElement("span");
  controlSpan.textContent = "Move with on-screen buttons, arrow keys, or WASD";
  main.appendChild(controlSpan);
}

export { drawControlSpan };
