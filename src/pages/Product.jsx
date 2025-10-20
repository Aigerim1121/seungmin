import React, { useState } from "react";
import "./Product.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/cart/cartSlice";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Находим товар среди всех категорий
  const product = useSelector((state) => {
    const categories = [
      state.belts?.list || [],
      state.bags?.list || [],
      state.hats?.list || []
    ];
    return categories.flat().find((item) => item.id === Number(id));
  });

  const [count, setCount] = useState(1);
  const [size, setSize] = useState("M");

  if (!product) return <p>Товар не найден</p>;

  return (
    <div className="product-details">
      <div className="left">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="right">
        <h2>{product.title}</h2>
        <div className="rating">
          <span>⭐ 4.8</span> <span>(150 Reviews)</span>{" "}
          <span className="stock">В наличии</span>
        </div>

        <h3>{product.price} р.</h3>
        <p>{product.description}</p>

        <div className="options">
          <div className="sizes">
            <span>Размер:</span>
            {["21", "32", "34", "38", "40"].map((s) => (
              <button
                key={s}
                className={size === s ? "active" : ""}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="quantity">
          <button onClick={() => setCount(Math.max(1, count - 1))}>-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <button
          className="buy-btn"
          onClick={() => {
            dispatch(addCart({ ...product, count }));
            navigate("/cart");
          }}
        >
          Купить
        </button>

        <div className="delivery">
          <div>
            <h4>🚚 Бесплатная доставка</h4>
            <p>Укажите свой почтовый индекс для доступности доставки</p>
          </div>
          <div>
            <h4>↩️ Возврат</h4>
            <p>Бесплатный возврат в течение 30 дней</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
