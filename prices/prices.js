//fonctions permettant une modification du texte de chacun des trois boutons lors de la section tarifs et formules (au moment du click) + modification du style de l'icône Tick

function changeButtonMeeting() {
  let button = document.querySelector("#meeting-room-button");
  if (button.innerHTML === "Sélectionner") {
    button.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    button.style.color = "green";
    button.style.fontSize = "1.5rem";
    button.style.transition =
      "background-image 0.3s ease-in-out, color 0.5s ease-in-out";
    button.style.backgroundColor = "transparent";
  } else {
    button.innerHTML = "Sélectionner";
    button.style.transition =
      "background-image 0.3s ease-in-out, color 0.5s ease-in-out";
    button.style.backgroundColor = "transparent";
  }
}

const buttonMeeting = document.querySelector("#meeting-room-button");
buttonMeeting.addEventListener("click", function () {
  changeButtonMeeting("#meeting-room-button");
});

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
    button.style.transition =
      "background-image 0.3s ease-in-out, color 0.5s ease-in-out";
    button.style.backgroundColor = "transparent";
  }
}

const buttonCosy = document.querySelector("#cosy-room-button");
buttonCosy.addEventListener("click", function () {
  changeButtonCosy("#cosy-room-button");
});

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
    button.style.transition =
      "background-image 0.3s ease-in-out, color 0.5s ease-in-out";
    button.style.backgroundColor = "transparent";
  }
}

const buttonPersonnal = document.querySelector("#personnal-room-button");
buttonPersonnal.addEventListener("click", function () {
  changeButtonPersonnal("#personnal-room-button");
});
