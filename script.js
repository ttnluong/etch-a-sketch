const container = document.querySelector("#container");

function createDiv(i) {
    for (i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    divs.classList.add("square");
    divs.id = "color";
    container.appendChild(divs);
  }
}

createDiv();

container.addEventListener("mouseover", changeColor);

function changeColor(e) {
    if (e.target.matches("div")) {
        const el = e.target;
        el.style.backgroundColor = "blue";
    }
}


/*
document.querySelector("div").addEventListener("click", changeColor);

function changeColor(i) {
    const div = document.querySelectorAll(".square");
    for (i = 0; i < div.length; i++) {
    div(i).style.backgroundColor = "blue";
}
};



document.querySelectorAll(".square").forEach(el => el.addEventListener("mousover", changeColor));


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