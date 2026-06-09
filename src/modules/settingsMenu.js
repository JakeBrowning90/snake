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
  let speedSelect = document.createElement("select");

  let submitButton = document.createElement("button");
  submitButton.textContent = "Save";

  main.appendChild(settingsForm);
  settingsForm.appendChild(speedLabel);
  settingsForm.appendChild(speedSelect);
  populateSpeedOptions(speedSelect)
  settingsForm.appendChild(submitButton);
}

function populateSpeedOptions(parent) {
  for (let i = 0; i < 10; i++) {
    let option = document.createElement("option");
    option.textContent = i;
    option.value = i;
    parent.appendChild(option);
  }
}

export { showSettingsView };
