import React from 'react'
import key from '../assets/images/key.png'
import e34 from '../assets/images/e34.png'
import image from '../assets/images/Image.png'

function Delivery() {
  return (
    <div className='delivery'>Delivery
        <h1>Поможем вам выгодно купить и привезти <br /> автомобиль в любую точку России</h1>
        <p>Предлагаем Вам купить автомобиль дешевле и лучше, но за тот же бюджет</p>
        <button>Оставить заявку</button>
        <div className="container">
            <div className="card">
                <h1>С пробегом</h1>
                <p>Предлагаем купить автомобиль <br /> дешевле до 60%, от рыночной цены <br /> на Авито и Авто.ру</p>
                <img className='key' src={key} alt="" />

            </div>
            <div className="card">
                <h1>Новые</h1>
                <p>Предлагаем купить автомобиль <br /> дешевле до 60%, от рыночной цены <br /> на Авито и Авто.ру</p>
                <img className='bmw34' src={e34} alt="" />

            </div>
            <div className="card">
                <h1>Под ваш бюджет</h1>
                <p>Предлагаем купить автомобиль <br /> дешевле до 60%, от рыночной цены <br /> на Авито и Авто.ру</p>
                <img className='image' src={image} alt="" />

            </div>
            
        </div>
    </div>
  )
}

export default Delivery