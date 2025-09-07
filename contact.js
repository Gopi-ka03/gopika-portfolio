// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stop actual form submission

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !phone || !message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    // Phone validation (10 digits only)
    if (!/^\d{10}$/.test(phone)) {
      alert("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    // Show success message
    alert(`✅ Thank you ${name}, your message has been sent successfully!`);

    // Reset the form
    form.reset();
  });
});

const successMsg = document.createElement("div");
successMsg.className = "success-message";
successMsg.textContent = `✅ Thank you ${name}, your message has been sent!`;
document.querySelector(".form-card").appendChild(successMsg);

// remove after 4s
setTimeout(() => successMsg.remove(), 4000);
