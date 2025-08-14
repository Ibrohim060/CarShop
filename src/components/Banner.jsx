import React from 'react'
import e34 from '../assets/images/e34.png'

function Banner() {
  return (
    <div className='banner'>

      <div className="banner-left">
        <h1> Купите автомобиль <br /> дешевле на 60%* </h1>
        <p> Привезем автомобиль под ключ со всеми документами. <br /> Подбор автомобиля под любой запрос  БЕСПЛАТНО   </p>
        <button> Оставить заявку </button>
      </div>

      <img src={e34} className="e34" alt="" />

    </div>
  )
}

export default Banner
