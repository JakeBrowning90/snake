const functionName = () => {
  console.log("Hello world");
};

function showSettingsView() {
  console.log("Settings!");
  let main = document.getElementsByTagName("main")[0];
  main.replaceChildren();

  let settingsForm = document.createElement("form");
  let speedLabel = document.createElement("label");
  speedLabel.textContent = "Movement speed:";
  let speedInput = document.createElement("input");
  speedInput.setAttribute("type", "number");

  let submitButton = document.createElement("button");
  submitButton.textContent = "Save";

  main.appendChild(settingsForm);
  settingsForm.appendChild(speedLabel);
  settingsForm.appendChild(speedInput);
  settingsForm.appendChild(submitButton);
}

export { showSettingsView };
