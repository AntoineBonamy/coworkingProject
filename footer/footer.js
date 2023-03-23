

window.addEventListener('scroll', () => {
    let arrow = document.querySelector("#arrow-up");
    if (screen.width < 720) {
        if (document.documentElement.scrollTop >= 3000) {
            arrow.style.display = "flex";
        }
        else {
            arrow.style.display = "none";
        }
    }
    else {
        if (document.documentElement.scrollTop >= 1700) {
            arrow.style.display = "flex";
        }
        else {
            arrow.style.display = "none";
        }
    }
  });


