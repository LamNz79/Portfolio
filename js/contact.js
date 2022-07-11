var btn = document.getElementById('btn');
const PASSWORDS = '46992AA5A886FFD2A98A6B839D87A95B20E8'
async function sendEmail(e) {
    e.preventDefault();
    var name = await document.getElementById('name').value.trim();
    var email = await document.getElementById('email').value.trim();
    var message = await document.getElementById('message').value.trim();

    // alert(name + ' ' + email + ' ' + message)
    console.log(email)
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "plam84524@gmail.com",
        Password: PASSWORDS,
        To: 'plam84524@gmail.com',
        From: email,
        Subject: "Sending Email using javascript",
        Body: `name: ${name} <br>email: ${email} <br>message: ${message} <br>`,
    })
        .then(function (message) {
            alert(message)
        });
}

// btn.addEventListener("click", sendEmail(event))