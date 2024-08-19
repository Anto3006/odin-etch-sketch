let mouseDown = 0;
let colors = [0, 0, 0];

function createEtchRow(numberColumns) {
  let etchRow = document.createElement("div");
  etchRow.className = "etch-row";
  for (let col = 0; col < numberColumns; col++) {
    let pixel = document.createElement("div");
    pixel.className = "etch-pixel";
    pixel.addEventListener("mouseover", (e) => {
      changeColor();
      if (mouseDown > 0) {
        e.target.style.backgroundColor = `rgb(${colors[0]},${colors[1]}, ${colors[2]})`;
      }
    });
    pixel.addEventListener("click", (e) => {
      changeColor();
      e.target.style.backgroundColor = `rgb(${colors[0]},${colors[1]}, ${colors[2]})`;
    });
    etchRow.appendChild(pixel);
  }
  return etchRow;
}

function changeColor() {
  colors[0] += 1;
  colors[1] += Math.floor(colors[0] / 256);
  colors[0] = colors[0] % 256;
  colors[2] += Math.floor(colors[1] / 256);
  colors[1] = colors[1] % 256;
  colors[2] = colors[2] % 256;
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
  let body = document.querySelector("body");
  body.addEventListener("mousedown", () => {
    mouseDown++;
  });
  body.addEventListener("mouseup", () => {
    mouseDown--;
  });
  body.addEventListener("mouseleave", () => {
    mouseDown = 0;
  });
}

function main() {
  document.querySelector("button").addEventListener("click", () => {
    let sizeInput = document.querySelector("#size-input");
    let size = parseInt(sizeInput.value);
    size = Math.min(size, 64);
    size = Math.max(size, 1);
    sizeInput.value = size;
    createGrid(size, size);
  });
  createGrid(16, 16);
  checkMouseDown();
}

main();
