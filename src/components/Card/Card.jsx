import React, { useEffect } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/getApi/getApi";
import { addCart } from "../../redux/cart/cartSlice";
import "./Card.scss";

function Card() {
  const dispatch = useDispatch();
  const { list: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className="product">
      {products.map((item) =>
      (<div className="poduct" key={item.id}>
        <div className="cardik"> <div className="two-btn">
          <button className="novinka">Новинка</button>
          <button className="hit">ХИТ!</button>
        </div> <img src={item.image} alt={item.title} />
          <p> Код: {item.id} <FaRegCircleCheck /> В наличии </p>
          <h4>{item.title}</h4> <p>{item.description}</p>
          <div className="price-btn"> <h3>{item.price} р.</h3>
            <button onClick={() => dispatch(addCart({ ...item, count: 1 }))}> <MdOutlineShoppingCart /> В корзину </button>
          </div>
        </div>
      </div>))}
    </div>
  );
}

export default Card;