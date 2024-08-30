const container = document.querySelector("#container");

const containerButton = document.querySelector("#containerButton")

const userInputSquareButton = document.createElement("button");
userInputSquareButton.classList.add("squareButton");
userInputSquareButton.textContent = "Create your grid";
containerButton.appendChild(userInputSquareButton);
userInputSquareButton.addEventListener("click", creatingUserGrid);

function standartGridCreating() {
    for (let i = 0; i < (256); i++) {
        let regularDiv = document.createElement("div");
        regularDiv.classList.add(i.toString());
        regularDiv.classList.add("regularDiv");
        container.appendChild(regularDiv);
    }
}

function hoverTracking() {
    const allDivsSelection = document.querySelectorAll(".regularDiv");
    for (let i = 0; i < allDivsSelection.length; i++) {
        allDivsSelection.item(i).addEventListener("mouseover", painting);

    }
}

function painting(event: MouseEvent) {
    let currentDiv = event.target;
    currentDiv.setAttribute("style", "background: pink;")
}

standartGridCreating();
hoverTracking();

function creatingUserGrid() {
    alert("Max value of grid is 40x40!")
    const userGridValue = parseInt(prompt("enter the grid size(only one value)"));
    if (userGridValue === null || isNaN(userGridValue)) {
        alert("Wrong! Enter a correct value");
    } else if (userGridValue > 40) {
        alert("Grid is too big! Look at this!")
    }
    let multUserGridValue = Math.pow(userGridValue, 2);
    console.log(multUserGridValue);

    const allDivsSelection = document.querySelectorAll(".regularDiv");
    for (let i = 0; i < allDivsSelection.length; i++) {
        let oldDiv = document.querySelector(".regularDiv");
        container.removeChild(oldDiv);
    }

    for (let i = 0; i < multUserGridValue; i++) {
        let regularDiv = document.createElement("div");
        regularDiv.classList.add(i.toString());
        regularDiv.classList.add("regularDiv");
        container.appendChild(regularDiv);
    }
    hoverTracking();
}
