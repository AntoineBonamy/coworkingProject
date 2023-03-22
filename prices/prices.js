function changeButtonMeeting() {
  let button = document.querySelector("#meeting-room-button");
  if (button.innerHTML === "Sélectionner") {
    button.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    button.style.color = "green";
    button.style.fontSize = "1.5rem";
    button.style.transition =
      "background-image 0.3s ease-in-out, color 0.5s ease-in-out";
    button.style.backgroundColor = "transparent";
    button.style.animation = "bounce 0.35s ease infinite alternate";
  } else {
    button.innerHTML = "Sélectionner";
    button.style.color = "black";
    button.style.fontSize = "0.8rem";
    button.style.transition = "0s";
  }
}
//coucou2

function changeButtonCosy() {
  let button = document.querySelector("#cosy-room-button");
  if (button.innerHTML === "Sélectionner") {
    button.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    button.style.color = "green";
    button.style.fontSize = "1.5rem";
    button.style.transition =
      "background-image 0.3s ease-in-out, color 0.5s ease-in-out";
    button.style.backgroundColor = "transparent";
  } else {
    button.innerHTML = "Sélectionner";
    button.style.color = "black";
    button.style.fontSize = "0.8rem";
    button.style.transition = "0s";
  }
}

function changeButtonPersonnal() {
  let button = document.querySelector("#personnal-room-button");
  if (button.innerHTML === "Sélectionner") {
    button.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    button.style.color = "green";
    button.style.fontSize = "1.5rem";
    button.style.transition =
      "background-image 0.3s ease-in-out, color 0.5s ease-in-out";
    button.style.backgroundColor = "white";
  } else {
    button.innerHTML = "Sélectionner";
    button.style.color = "black";
    button.style.fontSize = "0.8rem";
    button.style.transition = "0s";
  }
}

//TODO: fonction de redirection vers la section formulaire une fois que l'utilisateur a sélectionner une formule
/* function redirect() {
  let button = document.querySelector ('<i class="fa-solid fa-circle-check"></i>');
  if (button.innerHTML === '<i class="fa-solid fa-circle-check"></i>') {

  }
} */
