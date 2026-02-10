const container = document.querySelector("#container");

function createDiv(i) {
    const baseGrid = 16;
    for (i = 0; i < baseGrid*baseGrid ; i++) {
    const divs = document.createElement("div");
    divs.classList.add("square");
    divs.id = "color";
    divs.style.width = (100/baseGrid)+"%";
    container.appendChild(divs);
  }
}

createDiv();

container.addEventListener("mouseover", changeColor);

function changeColor(e) {
    if (e.target.matches("div")) {
        const el = e.target;
        el.style.backgroundColor = rgb;
    }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const r = getRandomInt(0, 255);
const g = getRandomInt(0, 255);
const b = getRandomInt(0, 255);
const rgb = `rgb(${r},${g},${b})`;

document.querySelector("button").onclick = askGrid;

function askGrid(i) {
    var newGrid = prompt("new grid?");
    if (newGrid > 100) {
        alert("under 100");
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



/*


var newGrid = askGrid();

document.querySelector("div").addEventListener("click", changeColor);

function changeColor(i) {
    const div = document.querySelectorAll(".square");
    for (i = 0; i < div.length; i++) {
    div(i).style.backgroundColor = "blue";
}
};


document.querySelectorAll(".square").forEach(el => el.addEventListener("mouseover", changeColor));


function selectAll() {
    const div = document.querySelectorAll(".square");
    for (i = 0; i < div.length; i++) {
        div(i).addEventListener("mouseover", changeColor);
    }
};

function changeColor() {
    div.style.backgroundColor = "blue";
};

selectAll();


const div = document.getElementById("color");
divs.addEventListener("click", changeColor);

function changeColor() {
    const div = document.getElementById("color")
    div.classList.replace("square", "squareHover")
}

div.classList.replace("square", "squareHover");


function changeColor() {
    document.getElementById("color").style.backgroundColor = "lightblue";
}

const div = document.querySelector(".square");
div.addEventListener("click", changeColor); 

divs.id = "color";

    divs.setAttribute("id", "color");

*/