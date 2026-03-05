const container = document.querySelector("#container");

function createDiv(i) {
    const baseGrid = 16;
    for (i = 0; i < baseGrid*baseGrid ; i++) {
    const divs = document.createElement("div");
    divs.classList.add("square");
    divs.id = "color";
    divs.style.width = (100/baseGrid)+"%";
    divs.addEventListener("mouseover", () => {
        divs.style.backgroundColor = randomColor();
        divs.style.opacity = Number(divs.style.opacity) + 0.1;
    });
    container.appendChild(divs);
  }
}

createDiv();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor() {
const r = getRandomInt(0, 255);
const g = getRandomInt(0, 255);
const b = getRandomInt(0, 255);
const rgb = `rgb(${r},${g},${b})`;
return rgb;
}

document.querySelector("#newgrid").onclick = askGrid;

function askGrid(i) {
    var newGrid = prompt("select a number between 1-100");
    if (newGrid > 100) {
        alert("under 100 please");
        return;
    }
    while (container.firstChild) {
        container.firstChild.remove();
    }
    for (i = 0; i < newGrid*newGrid; i++) {
    const divsNew = document.createElement("div");
    divsNew.classList.add("square");
    divsNew.style.width = (100/newGrid)+"%";
    container.appendChild(divsNew);
  }
};

document.querySelector("#reset").onclick = reset;

function reset() {
    document.querySelectorAll(".square").forEach(square => {
        square.style.backgroundColor = "";
        square.style.opacity = "";
    });
}