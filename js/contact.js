console.log("Page contact chargée");

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    msg.textContent = "Message envoyé avec succès !";
    msg.style.color = "green";
    form.reset();
  });
}
