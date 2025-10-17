import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    questionType: "Общие вопросы",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
    alert("Сообщение отправлено!");
    setFormData({
      name: "",
      email: "",
      questionType: "Общие вопросы",
      message: "",
    });
  };

  return (
    <div className="contact container">
      <div className="contact-info">
        <h2>Как с нами связаться</h2>
        <p>
          1. Мы принимаем звонки по будням с <b>09:00 до 20:00</b>.
        </p>
        <p>
          Заказы на сайте принимаются круглосуточно. Заказы, поступившие на
          выходных или ночью, будут обработаны на следующий рабочий день с утра!
        </p>
        <p>
          2. Консультант в онлайн чате ответит на ваши вопросы в рабочее время.
          Окошко чата находится в правом нижнем углу.
        </p>
        <p>
          Если консультанта нет в сети, вы можете отправить нам сообщение через
          форму справа и наш менеджер ответит Вам по мере возможности.
        </p>
        <p>
          3. Навестить нас в магазине по адресу: г.Минск, ул. Веры Хоружей 66,
          ТЦ Зеркало, пав. 4Б.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Написать нам письмо</h3>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Электронная почта"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="questionType"
          value={formData.questionType}
          onChange={handleChange}
        >
          <option>Общие вопросы</option>
          <option>Заказы</option>
          <option>Поддержка</option>
        </select>
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Contact;