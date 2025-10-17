import React from "react";
import { FaGift, FaTruck, FaCheckCircle, FaWallet, FaBoxOpen } from "react-icons/fa";
import { MdCategory, MdInventory, MdOutlineCreate } from "react-icons/md";
import "./Block.scss";

function WhyRembini() {
  const items = [
    { icon: <FaGift />, title: "Карта – 10% в подарок", desc: "Дарим накопительную после первой покупки" },
    { icon: <FaTruck />, title: "Бесплатная доставка", desc: "Доставка заказов по Минску и РБ бесплатно" },
    { icon: <MdCategory />, title: "Широкий ассортимент", desc: "Более 3000 моделей в наличии" },
    { icon: <FaCheckCircle />, title: "Проверенное качество", desc: "Только натуральная кожа и долговечность" },
    { icon: <FaWallet />, title: "Рассрочка по карте", desc: "Халва, Карта покупок, Карта FUN, Черепаха, Магнит, Смарт карта, МТБанк, Белгазпромбанк" },
    { icon: <MdInventory />, title: "Наличие товаров", desc: "Удобное расположение в центре Минска" },
    { icon: <MdOutlineCreate />, title: "Гравировка изделий", desc: "Бесплатная персональная гравировка" },
    { icon: <FaBoxOpen />, title: "Подарочные упаковки", desc: "Красивое оформление подарков" },
  ];

  return (
    <div className="whyrembini">
      <h2>Почему выгодно покупать в Rembini ?</h2>
      <div className="grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="discount">
        <p>На каждый второй товар в заказе</p>
        <span>Скидка 30%</span>
      </div>
    </div>
  );
}

export default WhyRembini;