const carrousel = document.querySelector(".carrousel");

const dragging = (e) => {
  carrousel.scrollLeft = e.pageX;
};

carrousel.addEventListener("mousemove", dragging);
