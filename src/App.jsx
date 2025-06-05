import React, { useEffect } from 'react';
import image from './images/image.png';
import './App.css';


function App() {
  useEffect(() => {
    const form = document.getElementById('contactForm');

    function showError(input, message) {
      const formGroup = input.closest('.form-group');
      const errorDiv = formGroup.querySelector('.error-message');
      errorDiv.textContent = message;
      input.classList.add('error');
    }

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }

    function onSubmit(e) {
      e.preventDefault();

      let isValid = true;

      form.querySelectorAll('.error-message').forEach(div => (div.textContent = ''));
      form.querySelectorAll('input, textarea').forEach(input => input.classList.remove('error'));

      const username = form.username;
      if (!username.value.trim()) {
        showError(username, 'Пожалуйста, введите имя');
        isValid = false;
      }

      const phone = form.phone;
      if (phone.value.trim()) {
        const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
        if (!phonePattern.test(phone.value.trim())) {
          showError(phone, 'Введите корректный телефон');
          isValid = false;
        }
      }

      const email = form.email;
      if (!email.value.trim()) {
        showError(email, 'Пожалуйста, введите email');
        isValid = false;
      } else if (!validateEmail(email.value.trim())) {
        showError(email, 'Введите корректный email');
        isValid = false;
      }

      const message = form.message;
      if (!message.value.trim()) {
        showError(message, 'Пожалуйста, введите сообщение');
        isValid = false;
      }

      if (isValid) {
        alert('Форма успешно отправлена!');
        form.reset();
      }
    }

    form.addEventListener('submit', onSubmit);

    return () => form.removeEventListener('submit', onSubmit);
  }, []);

  return (
    <div className="container">
      <div className="form-side">
        <div className="main">
          <h1>
            Получить <br/>
            консультацию
          </h1>
          <p>
            Заполните форму и мы свяжемся с <br/>
            вами в ближайшее время
          </p>
        </div>

        <form id="contactForm" noValidate>
          <div className="form-group">
            <input type="text" id="username" name="username" required placeholder=" " />
            <label htmlFor="username">Имя</label>
            <div className="error-message"></div>
          </div>

          <div className="form-group">
            <input type="tel" id="phone" name="phone" pattern="^\+?[0-9\s\-]{7,15}$" placeholder=" " />
            <label htmlFor="phone">Телефон</label>
            <div className="error-message"></div>
          </div>

          <div className="form-group">
            <input type="email" id="email" name="email" required placeholder=" " />
            <label htmlFor="email">Email</label>
            <div className="error-message"></div>
          </div>

          <div className="form-group">
            <textarea id="message" name="message" required placeholder=" " rows="4"></textarea>
            <label htmlFor="message">Текст сообщения</label>
            <div className="error-message"></div>
          </div>

          <button type="submit" className="circle-button">Отправить</button>

          <div className="small">
            Нажимая «Продолжить», вы принимаете{' '}
            <a href="#">пользовательское соглашение</a> и{' '}
            <a href="#">политику конфиденциальности</a>.
          </div>
        </form>
      </div>

      <div className="image-side">
        <img src={image} alt="Оператор" />
      </div>
    </div>
  );
}

export default App;
