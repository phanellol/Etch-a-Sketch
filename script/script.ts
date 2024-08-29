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
    // const userGridValue = prompt("How many square do you want");

    for (let i = 0; i < 256; i++) {
        let regularDiv = document.querySelector(".regularDiv");
        container.removeChild(regularDiv);
    }

    for (let i = 0; i < (256); i++) {
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
