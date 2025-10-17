import React from 'react'
import "./Brend.scss"
import bdek from "../../assets/image/bdek.png"

function Brend() {
  return (
    <div className='brendy'>
      <h3>Наши бренды</h3>

      <div className="brendsss">
        <div className="godjo">
          <img src={bdek} alt="" />
        </div>
        <div className="godjo">
          <img src="svg/hassion.svg" alt="" />
        </div>
        <div className="godjo">
          <img src="svg/versado.svg" alt="" />
        </div>
        <div className="godjo">
          <img src="svg/petek.svg" alt="" />
        </div>
        <div className="godjo">
          <img src="svg/cosset.svg" alt="" />
        </div>
        <div className="godjo">
          <img src="svg/barkli.svg" alt="" />
        </div>
      </div>




      <button>Все бренды</button>
    </div>
  )
}

export default Brend
