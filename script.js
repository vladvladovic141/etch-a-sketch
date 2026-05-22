let gridSize = 16;
const display = document.querySelector(".display");
const btnSettings = document.querySelector(".btnSettings");
let isSettingsMenuOpened = false;

generateGrid(gridSize);

function generateGrid(gridSize) {
  let prevGrid = document.querySelectorAll(".gridRow");
  if (prevGrid.length > 0) {
    prevGrid.forEach((element) => {
      display.removeChild(element);
    });
  }

  for (let i = 0; i < gridSize; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.add("gridRow");
    for (let j = 0; j < gridSize; j++) {
      const gridElement = document.createElement("div");
      gridElement.classList.add("gridElement");
      gridRow.append(gridElement);
    }
    display.append(gridRow);
  }
}
display.addEventListener("mouseover", (e) => {
  if (e.button === 0) {
    const targetElement = e.target;
    targetElement.classList.add("gridElementHover");
  }
});
btnSettings.addEventListener("click", (e) => {
  if (!isSettingsMenuOpened) {
    showSettnigsMenu();
  }
});
function showSettnigsMenu() {
  isSettingsMenuOpened = true;
  const settingsWindow = document.createElement("div");
  const header = document.createElement("h2");
  header.textContent = "Grid size:";
  settingsWindow.appendChild(header);
  const textArea = document.createElement("input");
  textArea.textContent = "Enter new grid size";
  textArea.type = "number";
  settingsWindow.appendChild(textArea);
  const applyBtn = document.createElement("div");
  applyBtn.classList.add("applyBtn");
  applyBtn.textContent = "Apply";
  settingsWindow.appendChild(applyBtn);
  const cnclBtn = document.createElement("div");
  cnclBtn.classList.add("applyBtn");
  cnclBtn.textContent = "Cancel";
  settingsWindow.appendChild(cnclBtn);
  settingsWindow.classList.add("settingsWindow");
  document.querySelector("body").appendChild(settingsWindow);
  applyBtn.addEventListener("click", (e) => {
    gridSize = textArea.value.toString();
    gridSize = gridSize < 16 ? 16 : gridSize;
    gridSize = gridSize > 100 ? 100 : gridSize;
    generateGrid(gridSize);
    settingsWindow.remove();
    isSettingsMenuOpened = false;
  });
  cnclBtn.addEventListener("click", (e) => {
    settingsWindow.remove();
    isSettingsMenuOpened = false;
  });
}
