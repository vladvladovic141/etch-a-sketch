const GRID_SIZE = 16;
const display = document.querySelector(".display");

generateGrid(16);

function generateGrid(gridSize) {
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
