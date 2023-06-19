import React from 'react'
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = function (props) {
  const isMainPage = props.isMainPage
  const link_class = (isMainPage ? classes.linkWhite : classes.linkBlack) + ' ' + classes.link
  const login_class = (isMainPage ? classes.loginWhite : classes.loginBlack) + ' ' + classes.login

  return (
    <div className={classes.menu}>
      <Link to='/'>
        <img className={classes.logo}
             src={isMainPage ? '/static/logo-white.png' : '/static/logo-black.png'}
             alt='equator'/>
      </Link>
      <div className={classes.links}>
        <Link to='/articles' className={link_class}>Статьи</Link>
        <Link to='/tours' className={link_class}>Туры</Link>
        <Link to='/merch' className={link_class}>Мерч</Link>
        <Link to='/about' className={link_class}>О нас</Link>
      </div>
      <button className={login_class}>
        Войти
      </button>
    </div>
  )
}

export default Menu;
