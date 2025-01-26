"use strict";

const promoBlock = document.getElementById("promo");
const subscribedBlock = document.getElementById("subscribed");
const toggleButtons = document.querySelectorAll(".toggle-button");

const form = document.getElementById("form");
const errorMessage = document.getElementById("error");
const emailInput = document.getElementById("mail");
const userEmailDisplay = document.getElementById("user-email");

// Function to validate email
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
  return regex.test(email);
}

// Handling submit
function handleSubmit(e) {
  e.preventDefault();

  const email = emailInput.value;

  if (!validateEmail(email)) {
    // Show error message
    errorMessage.textContent = "Valid email required";
    errorMessage.style.display = "inline-block";
    emailInput.style.backgroundColor = "rgba(255, 97, 85, 0.15)";
    emailInput.style.border = "1px solid #ff6155";
    emailInput.style.color = "#ff6155";
    return; // Stop further execution if email is invalid
  }
  // Hide error message and reset input styles
  errorMessage.textContent = "";
  errorMessage.style.display = "none";
  emailInput.style.backgroundColor = "";
  emailInput.style.border = "";
  emailInput.style.color = "";

  // Display the email in the subscribed block and make it bold
  userEmailDisplay.textContent = email;
  userEmailDisplay.style.fontWeight = "bold";

  // Toggle blocks only if email is valid
  promoBlock.style.display = "none";
  subscribedBlock.style.display = "block";
}

// Add input event listener to emailInput
emailInput.addEventListener("input", () => {
  if (emailInput.value === "") {
    // Hide error message and reset input styles if email field is empty
    errorMessage.textContent = "";
    errorMessage.style.display = "none";
    emailInput.style.backgroundColor = "";
    emailInput.style.border = "";
    emailInput.style.color = "";
  }
});

form.addEventListener("submit", handleSubmit);

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!form.contains(button)) {
      // Clear the email input field when dismissing the subscribedBlock
      emailInput.value = "";

      // Toggle blocks
      promoBlock.style.display = "flex";
      subscribedBlock.style.display = "none";
    }
  });
});
