const container = document.querySelector("#container");


for (let i = 0; i < (256); i++) {
    let regularDiv = document.createElement("div");
    regularDiv.classList.add("regularDiv");
    container.appendChild(regularDiv);
}

const divHover = document.querySelectorAll(".regularDiv");
console.log(divHover);

function painting() {
    divHover.setAttribute("style", "background: pink;");
}

divHover.addEventListener("mousedown", painting);


