

window.addEventListener('scroll', () => {
    let arrow = document.querySelector("#arrow-up");
    if (document.documentElement.scrollTop >= 1700) {
        arrow.style.display = "flex";
    }
    else {
        arrow.style.display = "none";
    }
  });


