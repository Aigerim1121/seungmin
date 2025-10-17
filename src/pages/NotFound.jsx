import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss"; // подключаем стили

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <p>Страница, которую вы ищете, была перемещена, удалена, переименована или никогда не существовала.</p>
      <Link to="/">
        <button className="notfound-btn">Перейти на главную</button>
      </Link>
    </div>
  );
}

export default NotFound;
