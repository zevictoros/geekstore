document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    console.log(`Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\nMensagem: ${message}`);

    document.getElementById('contactForm').reset();
});
