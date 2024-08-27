var container = document.querySelector("#container");
for (var i = 0; i < (256); i++) {
    var regularDiv = document.createElement("div");
    regularDiv.classList.add("regularDiv");
    container.appendChild(regularDiv);
}
var divHover = document.querySelectorAll(".regularDiv");
console.log(divHover);
function painting() {
    divHover.setAttribute("style", "background: pink;");
}
divHover.addEventListener("mousedown", painting);
