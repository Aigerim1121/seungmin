import React from 'react'
import "./Footer.scss"
import { FaVk, FaYoutube, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import assist from "../../assets/image/assist.png"
import express from "../../assets/image/express.png"
import expresspay from "../../assets/image/expresspay.png"
import mastercard from "../../assets/image/mastercard.png"
import cruga from "../../assets/image/dva-cruga.png"
import visa from "../../assets/image/visa.png"
import raschet from "../../assets/image/raschet.png"
import pokupok from "../../assets/image/pokupok.png"
import cherepaha from "../../assets/image/cherepaha.png"
import smart from "../../assets/image/smart.png"
import halva from "../../assets/image/halva.png"
import magnit from "../../assets/image/magnit.png"
import certaaa from "../../assets/image/cartaaa.png"
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer1 '>
      <div className="carta">
        <img src="svg/cartaaa.svg" alt="" className='cartaaa' />
      </div>

      <div className="footer2 container" >
        <div className="belarus">
          <h2>Доставка товаров по всей Беларуси</h2>
          <p>Осуществляем доставку по Минску и всей Беларуси.</p>
          <img src={certaaa} alt="" />
        </div>
        <div className="contact-info">
          <div className="contacty">
            <h2>Контактная информация</h2>
            <div className="contacts">
              <div className="zvonok"><BsFillTelephoneFill className='itachi' /></div>
              <strong>+375 29 689 98 98</strong>
            </div>
            <div className="contacts">
              <div className="zvonok"><IoTimeOutline className='itachi' /></div>
              <h3>Пн. – Вс.: с 10:00 до 20:00</h3>
            </div>
            <div className="contacts">
              <div className="zvonok"><IoLocationOutline className='itachi' /></div>
              <h3>г. Минск, ул. Веры Хоружей 6б, пав. 4Б</h3>
            </div>
            <div className="contacts">
              <div className="zvonok"><MdOutlineEmail className='itachi' /></div>
              <h3>info@rembini.by</h3>
            </div>
          </div>
          <div className="about">
            <Link className="link"><h4>О магазине</h4></Link>
            <Link to="shipping/" className="link"><h4>Оплата и доставка</h4></Link>
            <Link className="link"><h4>Фотогалерея</h4></Link>
            <Link className="link"><h4>Сервис и помощь</h4></Link>
            <Link className="link"><h4>Отзывы</h4></Link> <br />
            <Link className="link"><h4>Контакты</h4></Link>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-block">
            <h4>Юридическая информация</h4>
            <p>
              Интернет-магазин зарегистрирован в Торговом реестре Республики
              Беларусь №394709 от 20.11.2015.
            </p>
            <p>ИП Всесвятский Иван Геннадьевич УНП №790957672 от 13.02.2015 выдано Могилёвским райисполкомом.</p>
            <p>
              Юр. адрес: 213134, Могилёвская обл., Могилёвский р-н, аг. Буйнич,
              пер. 2-ой Речной 18
            </p>

            <div className="social-icons">
              <FaVk />
              <FaInstagram />
              <FaYoutube />
              <FaTelegramPlane />
            </div>
          </div>

          <div className="footer-block">
            <h4>Способы оплаты</h4>
            <div className="payment-grid">
              <div className="payment-card"><img src={assist} alt="" /></div>
              <div className="payment-card"><img src={express} alt="" /></div>
              <div className="payment-card"><img src={expresspay} alt="" /></div>
              <div className="payment-card"><img src={mastercard} alt="" /></div>
              <div className="payment-card"><img src={cruga} alt="" /></div>
              <div className="payment-card"><img src={visa} alt="" /></div>
              <div className="payment-card"><img src={visa} alt="" /></div>
              <div className="payment-card"><img src={raschet} alt="" /></div>
            </div>
            <a href="#">Подробнее о способах оплаты</a>
          </div>

          <div className="footer-block">
            <h4>Карты рассрочки</h4>
            <div className="installment-grid">
              <div className="installment-card"><img src={pokupok} alt="" /></div>
              <div className="installment-card"><img src={cherepaha} alt="" /></div>
              <div className="installment-card"><img src={smart} alt="" /></div>
              <div className="installment-card"><img src={halva} alt="" /></div>
              <div className="installment-card"><img src={magnit} alt="" /></div>
            </div>
            <a href="#">Подробнее о картах рассрочки</a>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
