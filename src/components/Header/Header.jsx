import React, { useState } from 'react'
import "./Header.css"
import { FaTruck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


function Header() {
  const { list: cartlist } = useSelector((state) => state.cart)

  const [text, setText] = useState("")

  const navigate = useNavigate()

  function goSearch(e) {
    if (e.keyCode == 13) {
      navigate(`search/${text}`)
    }
  }

  return (
    <div>
      <div className="header1">
        <div className="huinya">
          <div className="texty">
            <Link to="shipping/"><h5>Оплата и доставка</h5></Link>
            <Link to="aboutstore/"><h5>О магазине</h5></Link>
            <Link to="contact/"><h5>Контакты</h5></Link>
            <Link to="brends/"><h5>Бренды</h5></Link>
            <Link to="certificates/"><h5>Сертификаты</h5></Link>
            <Link to="articles/"><h5>Статьи</h5></Link>
            <Link to="reviews/"><h5>Отзывы</h5></Link>
            <Link to="loyaltycard/"><h5>Карта лояльности</h5></Link>
            <Link to="guarantee/"><h5>Гарантии</h5></Link>
          </div>


          <div className="pickmi">
            <div className="nomer">
              <FaPhoneAlt />
              <h3>+996 700 53 65 97
                <p>Пн-Пт c 9:00 до 13:00</p>
              </h3>
            </div>
            <div className="insta">
              <a href="https://www.instagram.com"><img src="svg/instagram.svg" alt="" /></a>
            </div>
            <div className="voiti">
              <IoPersonCircleOutline />
              <Link to="registr/"><h5>Войти</h5></Link>
            </div>
          </div>
        </div>


      </div>


      <header className='header'>
        <Link to="/"> <img src="svg/aaa.svg" alt="" /></Link>

        <div className="input">
          <input onKeyDown={goSearch} value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder='Поиск на сайте' />
          <button> <img src="svg/search.svg" alt="" /></button>
        </div>
        <div className="truck">
          <div className="gruzovik">
            <FaTruck className='cart' />
          </div>
          <p>
            <strong> Бесплатная доставка</strong> <br />
            Осуществляем доставку <br />
            по Минску и Беларуси <br />
          </p>
        </div>
        <div className="adres">
          <div className="gruzovik">
            <FaLocationDot className='cart' />
          </div>
          <p>
            <strong>Наш адрес</strong> <br />
            г. Минск, ул. В. Хоружей 6б, <br />
            ТЦ Зеркало, пав. 4Б.
          </p>
        </div>
        <Link to="cart/"><div className="korzina">
          <button> <HiShoppingCart className='cart' /></button>
          <p>
            <strong>Корзина</strong> <br />
          </p>
        </div></Link>

        <div className="icons">
          <Link to=""> <span>{cartlist.length}</span></Link>
        </div>
      </header>

      <hr />

      <div className="header3">
        <Link to="belt/"><div className="remen">
          <img src="svg/remen.svg" alt="" />
          Ремни
        </div></Link>
        <div className="line"></div>
        <Link to="bags/"><div className="sumki">
          <img src="svg/sumka.svg" alt="" />
          Сумки
        </div></Link>
        <div className="line"></div>
        <Link to="wallet/"><div className="wallet">
          <img src="svg/wallet.svg" alt="" />
          Кошельки
        </div>
        </Link>
        <div className="line"></div>
        <Link to="umbrella/"><div className="zontik">
          <img src="svg/zontik.svg" alt="" />
          Зонты
        </div>
        </Link>
        <div className="line"></div>
        <Link to="supsender/"> <div className="podtyaj">
          <img src="svg/podtyaj.svg" alt="" />
          Подтяжки
        </div>
        </Link>

        <div className="line"></div>
        <Link to="backpack/"><div className="backpack">
          <img src="svg/backpack.svg" alt="" />
          Рюкзаки
        </div>
        </Link>
        <div className="line"></div>
        <Link to="accessories/"> <div className="aksessuars">
          <img src="svg/saat.svg" alt="" />
          Аксессуары
        </div>
        </Link>
        <div className="line"></div>
        <Link to="gloves/">
          <div className="perchatki">
            <img src="svg/perchatki.svg" alt="" />
            Перчатки
          </div>
        </Link>
        <div className="line"></div>
        <Link to="tie/">
          <div className="galstuki">
            <img src="svg/galstuk.svg" alt="" />
            Галстуки
          </div>
        </Link>

        <div className="line"></div>
        <div className="braslety">
          <img src="svg/braslet.svg" alt="" />
          Браслеты
        </div>
        <div className="line"></div>
        <div className="g-belt">
          <img src="svg/remen.svg" alt="" />
          Жен. ремни
        </div>
        <div className="line"></div>
        <div className="g-wallet">
          <img src="svg/g-wallet.svg" alt="" />
          Жен. кошельки
        </div>
        <div className="line"></div>
      </div>
    </div>


  )
}

export default Header
