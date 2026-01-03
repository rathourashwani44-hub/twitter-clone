
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});




document.addEventListener("DOMContentLoaded", () => {
  // Handle login form
  const loginForm = document.querySelector(".form-box.login form");
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = loginForm.querySelector("input[type='text']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    if (username === "Ashwin" && password === "2030") {
      window.location.href = "index.html"; // Redirect after login
    } else {
      alert("Invalid username or password.");
    }
  });

  // Handle registration form
  const registerForm = document.querySelector(".form-box.registion form");
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = registerForm.querySelector("#username").value;
    const email = registerForm.querySelector("#email").value;
    const password = registerForm.querySelector("#password").value;

    if (username && email && password) {
      // You can store user data in localStorage or send it to a backend here
      window.location.href = "index.html"; // Redirect after registration
    } else {
      alert("Please fill in all fields.");
    }
  });
});