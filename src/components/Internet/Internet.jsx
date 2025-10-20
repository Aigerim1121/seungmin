import React from 'react'
import "./Internet.scss"
import deku from "../../assets/image/deku.png"

function Internet() {
    return (
        <div className='internet container'>
            <div className="internet-tt">
                <h1><span>Rembini</span> — интернет-магазин кожгалантереи</h1>
                <p>Всем искушенным модникам и модницам интернет-магазин Rembini.by предлагает широкий ассортимент изделий <br /> и аксессуаров из натуральной кожи. В каталоге представлена элитная кожгалантерея для мужчин и женщин,<br /> которая отвечает самым высоким потребительским запросам. <br /><br />

                    Огромный выбор стильных ремней, мужских и женских сумок, модных кошельков, перчаток и других <br />эксклюзивных аксессуаров вызовет у вас восхищение! А демократичные цены на товар исключительного <br />качества непременно побудят совершить покупку.</p></div>

                <div className="intr-photo"><img src={deku} alt="" className='deku' /></div>
        </div>
    )
}

export default Internet
