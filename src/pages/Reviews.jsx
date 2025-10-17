import React, { useState } from "react";
import "./Reviews.scss";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Самойлов Борис Витальевич",
      city: "Москва",
      date: "1 мая 2020",
      rating: 5,
      text: "Не следует, однако забывать, что реализация намеченных плановых заданий в значительной степени обуславливает создание направлений его развития...",
      reply: "Не следует, однако забывать, что реализация намеченных плановых заданий в значительной степени обуславливает создание...",
      image: null,
    },
    {
      name: "Пономарёв Геннадий Леонидович",
      city: "Москва",
      date: "1 мая 2020",
      rating: 4,
      text: "Не следует, однако забывать, что реализация намеченных плановых заданий в значительной степени обуславливает создание направлений его развития...",
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    city: "",
    text: "",
    rating: 0,
  });
  const [showForm, setShowForm] = useState(false);

  const handleStarClick = (rating) => {
    setNewReview((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name ||  !newReview.city || !newReview.text || !newReview.rating)
      return alert("Пожалуйста, заполните все поля и выберите рейтинг.");

    setReviews((prev) => [
      {
        ...newReview,
        date: new Date().toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      },
      ...prev,
    ]);

    setNewReview({ name: "", city: "", text: "", rating: 0 });
    setShowForm(false);
  };

  return (
    <div className="reviews container">
      <h2>Отзывы о компании</h2>
      <p className="subtitle">
        Нам важно ваше мнение! Ваши отзывы помогают нам развиваться и становиться лучше.
      </p>

      <button className="open-form" onClick={() => setShowForm(!showForm)}>
        Оставить отзыв
      </button>

      {showForm && (
        <div className="form">
          <h3>Оставьте отзыв</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={i <= newReview.rating ? "star active" : "star"}
                onClick={() => handleStarClick(i)}
              >
                ★
              </span>
            ))}
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ваше имя"
              value={newReview.name}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Место проживания"
              value={newReview.city}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, city: e.target.value }))
              }
            />
            <textarea
              placeholder="Напишите отзыв"
              value={newReview.text}
              onChange={(e) =>
                setNewReview((prev) => ({ ...prev, text: e.target.value }))
              }
            />
            <button type="submit" className="submit-btn">
              Оставить отзыв
            </button>
          </form>
        </div>
      )}

      <div className="review-list">
        {reviews.map((r, idx) => (
          <div className="review-card" key={idx}>
            <div className="header">
              <h4>{r.name}</h4>
              <span className="rating">
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </span>
            </div>
            <div className="meta">
              <span>{r.date}</span> • <span>{r.city}</span>

</div>
            <p className="text">{r.text}</p>
            {r.reply && (
              <div className="reply">
                <strong>Ответ магазина:</strong>
                <p>{r.reply}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;