const container = document.querySelector("#container");

const containerButton = document.querySelector("#containerButton")

const userInputSquareButton = document.createElement("button");
userInputSquareButton.classList.add("squareButton");
userInputSquareButton.textContent = "Create your grid";
containerButton.appendChild(userInputSquareButton);

userInputSquareButton.addEventListener("click", creatingUserGrid);

for (let i = 0; i < (256); i++) {
    let regularDiv = document.createElement("div");
    regularDiv.classList.add(i.toString());
    regularDiv.classList.add("regularDiv");
    container.appendChild(regularDiv);
}

const divHover = document.querySelectorAll(".regularDiv");

const divHoverArray = Array.prototype.slice.call(divHover);

const divDiv = document.querySelector(".regulardiv");

for (let i = 0; i < divHover.length; i++) {
    divHover.item(i).addEventListener("mouseover", painting);

}

function painting(event: MouseEvent) {
    let currentDiv = event.target;
    currentDiv.setAttribute("style", "background: pink;")
}

function creatingUserGrid() {
    const userGridValue = parseInt(prompt("enter the grid size(only one value)"));
    const divSelector = document.querySelectorAll(".regularDiv");
    if (userGridValue === null || isNaN(userGridValue)) {
        alert("Wrong! Enter a correct value");
    }

    for (let i = 0; i < divSelector.length; i++) {
        let oldDiv = document.querySelector(".regularDiv");
        container.removeChild(oldDiv);
    }

    for (let i = 0; i < userGridValue; i++) {
        let regularDiv = document.createElement("div");
        regularDiv.classList.add(i.toString());
        regularDiv.classList.add("regularDiv");
        container.appendChild(regularDiv);
    }
    const divHover = document.querySelectorAll(".regularDiv");
    for (let i = 0; i < divHover.length; i++) {
        divHover.item(i).addEventListener("mouseover", painting);

    }
}
