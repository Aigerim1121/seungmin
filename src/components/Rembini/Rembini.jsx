import React from 'react'
import naruto from "../../assets/image/naruto.png"
import saske from "../../assets/image/saske.png"
import sai from "../../assets/image/sai.png"
import sakura from "../../assets/image/sakura.png"
import "./Rembini.scss"

function Rembini() {
  return (
    <div className='rembini container'>
      <h1>Rembini в инстаграм</h1>
      <div className="rem-photos">
        <img src={naruto} alt="" className='naruto' />
        <img src={saske} alt="" className='naruto' />
        <img src={sai} alt="" className='naruto'  />
        <img src={sakura} alt="" className='naruto' />
      </div>
    </div>
  )
}

export default Rembini
