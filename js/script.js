const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // Очистка ошибок
  form.querySelectorAll(".error-message").forEach(div => div.textContent = "");
  form.querySelectorAll("input, textarea").forEach(input => input.classList.remove("error"));

  // Имя
  const username = form.username;
  if (!username.value.trim()) {
    showError(username, "Пожалуйста, введите имя");
    isValid = false;
  }

  // Телефон (необязательный)
  const phone = form.phone;
  if (phone.value.trim()) {
    const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
    if (!phonePattern.test(phone.value.trim())) {
      showError(phone, "Введите корректный телефон");
      isValid = false;
    }
  }

  // Email
  const email = form.email;
  if (!email.value.trim()) {
    showError(email, "Пожалуйста, введите email");
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    showError(email, "Введите корректный email");
    isValid = false;
  }

  // Сообщение
  const message = form.message;
  if (!message.value.trim()) {
    showError(message, "Пожалуйста, введите сообщение");
    isValid = false;
  }

  if (isValid) {
    alert("Форма успешно отправлена!");
    form.reset();
  }
});

function showError(input, message) {
  const formGroup = input.closest(".form-group");
  const errorDiv = formGroup.querySelector(".error-message");
  errorDiv.textContent = message;
  input.classList.add("error");
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
