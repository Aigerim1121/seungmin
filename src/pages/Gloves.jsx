import React, { useEffect, useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/Gloves/Gloves";
import { addCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom"; 
import "./Bags.scss";

function Gloves() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const { list: products, loading, error } = useSelector((state) => state.bags);

  const [filterType, setFilterType] = useState(""); // "max" | "min" | ""

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  // 🔹 Фильтруем по цене
  const filteredProducts = products.filter((item) => {
    const price = Number(item.price);
    if (filterType === "max") return price >= 1000;
    if (filterType === "min") return price < 1000;
    return true; // если фильтр не выбран — показываем всё
  });

  return (
    <div className="bags-container">
      {/* Кнопки фильтра */}
      <div className="filter-buttons container">
        <button
          className={filterType === "min" ? "active" : ""}
          onClick={() => setFilterType("min")}
        >
          Минимальная цена (до 1000)
        </button>
        <button
          className={filterType === "max" ? "active" : ""}
          onClick={() => setFilterType("max")}
        >
          Максимальная цена (от 1000)
        </button>
        {filterType && (
          <button className="reset" onClick={() => setFilterType("")}>
            Сбросить фильтр
          </button>
        )}
      </div>

      {/* Карточки товаров */}
      <div className="product">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div className="poduct" key={item.id}>
              <div className="cardik">
                <div className="two-btn">
                  <button className="novinka">Новинка</button>
                  <button className="hit">ХИТ!</button>
                </div>

                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ cursor: "pointer" }}
                />

                <p>
                  Код: {item.id} <FaRegCircleCheck /> В наличии
                </p>
                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <div className="price-btn">
                  <h3>{item.price} р.</h3>
                  <button onClick={() => dispatch(addCart({ ...item, count: 1 }))}>
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

export default Gloves;
