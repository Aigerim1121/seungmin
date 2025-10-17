import React from "react";
import "./AboutStore.scss";
import { FiGift, FiStar, FiCheckCircle, FiSmile, FiPercent, FiBriefcase, FiAward, FiTrendingUp, FiUsers, FiShoppingBag, } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";

const advantages = [
  { icon: <FiAward />, text: "Более 20 лет опыта с изделиями из натуральной кожи" },
  { icon: <FiTrendingUp />, text: "На рынке retail и e-commerce с 2015 г." },
  { icon: <FiBriefcase />, text: "Профессионалы в подборе мужских аксессуаров" },
  { icon: <FiStar />, text: "Разбираемся в качестве натуральной кожи" },
  { icon: <FiGift />, text: "Решение для подарка мужчине на ДР, НГ, 14 и 23 февраля" },
  { icon: <FiShoppingBag />, text: "30+ проверенных брендов" },
  { icon: <FiCheckCircle />, text: "Удовлетворяем запросы покупателей" },
  { icon: <FiUsers />, text: "Квалифицированная команда специалистов" },
  { icon: <FiPercent />, text: "У нас выгодные предложения" },
  { icon: <FiSmile />, text: "Большое количество довольных клиентов" },
];

const AboutStore = () => {
  return (
    <section className="advantages-section">
      <h2 className="advantages-title">Преимущества нашей компании</h2>

      <div className="advantages-grid">
        {advantages.map((item, index) => (
          <div className="adv-card" key={index}>
            <div className="icon">{item.icon}</div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="about-company">
        <div className="about-text">
          <h3>
            <span>Rembini</span> — мы лучшие на рынке
          </h3>
          <p>
            Интернет-магазин Rembini.by был основан в 2015 году. Работая долгое время в сфере
            кожгалантерейной продукции, мы видим, что всё больше покупок совершается онлайн.
          </p>
          <p>
            За время работы мы выбрали лучшие направления — мужские аксессуары и подарки.
            Теперь вы можете быстро подобрать качественный подарок из кожи для своих близких.
          </p>
        </div>

        <div className="about-box">
          <p className="about-heading">Вы можете с лёгкостью совершать покупки:</p>
          <button className="site-btn">
            <HiOutlineShoppingCart /> Онлайн на нашем сайте
          </button>
          <div className="address">
            <p>Либо в нашем магазине по адресу:</p>
            <span>г. Минск, ул. В. Хоружей 6Б, ТЦ Зеркало, пав. 46</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStore;
