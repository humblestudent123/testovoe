import React, { useState } from 'react';
import './App.css'
export default function ContactForm() {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const showError = (field, message) => {
    setErrors(prev => ({ ...prev, [field]: message }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Пожалуйста, введите имя";
      isValid = false;
    }

    if (formData.phone.trim()) {
      const phonePattern = /^\+?[0-9\s\-]{7,15}$/;
      if (!phonePattern.test(formData.phone.trim())) {
        newErrors.phone = "Введите корректный телефон";
        isValid = false;
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Пожалуйста, введите email";
      isValid = false;
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Введите корректный email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Пожалуйста, введите сообщение";
      isValid = false;
    }

    if (!isValid) {
      setErrors(newErrors);
      return;
    }

    alert("Форма успешно отправлена!");
    setFormData({ username: '', phone: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={errors.username ? 'error' : ''}
          placeholder=" "
          required
        />
        <label htmlFor="username">Имя</label>
        <div className="error-message">{errors.username}</div>
      </div>

      <div className="form-group">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'error' : ''}
          placeholder=" "
          pattern="^\+?[0-9\s\-]{7,15}$"
        />
        <label htmlFor="phone">Телефон</label>
        <div className="error-message">{errors.phone}</div>
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          placeholder=" "
          required
        />
        <label htmlFor="email">Email</label>
        <div className="error-message">{errors.email}</div>
      </div>

      <div className="form-group">
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
          placeholder=" "
          required
        />
        <label htmlFor="message">Текст сообщения</label>
        <div className="error-message">{errors.message}</div>
      </div>

      <button type="submit" className="circle-button">Отправить</button>

      <div className="small">
        Нажимая «Продолжить», вы принимаете <a href="#">пользовательское соглашение</a> и <a href="#">политику конфиденциальности</a>.
      </div>
    </form>
  );
}
