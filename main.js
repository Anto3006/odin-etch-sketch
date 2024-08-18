let mouseDown = false;

function createEtchRow(numberColumns) {
  let etchRow = document.createElement("div");
  etchRow.className = "etch-row";
  for (let col = 0; col < numberColumns; col++) {
    let pixel = document.createElement("div");
    pixel.className = "etch-pixel";
    pixel.addEventListener("mouseover", (e) => {
      if (mouseDown) {
        e.target.style.backgroundColor = "black";
      }
    });
    etchRow.appendChild(pixel);
  }
  return etchRow;
}

function createGrid(numberRows, numberColumns) {
  let etchContainer = document.querySelector(".etch-container");
  let grid = [];
  for (let row = 0; row < numberRows; row++) {
    let etchRow = createEtchRow(numberColumns);
    grid.push(etchRow);
  }
  etchContainer.replaceChildren(...grid);
}

function checkMouseDown() {
  let etchContainer = document.querySelector(".etch-container");
  etchContainer.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  etchContainer.addEventListener("mouseup", () => {
    mouseDown = false;
  });
  etchContainer.addEventListener("mouseleave", () => {
    mouseDown = false;
  });
}

createGrid(64, 64);
checkMouseDown();
