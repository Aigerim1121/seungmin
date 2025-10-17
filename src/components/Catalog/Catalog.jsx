import React from 'react'
import "./Catalog.css"

function Catalog() {
  return (
    <div className='catalog'>
      <div className="rectangle">
        <div className="remeni">
          <div className="remni-tt">
            <img src="svg/remen.svg" alt="" />
            <h1>Ремни</h1></div>
        </div>

        <div className="sumkaaa">
          <div className="bag-tt">
            <img src="svg/sumka.svg" alt="" />
            <h1>Сумки</h1>
          </div>

        </div>
        <div className="rectangle2">
          <div className="backpackk">
            <div className="ryuk-tt">
              <img className='nnn' src="svg/backpack.svg" alt="" />
              <h1>Рюкзаки</h1>
            </div>

          </div>
          <div className="wallett">
            <div className="waallet-tt">
              <img src="svg/wallet.svg" alt="" />
            <h1>Кашелки</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle3">
        <div className="rectangle4">
          <div className="podtyajjj">
            <div className="supsender-tt">
               <img src="svg/podtyaj.svg" alt="" />
            <h1>Подтяжки</h1>
            </div> 
          </div>
          <div className="perchotki">
            <div className="gloves-tt">
               <img src="svg/perchatki.svg" alt="" />
            <h1>Перчатки</h1>
            </div>
          </div>
        </div>
        <div className="rectangle5">
          <div className="umbrella">
            <div className="zont-tt">
              <img src="svg/zontik.svg" alt="" />
            <h1>Зонты</h1>
            </div>
          </div>
          <div className="galstukii">
            <div className="tie-tt">
              <img src="svg/galstuk.svg" alt="" />
            <h1>Галстуки</h1>
            </div>
          </div>
        </div>
        <div className="rectangle6">
          <div className="acssess">
            <div className="acss-tt">
              <img src="svg/saat.svg" alt="" />
            <h1>Аксессуары</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="rectangle7">
        <div className="braslest">
          <div className="brslet-tt">
            <img src="svg/braslet.svg" alt="" />
            <h1>Браслеты</h1>
          </div>
        </div>
        <div className="girl-rrr">
          <div className="jen2">
            <div className="jenskiy">
            <img src="svg/remen.svg" alt="" />
          <h1>Женские <br />
            ремни</h1>
          </div>
          </div>
        </div>
        <div className="girl-www">
          <div className="j-wallet">
            <img src="svg/g-wallet.svg" alt="" />
          <h1>Женские <br />
            кошельки</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
