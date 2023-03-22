let arrow = document.querySelector("#arrow-up");

window.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop >= 2458) {
        arrow.style.display = "flex";
    }
    else {
        arrow.style.display = "none";
    }
  });


