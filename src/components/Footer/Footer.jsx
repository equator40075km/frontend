import React from 'react'
import classes from './Footer.module.css'
import { useNavigate } from 'react-router-dom'

import Contact from './Contact'

const Footer = function () {
  const navigate = useNavigate()

  const toHome = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    navigate('/')
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <img src='/static/logo-white.png' alt='EQUATOR' onClick={toHome}/>
        <Contact contact={{
          image: '/static/vk-logo.png',
          text: 'Наша группа',
          url: 'https://vk.com/aequator'
        }}/>
        <Contact contact={{
          image: '/static/tg-logo.png',
          text: 'Бот с билетами',
          url: 'https://t.me/equator_tickets_bot'
        }}/>
      </div>
    </div>
  )
}

export default Footer;
