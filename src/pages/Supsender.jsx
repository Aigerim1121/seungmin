import React, { useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/supsenderApi/supsenderApi"; // твой fetch API
import { addCart } from "../redux/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Bags.scss";

function Supsender() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Берём товары из всех категорий
  const products = useSelector((state) => {
    const categories = [
      state.belts?.list || [],
      state.bags?.list || [],
      state.hats?.list || []
    ];
    return categories.flat();
  });

  // Для загрузки и ошибок можно взять общий флаг (если есть)
  const loading = useSelector((state) =>
    state.belts?.loading || state.bags?.loading || state.hats?.loading
  );
  const error = useSelector((state) =>
    state.belts?.error || state.bags?.error || state.hats?.error
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="product">
      {products.map((item) => (
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
      ))}
    </div>
  );
}

export default Supsender;
