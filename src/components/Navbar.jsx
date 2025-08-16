import React from 'react'
import bmw from '../assets/images/BMW.png'
import ww from '../assets/images/ww.svg'
import mers from '../assets/images/Merc.png'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
    return (
        <nav>


            <div className="left">
                <img src={bmw} className='ww' alt="w" />
                <img src={ww} className='ww2' alt="s" />
                <img src={mers} className='ww' alt="e" />
            </div>
            <ul>
                <li>
                    <a href="#"> О нас</a>
                </li>
                <li>
                    <a href="#">Услуги</a>
                </li>
                <li>
                    <a href="#"> Как купить</a>
                </li>
                <li>
                    <a href="#"> Преимущества</a>
                </li>
                <li>
                    <a href="#"> Отзывы</a>
                </li>
                <li>
                    <a href="#">Контакты</a>
                </li>
            </ul>
            <div className="right">
                <FaTelegram className='icon' />
                <FaInstagram className='icon' />
                <FaYoutube className='icon' />
                <div className="tel">
                    <h1>+ 998 99 859 00 37</h1>
                    <h1>+ 998 99 859 00 38</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
