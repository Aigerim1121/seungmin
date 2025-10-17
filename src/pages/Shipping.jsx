import React, { useState } from 'react'
import "./Shipping.scss"
import kurrr from "../assets/image/kuryer.png"
import ege from "../assets/image/bir-ege.png"
import ruki from "../assets/image/ruki.png"
import dvacruga from "../assets/image/dva-cruga.png"
import visa from "../assets/image/visa.png"
import belcart from "../assets/image/belcart.png"
import raschet from "../assets/image/raschet.png"
import express from "../assets/image/express.png"
import pokupok from "../assets/image/pokupok.png"
import halva from "../assets/image/halva.png"
import smart from "../assets/image/smart.png"
import cherepaha from "../assets/image/cherepaha.png"
import magnit from "../assets/image/magnit.png"
import { FaLongArrowAltLeft } from "react-icons/fa";

function Shipping() {
    const [orderNumber, setOrderNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [status, setStatus] = useState("form");

    
  const handleSubmit = (e) => {
    e.preventDefault();
      if (orderNumber.trim() && amount > 0) {
      const success = Math.random() > 0.3; 
      setTimeout(() => setStatus(success ? "success" : "error"), 800);
    }
  };

   const handleReset = () => {
    setOrderNumber("");
    setAmount("");
    setStatus("form");
  };
    return (
        <div className="shipping container">
            <div className="dostavka ">
                <h1>Доставка заказа</h1>
                <div className="dostavka-photos">
                    <div className="photo1">
                        <img src={kurrr} alt="" className='dostavshik' />
                        <h2>Курьерская доставка по Минску
                            и за МКАД</h2>
                        <p>За полчаса до доставки курьер уведомит вас о своем приезде</p>
                        <div className="black-orange">
                            <h4>По Минску: <span>Бесплатно</span> <br />
                                МКАД: <span> 7 BYN</span></h4>

                            <h5> <span>Срок:</span> в день заказа</h5>
                        </div>
                    </div>
                    <div className="photo2">
                        <img src={ege} alt="" className='dostavshik' />
                        <h2>Курьерская доставка по Республики
                            Беларусь</h2>
                        <p>Отправления по всей территории РБ</p>
                        <div className="black-orange">
                            <h4>До отеделения: <span>Бесплатно</span> </h4>
                            <h5> <span>Срок:</span> от 1 до 3 дней <br />
                                ( рабочих дней )</h5>
                        </div>
                    </div>
                    <div className="photo3">
                        <img src={ruki} alt="" className='dostavshik' />
                        <h2>Самовывоз вашего заказа
                            из нашего магазина</h2>
                        <p>г. Минск, ул. В. Хоружей 6б, ТЦ Зеркало,
                            пав. 4Б</p>

                        <h4>Eжедневно с 10-00 до 20-00</h4>
                    </div>
                </div>
            </div>

            <div className="payment container">
                <h2>Способы оплаты заказа</h2>

                <div className="payment__blocks">
                    <div className="payment__card">
                        <h3>1. Наличный и безналичный оплате</h3>
                        <p>
                            Для оплаты заказа у нас доступны как наличный, так и безналичный
                            расчёт. Для безналичного расчёта используйте следующие платёжные системы:
                        </p>
                        <div className="payment__logos">
                            <img src={dvacruga} alt="" className='logolor' />
                            <img src={visa} alt="" className='logolor' />
                            <img src={belcart} alt="" className='logolor' />
                            <img src={raschet} alt="" className='logolor' />
                            <img src={express} alt="" className='logolor' />
                        </div>
                    </div>

                    <div className="payment__card">
                        <h3>2. Оплата вашего заказа картами рассрочки</h3>
                        <p>
                            Также имеется возможность оплатить покупку картами рассрочки.
                            Оплата картой рассрочки можно онлайн, либо прямо в нашем магазине.
                            Доступны следующие карты рассрочки:
                        </p>
                        <div className="payment__logos">
                            <img src={pokupok} alt="Карта 1" className='logolor' />
                            <img src={halva} alt="Карта 2" className='logolor' />
                            <img src={smart} alt="Карта 3" className='logolor' />
                            <img src={cherepaha} alt="Карта 4" className='logolor' />
                            <img src={magnit} alt="Карта 5" className='logolor' />
                        </div>
                    </div>
                </div>
            </div>



            <div className="payment-page">
                {status === "form" && (
                    <div className="payment-form">
                        <div className="payment-text">
                            <p>
                                Оплатить заказ картой по номеру заказа можно здесь — прямо сейчас!
                            </p>
                        </div>
                        <form className="form-box" onSubmit={handleSubmit}>
                            <label>Введите номер заказа и необходимую сумму</label>
                            <div className="inputs">
                                <input
                                    type="text"
                                    placeholder="Введите номер заказа"
                                    value={orderNumber}
                                    onChange={(e) => setOrderNumber(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Введите сумму"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Оплатить</button>
                        </form>
                    </div>
                )}

                {status === "error" && (
                    <div className="payment-status error">
                        <div className="icon">✖</div>
                        <h2>Не удалось оплатить заказ</h2>
                        <p>
                            Произошла ошибка во время оплаты. Пожалуйста, повторите попытку.
                        </p>
                        <button onClick={handleReset}>Перейти на главную</button>
                    </div>
                )}

                {status === "success" && (
                    <div className="payment-status success">
                        <div className="icon">✔</div>
                        <h2>Вы успешно оплатили заказ</h2>
                        <p>
                            В ближайшее время с Вами свяжется менеджер магазина для
                            подтверждения заказа.
                        </p>
                        <button onClick={handleReset}><FaLongArrowAltLeft />Назад</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shipping
