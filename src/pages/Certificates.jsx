import React from 'react'
import "./Certificates.scss"
import sert1 from "../assets/image/sert1.png"
import sert2 from "../assets/image/sert2.png"
import sert3 from "../assets/image/sert3.png"
import sert4 from "../assets/image/sert4.png"
import sert5 from "../assets/image/sert5.png"
import sert6 from "../assets/image/sert6.png"
import rembini from "../assets/image/rembini.png"
import { AiOutlineShoppingCart } from "react-icons/ai";
import rema from "../../public/svg/rembini.svg"
import { IoWalletOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { PiWaveform } from "react-icons/pi";

function Certificates() {
  return (
    <div className='certificates '>
      <div className="pod-certif container">
        <h1>Подарочные сертификаты</h1>
        <div className="hz-icons">
          <img src={sert1} alt="" className='takimichi' />
          <img src={sert2} alt="" className='mikey' />
          <img src={sert3} alt="" className='draken' />
          <img src={sert4} alt="" className='mitsuya' />
          <img src={sert5} alt="" className='badji' />
          <img src={sert6} alt="" className='kazutora' />
        </div>
      </div>

      <div className="sert-siniy">
        <div className="five-sert">
          <div className="sert1">
            <img src={rembini} alt="" />
            <h2>Подарочный сертификат №1</h2>
            <p>50 BYN</p>
            <button> <AiOutlineShoppingCart /> В корзину</button>
          </div>
          <div className="sert1">
            <img src={rembini} alt="" />
            <h2>Подарочный сертификат №1</h2>
            <p>50 BYN</p>
            <button> <AiOutlineShoppingCart /> В корзину</button>
          </div>
          <div className="sert1">
            <img src={rembini} alt="" />
            <h2>Подарочный сертификат №1</h2>
            <p>50 BYN</p>
            <button> <AiOutlineShoppingCart /> В корзину</button>
          </div>
          <div className="sert1">
            <img src={rembini} alt="" />
            <h2>Подарочный сертификат №1</h2>
            <p>50 BYN</p>
            <button> <AiOutlineShoppingCart /> В корзину</button>
          </div>
          <div className="sert1">
            <img src={rembini} alt="" />
            <h2>Подарочный сертификат №1</h2>
            <p>50 BYN</p>
            <button> <AiOutlineShoppingCart /> В корзину</button>
          </div>
        </div>
      </div>

      <div className="revengers container">
        <div className="mayby">
          <h2>Вы можете подарить сертификат</h2>
          <div className="tokito">
            <div className="nezuko"></div>
            <h3>Дорогим и близким людям</h3>
          </div>
          <div className="tokito">
            <div className="nezuko"></div>
            <h3>Лучшим друзьям</h3>
          </div>
          <div className="tokito">
            <div className="nezuko"></div>
            <h3>Коллегам и партнерам</h3>
          </div>
          <div className="tokito">
            <div className="nezuko"></div>
            <h3>Сотрудникам</h3>
          </div>
        </div>
        <div className="mudzan">
          <img src={rema} alt="" />
        </div>
      </div>


      <div className="wayyy container ">
        <h2>Способы оплаты подарочного сертификата </h2>
        <div className="ways">
          <div className="way">
            <div className="bay">
              <IoWalletOutline className='wall'/>
            <h4>Наличные деньги </h4>
            </div>
          </div>
          <div className="way">
            <div className="bay">
              <GoCreditCard className='cardoo'/>
            <h4>По карте или ЕРИП</h4>
            </div>
          </div>
          <div className="way">
            <div className="bay">
              <PiWaveform className='hz-zvuk'/>
            <h4>Безналичный расчёт</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificates
