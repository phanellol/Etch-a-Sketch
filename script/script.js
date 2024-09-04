var container = document.querySelector("#container");
var userGridCreatingButton = document.querySelector("#userGridCreatingButtonContainer");
var removeGridContainer = document.querySelector(".removeBorderButton");
var userInputSquareButton = document.createElement("button");
userInputSquareButton.classList.add("squareButton");
userInputSquareButton.textContent = "Create your grid";
userGridCreatingButton.appendChild(userInputSquareButton);
userInputSquareButton.addEventListener("click", creatingUserGrid);
function standartGridCreating() {
    var grid = document.createElement("div");
    grid.classList.add("gridPlace");
    container.appendChild(grid);
    for (var i = 0; i < 16; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
        for (var p = 0; p < 16; p++) {
            var column = document.createElement("div");
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
    var allRowsSelection = document.querySelectorAll(".row");
    var allColumnsSelection = document.querySelectorAll(".column");
    var gridSelection = allRowsSelection.length * allColumnsSelection.length;
    for (var i = 0; i < gridSelection; i++) {
        allRowsSelection.item(i).addEventListener("mouseover", painting);
        allColumnsSelection.item(i).addEventListener("mouseover", painting);
    }
}
function painting(event) {
    var currentDiv = event.target;
    currentDiv.setAttribute("style", "background: pink;");
}
standartGridCreating();
hoverTracking();
function creatingUserGrid() {
    alert("Max value of grid is 100x100!");
    var userGridValue = parseInt(prompt("enter the grid size(only one value)"));
    if (userGridValue === null || isNaN(userGridValue)) {
        alert("Wrong! Enter a correct value");
    }
    else if (userGridValue > 100) {
        return alert("Too big! Try to create smaller grid");
    }
    else {
        var gridSelector = document.querySelector(".gridPlace");
        container.removeChild(gridSelector);
        var grid = document.createElement("div");
        grid.classList.add("gridPlace");
        container.appendChild(grid);
        for (var x = 0; x < userGridValue; x++) {
            var row = document.createElement("div");
            row.classList.add("row");
            grid.appendChild(row);
            for (var y = 0; y < userGridValue; y++) {
                var column = document.createElement("div");
                column.classList.add("column");
                row.appendChild(column);
            }
        }
        hoverTracking();
    }
}
