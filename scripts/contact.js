const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        formStatus.textContent = "Sending...";
        formStatus.style.color = "white";

        // Template 1: Send message to you
        emailjs.sendForm(
            "service_xfevubk",
            "template_icy6nsp",
            contactForm
        )
        .then(function () {

            // Template 2: Send auto-reply to visitor
            return emailjs.sendForm(
                "service_xfevubk",
                "template_9119gfo",
                contactForm
            );

        })
        .then(function () {

            formStatus.textContent = "Message sent successfully!";
            formStatus.style.color = "var(--green)";

            contactForm.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            formStatus.textContent =
                "Failed to send message. Please try again.";

            formStatus.style.color = "red";
        });
    });
}