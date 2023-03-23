let popup = document.getElementById("pop-message");
let overlay = document.getElementById("overlay");
function openPopup() {
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("phone_number").value = "";
}

function sendMail(event) {
    event.preventDefault();
    let params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs
        .send("service_qzjg3so", "template_pm7bzdp", params)
        .then(function (res) {
            if (res.status == 200 && res.text == "OK") {
                openPopup();
            } else {
                console.log("error");
                alert("Oups, une erreur s'est produite. ");
            }
        });
}
