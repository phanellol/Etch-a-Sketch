const container = document.querySelector("#container");

const userGridCreatingButton = document.querySelector("#userGridCreatingButtonContainer");

const removeGridContainer = document.querySelector(".removeBorderButton");

const userInputSquareButton = document.createElement("button");
userInputSquareButton.classList.add("squareButton");
userInputSquareButton.textContent = "Create your grid";
userGridCreatingButton.appendChild(userInputSquareButton);
userInputSquareButton.addEventListener("click", creatingUserGrid);


function standartGridCreating() {
    const grid = document.createElement("div");
    grid.classList.add("gridPlace");
    container.appendChild(grid);

    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (let p = 0; p < 16; p++) {
            const column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hoverTracking() {
    const allRowsSelection = document.querySelectorAll(".row");
    const allColumnsSelection = document.querySelectorAll(".column")
    const gridSelection = allRowsSelection.length * allColumnsSelection.length;
    for (let i = 0; i < gridSelection; i++) {
        allRowsSelection.item(i).addEventListener("mouseover", painting);
        allColumnsSelection.item(i).addEventListener("mouseover", painting);
    }
}

function painting(event: MouseEvent) {
    let currentDiv = event.target;
    currentDiv.setAttribute("style", "background: pink;")
}

standartGridCreating();
hoverTracking();

function creatingUserGrid() {
    alert("Max value of grid is 100x100!")
    const userGridValue = parseInt(prompt("enter the grid size(only one value)"));
    if (userGridValue === null || isNaN(userGridValue)) {
        alert("Wrong! Enter a correct value");
    } else if (userGridValue > 100) {
        return alert("Too big! Try to create smaller grid");
    } else {
        let gridSelector = document.querySelector(".gridPlace")
        container.removeChild(gridSelector);

        const grid = document.createElement("div");
        grid.classList.add("gridPlace");
        container.appendChild(grid);

        for (let x = 0; x < userGridValue; x++) {
            const row = document.createElement("div");
            row.classList.add("row");
            grid.appendChild(row);
            for (let y = 0; y < userGridValue; y++) {
                const column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
        }
        hoverTracking();
    }


}
