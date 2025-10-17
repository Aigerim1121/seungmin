import React from "react";
import "./LoyaltyCard.scss";
import { BsShop } from "react-icons/bs";
import { RiScissorsCutFill } from "react-icons/ri";
import birbalya from "../../public/svg/birbalya.svg"
import { CiPercent } from "react-icons/ci";

function LoyaltyCard() {
  return (
    <div className="loyalty-page">
      <div className="container">
        <h1>Карта лояльности покупателя</h1>

        <div className="steps">
          <div className="step">
            <div className="iconka"><BsShop className="iiicon"/></div>
            <p>Совершите покупку в нашем магазине</p>
          </div>

          <div className="step">
            <div className="iconka"><RiScissorsCutFill className="iiicon" /> </div>
            <p>С первым заказом Вы получите персональную карту</p>
          </div>

          <div className="step">
            <div className="iconka"><img src={birbalya} alt="" className="iiicon"/></div>
            <p>
              При повторном заказе введите номер карты на сайте, либо сообщите
              менеджеру
            </p>
          </div>

          <div className="step">
            <div className="iconka"><CiPercent className="iiicon" /></div>
            <p>Получите скидку лояльного покупателя -10%</p>
          </div>
        </div>

        <div className="notes">
          <div className="note">
            Распространяется на все товары, кроме товаров на акции, со скидкой.
          </div>
          <div className="note">
            Картой могут воспользоваться знакомые и родственники.
          </div>
        </div>

        <div className="loyalty-info">
          <h2>Наша карта лояльности</h2>

          <div className="info-wrapper">
            <div className="text-block">
              <p>
                Повседневная практика показывает, что постоянное
                информационно-пропагандистское обеспечение нашей важности требует
                от нас анализа дальнейших направлений развития. Разнообразный и
                богатый опыт дальнейшего развития различных форм деятельности
                играет важную роль в формировании системы обучения кадров,
                соответствует насущным потребностям.
              </p>

              <p>
                С другой стороны укрепление и развитие структуры играет важную
                роль в формировании форм развития. Повседневная практика
                показывает, что постоянное информационно-пропагандистское
                обеспечение нашей важности требует от нас анализа дальнейших
                направлений развития.
              </p>
            </div>

            <div className="card-image"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoyaltyCard;