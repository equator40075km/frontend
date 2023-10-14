import React from 'react'
import classes from './Footer.module.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Contact from './Contact'
import { links, pages } from '../../constants/constants'
import { useGlobal } from '../../store/global';

const Footer = function () {
  const currentPage = useGlobal(state => state.currentPage)
  const navigate = useNavigate()

  const toHome = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    navigate('/')
  }

  function onLink(e) {
    const id = e.target.id

    switch (id) {
    case pages.merch:
    case pages.about:
        navigate('/')
        setTimeout(() => {
            const scroll_by = document.getElementById('scroll-' + id)
            scroll_by.scrollIntoView({behavior: 'smooth'})
        }, 50)
        return
    case pages.articles:
        navigate(links[0].to)
        break
    case pages.tours:
        navigate(links[1].to)
        break
    default:
        return
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }

  return (
    <>{ currentPage === pages.login
      ?
      <></>
      :
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <img src='/static/logo-white.svg' alt='EQUATOR' onClick={toHome}/>
            <p>© 2023 Equator • All Rights Reserved</p>
          </div>
          <div className={classes.links}>
            <p id={links[0].page} onClick={onLink}>
                {links[0].text}
            </p>
            <p id={links[1].page} onClick={onLink}>
                {links[1].text}
            </p>
            <p id={links[2].page} onClick={onLink}>
                {links[2].text}
            </p>
            <p id={links[3].page} onClick={onLink}>
                {links[3].text}
            </p>
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
    }</>
  )
}

export default Footer;
