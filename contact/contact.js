let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");
function openPopup(event) {
    event.preventDefault();
    popup.classList.add("open-popup");
    overlay.style.display = "initial";
}

function closePopup() {
    popup.classList.remove("open-popup");
    overlay.style.display = "none";
}
