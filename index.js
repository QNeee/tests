const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const nav = document.querySelector(".nav");
const form = document.querySelector(".contact-form");
const eventsButton = document.querySelector(".group-desc-button");
const tableButton = document.querySelectorAll(".table-button");
const popup = document.getElementById("popup");
const popupText = popup.querySelector(".popup-text");
const popupClose = document.getElementById("popup-close");
const firstName = form.querySelector('input[name="firstName"]');
const lastName = form.querySelector('input[name="lastName"]');
const msg = form.querySelector('textarea[name="message"]');
firstName.value = localStorage.getItem("firstName") || "";
lastName.value = localStorage.getItem("lastName") || "";
msg.value = localStorage.getItem("message") || "";
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
eventsButton.addEventListener("click", () => {
  popupText.textContent = eventsButton.className;
  popup.style.display = "block";
});
tableButton.forEach((item) => {
  item.addEventListener("click", () => {
    popupText.textContent = item.className;
    popup.style.display = "block";
  });
});
burger.addEventListener("click", () => {
  nav.style.display = "block";
  burger.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  burger.style.display = "block";
  nav.style.display = "none";
  closeBtn.style.display = "none";
});

const formReset = () => {
  firstName.value = "";
  lastName.value = "";
  msg.value = "";
  localStorage.clear();
};
[firstName, lastName, msg].forEach((input) => {
  input.addEventListener("input", () => {
    localStorage.setItem(input.name, input.value);
  });
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const msgValue = msg.value.trim();

  if (!firstNameValue || !lastNameValue || !msgValue) {
    alert("Заповніть усі поля!");
    return;
  }
  formReset();
  popupText.textContent = "Запит Відправлено";
  popup.style.display = "block";
});
