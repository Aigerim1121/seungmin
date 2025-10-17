import React from 'react'
import "./BG.scss"
import { Link } from 'react-router-dom'

function BG() {
    return (
        <div className='bg'>
                <div className="magazin">
                <h1>Наш магазин
                    в Минске</h1>
                <button>Подробнее</button>
            </div>
            <div className="magazin2">
                <h1>Доставка и оплата товара</h1>
               <Link to="/shipping" > <button>Условия</button></Link>
            </div>
            <div className="magazin3">
                <h1>Товары со <br /> скидкой</h1>
                <button>Показать</button>
            </div>
        </div>
    )
}

export default BG
