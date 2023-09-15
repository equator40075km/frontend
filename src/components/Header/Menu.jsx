import React from 'react'
import classes from './Menu.module.css';
import { Link, useNavigate } from 'react-router-dom';

import { links, pages } from '../../constants/constants';

const Menu = function (props) {
  const navigate = useNavigate()

  const currentPage = props.currentPage
  const showBack = props.showBack
  const link_class = (showBack ? classes.linkWhite : classes.linkBlack) + ' ' + classes.link
  const login_class = (showBack ? classes.loginWhite : classes.loginBlack) + ' ' + classes.login

  const onLink = (e) => {
    const id = e.target.id

    if (id === 'login') {
      navigate('/login')
      return
    }

    if (id !== pages.main)
      navigate('/')

    setTimeout(() => {
      const scroll_by = document.getElementById('scroll-' + id)
      scroll_by.scrollIntoView({block: 'center', behavior: 'smooth'})
    }, 50)
  }

  return (
    <div className={classes.menu}>
      <Link to='/'>
        <img className={classes.logo}
             src={showBack ? '/static/logo-white.png' : '/static/logo-black.png'}
             alt='equator'/>
      </Link>
      <div className={classes.links}>
        <Link to={links[0].to}
              className={link_class}
              style={links[0].page === currentPage ? {fontWeight: 600} : {}}
              key={links[0].page}
        >
          {links[0].text}
        </Link>
        <Link to={links[1].to}
              className={link_class}
              style={links[1].page === currentPage ? {fontWeight: 600} : {}}
              key={links[1].page}
        >
          {links[1].text}
        </Link>
        <p className={link_class} id={links[2].page} onClick={onLink}>
          {links[2].text}
        </p>
        <p className={link_class} id={links[3].page} onClick={onLink}>
          {links[3].text}
        </p>
      </div>
      <button className={login_class} id='login' onClick={onLink}>
        Войти
      </button>
    </div>
  )
}

export default Menu;
