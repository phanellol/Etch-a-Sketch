var container = document.querySelector("#container");
var containerButton = document.querySelector("#containerButton");
var userInputSquareButton = document.createElement("button");
userInputSquareButton.classList.add("squareButton");
userInputSquareButton.textContent = "Create your grid";
containerButton.appendChild(userInputSquareButton);
userInputSquareButton.addEventListener("click", creatingUserGrid);
for (var i = 0; i < (256); i++) {
    var regularDiv = document.createElement("div");
    regularDiv.classList.add(i.toString());
    regularDiv.classList.add("regularDiv");
    container.appendChild(regularDiv);
}
var divHover = document.querySelectorAll(".regularDiv");
var divHoverArray = Array.prototype.slice.call(divHover);
var divDiv = document.querySelector(".regulardiv");
for (var i = 0; i < divHover.length; i++) {
    divHover.item(i).addEventListener("mouseover", painting);
}
function painting(event) {
    var currentDiv = event.target;
    currentDiv.setAttribute("style", "background: pink;");
}
function creatingUserGrid() {
    var userGridValue = parseInt(prompt("enter the grid size(only one value)"));
    for (var i = 0; i < 256; i++) {
        var oldDiv = document.querySelector(".regularDiv");
        container.removeChild(oldDiv);
    }
    for (var i = 0; i < userGridValue; i++) {
        var regularDiv = document.createElement("div");
        regularDiv.classList.add(i.toString());
        regularDiv.classList.add("regularDiv");
        container.appendChild(regularDiv);
    }
    var divHover = document.querySelectorAll(".regularDiv");
    for (var i = 0; i < divHover.length; i++) {
        divHover.item(i).addEventListener("mouseover", painting);
    }
}
