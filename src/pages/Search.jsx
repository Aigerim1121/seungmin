import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/getApi/getApi";
import "./Search.scss"
import { FaRegCircleCheck } from "react-icons/fa6";
import { addCart } from "../redux/cart/cartSlice";
import { MdOutlineShoppingCart } from "react-icons/md";



function Search() {
    const dispatch = useDispatch();
    const { text } = useParams();
    const { list, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        if (list.length === 0) {
            dispatch(getProducts());
        }
    }, [dispatch, list.length]);

    const filtered = list.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
    );

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
        <div className="product">
            {filtered.length > 0 ? (
                filtered.map((item) => (
                    <div className="poduct">
                        <div key={item.id} className="cardik">
                            <img src={item.image || "no-image.png"} alt={item.title} />
                            <p>
                                Код: {item.id} <FaRegCircleCheck /> В наличии
                            </p>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="price-btn">
                                <h3>{item.price}</h3>
                                <button onClick={() => dispatch(addCart(item))}>
                                    <MdOutlineShoppingCart /> В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Ничего не найдено 😔</p>
            )}

        </div>
    );
}

export default Search;