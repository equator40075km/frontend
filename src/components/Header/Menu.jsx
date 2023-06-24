import React from 'react'
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = function (props) {
  const currentPage = props.currentPage
  const link_class = (!currentPage && undefined ? classes.linkWhite : classes.linkBlack) + ' ' + classes.link
  const login_class = (!currentPage && undefined ? classes.loginWhite : classes.loginBlack) + ' ' + classes.login

  const links = [
    { page: 1, to: '/articles', text: 'Статьи' },
    { page: 2, to: '/tours', text: 'Туры' },
    { page: 3, to: '/merch', text: 'Мерч' },
    { page: 4, to: '/about', text: 'О нас' },
  ]

  return (
    <div className={classes.menu}>
      <Link to='/'>
        <img className={classes.logo}
             src={!currentPage && undefined ? '/static/logo-white.png' : '/static/logo-black.png'}
             alt='equator'/>
      </Link>
      <div className={classes.links}>
        {links.map(link => (
          <Link to={link.to}
                className={link_class}
                style={link.page === currentPage ? {fontWeight: 600} : {}}
                key={link.page}
          >
            {link.text}
          </Link>
        ))}
      </div>
      <button className={login_class}>Войти</button>
    </div>
  )
}

export default Menu;
