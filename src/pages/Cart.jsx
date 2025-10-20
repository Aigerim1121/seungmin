import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, removeCart, clearCart } from "../redux/cart/cartSlice";
import "./Cart.scss";
import { alldelete } from "../redux/wish/wishSlice";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.list);

    const handleMinus = (item) => {
        if (item.count > 1) {
            dispatch(changeCount({ id: item.id, count: item.count - 1 }));
        }
    };

    const handlePlus = (item) => {
        dispatch(changeCount({ id: item.id, count: item.count + 1 }));
    };

    const handleRemove = (id) => {
        dispatch(removeCart(id));
    };

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.count,
        0
    );

    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        country: "Российская Федерация",
        city: "",
        region: "",
        address: "",
        delivery: "courier",
        payment: "",
        message: "",
        promo: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDelivery = (value) =>
        setFormData((prev) => ({ ...prev, delivery: value }));

    const handlePayment = (value) =>
        setFormData((prev) => ({ ...prev, payment: value }));

    const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("success"); // ✅ Всегда успешный заказ
};

    const handleReset = () => {
        setStatus(null);
        setFormData({
            name: "",
            phone: "",
            email: "",
            country: "Российская Федерация",
            city: "",
            region: "",
            address: "",
            delivery: "courier",
            payment: "",
            message: "",
            promo: "",
        });
    };

    // ✅ Очистка корзины только один раз при успешном заказе
    useEffect(() => {
        if (status === "success") {
            dispatch(clearCart());
        }
    }, [status, dispatch]);

    if (status === "error") {
        return (
            <div className="payment-status error">
                <div className="icon">✖</div>
                <h2>Заказ не оформлен</h2>
                <p>Произошла ошибка во время оплаты. Пожалуйста, повторите попытку.</p>
                <button onClick={handleReset}>Перейти на главную</button>
            </div>
        );
    }

    if (status === "success") {
        return (
            <div className="payment-status success">
                <div className="icon">✔</div>
                <h2>Заказ успешно оформлен</h2>
                <p>
                    В ближайшее время с Вами свяжется менеджер магазина для подтверждения
                    заказа.
                </p>
                <button onClick={handleReset}>Перейти на главную</button>
            </div>
        );
    }

    return (
        <div className="cart container">
            {cartItems.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                cartItems.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.title}
                            className="cart-item__img"
                        />
                        <div className="cart-item__info">
                            <p className="cart-item__title">{item.title}</p>
                            <span className="cart-item__price">{item.price} ₽</span>
                        </div>
                        <div className="cart-item__count">
                            <button onClick={() => handleMinus(item)}>−</button>
                            <span>{item.count}</span>
                            <button onClick={() => handlePlus(item)}>+</button>
                        </div>
                        <div className="cart-item__total">
                            <span className="label">Итого:</span>
                            <span className="value">{item.price * item.count} ₽</span>
                        </div>
                        <button
                            className="cart-item__remove"
                            onClick={() => handleRemove(item.id)}
                        >
                            ×
                        </button>
                    </div>
                ))
            )}

            <form className="checkout" onSubmit={handleSubmit}>
                <h3>Контактная информация</h3>

                <div className="checkout__section personal">
                    <div className="left">
                        <h4>Личные данные</h4>
                        <input
                            name="name"
                            placeholder="Ваше имя *"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="phone"
                            placeholder="Ваш телефон *"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="email"
                            placeholder="Ваш E-mail *"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="right">
                        <h4>Данные для доставки</h4>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option>Российская Федерация</option>
                            <option>Казахстан</option>
                            <option>Беларусь</option>
                            <option>Кыргызстан</option>
                            <option>Узбекистан</option>
                        </select>
                        <input
                            name="city"
                            placeholder="Город *"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="region"
                            placeholder="Регион *"
                            value={formData.region}
                            onChange={handleChange}
                            required
                        />
                        <input
                            name="address"
                            placeholder="Ваш адрес *"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h3>Способ получения</h3>
                <div className="options">
                    <label
                        className={formData.delivery === "pickup" ? "active" : ""}
                        onClick={() => handleDelivery("pickup")}
                    >
                        Самовывоз с примеркой <span>Можно забрать до 10 дней</span>
                    </label>
                    <label
                        className={formData.delivery === "courier" ? "active" : ""}
                        onClick={() => handleDelivery("courier")}
                    >
                        Доставка курьером <span>от 1 до 2 дней</span>
                    </label>
                    <label
                        className={formData.delivery === "pochta" ? "active" : ""}
                        onClick={() => handleDelivery("pochta")}
                    >
                        Доставка Белпочтой <span>от 5 до 14 дней</span>
                    </label>
                    <label
                        className={formData.delivery === "belarus" ? "active" : ""}
                        onClick={() => handleDelivery("belarus")}
                    >
                        Доставка в Беларусь <span>от 3 до 5 дней</span>
                    </label>
                </div>

                <h3>Способ оплаты</h3>
                <div className="options">
                    <label
                        className={formData.payment === "cash" ? "active" : ""}
                        onClick={() => handlePayment("cash")}
                    >
                        Оплата при получении
                    </label>
                    <label
                        className={formData.payment === "card" ? "active" : ""}
                        onClick={() => handlePayment("card")}
                    >
                        Оплата заказа на сайте
                    </label>
                </div>

                <h3>Комментарий к заказу</h3>
                <textarea
                    name="message"
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={handleChange}
                />

                <input
                    name="promo"
                    placeholder="Введите ваш промокод"
                    value={formData.promo}
                    onChange={handleChange}
                />

                <div className="checkout__footer">
                    {cartItems.length > 0 && (
                        <h3 className="cart-total">Общая сумма: {totalPrice} ₽</h3>
                    )}
                    <button type="submit">Оформить заказ</button>
                </div>
            </form>
        </div>
    );
}

export default Cart;
