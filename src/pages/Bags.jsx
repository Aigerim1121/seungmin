import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/bagsApi/bagsApi";
import { addCart } from "../redux/cart/cartSlice";
import "./Bags.scss";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";

function Bags() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.bags);

  const [filterType, setFilterType] = useState(""); // "max" | "min" | ""

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  // 🔹 Фильтруем по типу
  const filteredList = list.filter((item) => {
    const price = Number(item.price);
    if (filterType === "max") return price >= 4000;
    if (filterType === "min") return price < 4000;
    return true; // если ничего не выбрано — показывать всё
  });

  return (
    <div className="bags-container ">
      {/* Кнопки фильтра */}
      <div className="filter-buttons container">
        <button
          className={filterType === "min" ? "active" : ""}
          onClick={() => setFilterType("min")}
        >
          Минимальная цена (до 4000)
        </button>
        <button
          className={filterType === "max" ? "active" : ""}
          onClick={() => setFilterType("max")}
        >
          Максимальная цена (от 4000)
        </button>
        {filterType && (
          <button className="reset" onClick={() => setFilterType("")}>
            Сбросить фильтр
          </button>
        )}
      </div>

      {/* Карточки товаров */}
      <div className="product">
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <div className="poduct" key={item.id}>
              <div className="cardik">
                <div className="two-btn">
                  <button className="novinka">Новинка</button>
                  <button className="hit">ХИТ!</button>
                </div>

                <img src={item.image} alt={item.title} />
                <p>
                  Код: {item.id} <FaRegCircleCheck /> В наличии
                </p>
                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <div className="price-btn">
                  <h3>{item.price} р.</h3>
                  <button onClick={() => dispatch(addCart(item))}>
                    <MdOutlineShoppingCart /> В корзину
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Нет товаров по выбранному фильтру 😔</p>
        )}
      </div>
    </div>
  );
}

export default Bags;