var h2El = document.getElementById("baba")
// var h2El = document.querySelector("#baba")

function changeColor() {
    h2El.style.color = "green";
}
function changeColorAgain() {
    h2El.style.color = "blue";
}

h2El.addEventListener("mouseenter", changeColor)
h2El.addEventListener("mouseleave", changeColorAgain)