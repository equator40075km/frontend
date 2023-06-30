import React from 'react'
import classes from './Footer.module.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Contact from './Contact'
import { links } from '../../constants/constants'

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
        <div className={classes.logo}>
          <img src='/static/logo-white.png' alt='EQUATOR' onClick={toHome}/>
          <p>© 2023 Equator • All Rights Reserved</p>
        </div>
        <div className={classes.links}>
          {links.filter((link => link.page !== 'tours')).map(link => (
            <Link to={link.page} className={classes.link} key={link.page}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className={classes.tours}>
          <Link to='tours' className={classes.link}>Туры</Link>
          <Link to='tours' className={classes.tourLink}>Горный Алтай</Link>
        </div>
        <div className={classes.contacts}>
          <Contact contact={{
            image: '/static/vk-logo.png',
            text: 'Наша группа',
            url: 'https://vk.com/aequator'
          }}/>
          <Contact contact={{
            image: '/static/tg-logo.png',
            text: 'Наш телеграм',
            url: 'https://t.me/equator_channel'
          }}/>
          <Contact contact={{
            image: '/static/tg-logo.png',
            text: 'Бот с билетами',
            url: 'https://t.me/equator_tickets_bot'
          }}/>
        </div>
      </div>
    </div>
  )
}

{/* <div className={classes.content}>
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
</div> */}

export default Footer;
