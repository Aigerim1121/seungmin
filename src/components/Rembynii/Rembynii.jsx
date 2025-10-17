import React from 'react'
import "./Rembyni.scss"
import suguru from "../../assets/image/suguru.png"
import toji from "../../assets/image/toji.png"
import bokugo from "../../assets/image/bokugo.png"
import { Link } from 'react-router-dom'

function Rembynii() {
  return (
    <div className='rembyni container'>
        <Link to="articles/"> <h2>Последние статьи Rembini</h2></Link>
      <div className="rembini__cards">
        <div className="rembini__card">
          <img src={suguru} alt="article" />
          <div className="rembini__text">
            <h3>Наименование новости</h3>
            <p>Короткое описание в несколько строк данной новости или статьи</p>
          </div>
        </div>

        <div className="rembini__card">
          <img src={toji} alt="article" />
          <div className="rembini__text">
            <h3>Наименование новости</h3>
            <p>Короткое описание в несколько строк данной новости или статьи</p>
          </div>
        </div>

        <div className="rembini__card">
          <img src={bokugo} alt="article" />
          <div className="rembini__text">
            <h3>Наименование новости</h3>
            <p>Короткое описание в несколько строк данной новости или статьи</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rembynii
