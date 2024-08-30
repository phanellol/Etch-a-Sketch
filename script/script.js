var container = document.querySelector("#container");
var containerButton = document.querySelector("#containerButton");
var userInputSquareButton = document.createElement("button");
userInputSquareButton.classList.add("squareButton");
userInputSquareButton.textContent = "Create your grid";
containerButton.appendChild(userInputSquareButton);
userInputSquareButton.addEventListener("click", creatingUserGrid);
function standartGridCreating() {
    for (var i = 0; i < (256); i++) {
        var regularDiv = document.createElement("div");
        regularDiv.classList.add(i.toString());
        regularDiv.classList.add("regularDiv");
        container.appendChild(regularDiv);
    }
}
function hoverTracking() {
    var allDivsSelection = document.querySelectorAll(".regularDiv");
    for (var i = 0; i < allDivsSelection.length; i++) {
        allDivsSelection.item(i).addEventListener("mouseover", painting);
    }
}
function painting(event) {
    var currentDiv = event.target;
    currentDiv.setAttribute("style", "background: pink;");
}
standartGridCreating();
hoverTracking();
function creatingUserGrid() {
    alert("Max value of grid is 40x40!");
    var userGridValue = parseInt(prompt("enter the grid size(only one value)"));
    if (userGridValue === null || isNaN(userGridValue)) {
        alert("Wrong! Enter a correct value");
    }
    else if (userGridValue > 40) {
        alert("Grid is too big! Look at this!");
    }
    var multUserGridValue = Math.pow(userGridValue, 2);
    console.log(multUserGridValue);
    var allDivsSelection = document.querySelectorAll(".regularDiv");
    for (var i = 0; i < allDivsSelection.length; i++) {
        var oldDiv = document.querySelector(".regularDiv");
        container.removeChild(oldDiv);
    }
    for (var i = 0; i < multUserGridValue; i++) {
        var regularDiv = document.createElement("div");
        regularDiv.classList.add(i.toString());
        regularDiv.classList.add("regularDiv");
        container.appendChild(regularDiv);
    }
    hoverTracking();
}
