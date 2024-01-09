const form = document.querySelector(".form");
const name = document.getElementById("name")
const email = document.getElementById("email")
const Topic = document.getElementById("Topic")
const data = document.getElementById("data")

function sendEmail() {
    const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Message: ${data.value}`;


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sharmaadityakumar207@gmail.com",
        Password: "EE741C301582C054FB5CAE7A6677A67D5FEB",
        To: 'tanus4982@gmail.com',
        From: "tanus4982@gmail.com",
        Subject: Topic.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Succesfully!",
                    icon: "success"
                });
            }
        }
    );

}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    for (const item of items) {
        if (item.value == "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
    return false;
});
