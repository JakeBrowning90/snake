function drawTouchControls() {
  let controlPad = document.createElement("div");
  controlPad.classList.add("touchPad");

  let touchUp = document.createElement("button");
  touchUp.classList.add("touchControl");
  touchUp.setAttribute("id", "TouchUp");
  touchUp.innerHTML = "&uarr;";

  let touchLeft = document.createElement("button");
  touchLeft.classList.add("touchControl");
  touchLeft.setAttribute("id", "TouchLeft");
  touchLeft.innerHTML = "&larr;";

  let touchRight = document.createElement("button");
  touchRight.classList.add("touchControl");
  touchRight.setAttribute("id", "TouchRight");
  touchRight.innerHTML = "&rarr;";

  let touchDown = document.createElement("button");
  touchDown.classList.add("touchControl");
  touchDown.setAttribute("id", "TouchDown");
  touchDown.innerHTML = "&darr;";

  controlPad.appendChild(touchUp);
  controlPad.appendChild(touchLeft);
  controlPad.appendChild(touchRight);
  controlPad.appendChild(touchDown);

  let main = document.getElementsByTagName("main")[0];
  main.appendChild(controlPad);
}

function drawKeyControls() {
  let controlPad = document.createElement("div");
  controlPad.classList.add("keyPad");

  let keyUp = document.createElement("span");
  keyUp.setAttribute("id", "keyUp");
  keyUp.innerHTML = "W &uarr;";

  let keyLeft = document.createElement("span");
  keyLeft.setAttribute("id", "keyLeft");
  keyLeft.innerHTML = "A &larr;";

  let keyDown = document.createElement("span");
  keyDown.setAttribute("id", "keyDown");
  keyDown.innerHTML = "S &darr;";

  let keyRight = document.createElement("span");
  keyRight.setAttribute("id", "keyRight");
  keyRight.innerHTML = "D &rarr;";

  controlPad.appendChild(keyUp);
  controlPad.appendChild(keyLeft);
  controlPad.appendChild(keyDown);
  controlPad.appendChild(keyRight);

  let main = document.getElementsByTagName("main")[0];
  main.appendChild(controlPad);
}

export { drawTouchControls, drawKeyControls };
