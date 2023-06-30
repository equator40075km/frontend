import React from 'react'
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';

import { links } from '../../constants/constants';

const Menu = function (props) {
  const currentPage = props.currentPage
  const showBack = props.showBack
  const link_class = (showBack ? classes.linkWhite : classes.linkBlack) + ' ' + classes.link
  const login_class = (showBack ? classes.loginWhite : classes.loginBlack) + ' ' + classes.login

  return (
    <div className={classes.menu}>
      <Link to='/'>
        <img className={classes.logo}
             src={showBack ? '/static/logo-white.png' : '/static/logo-black.png'}
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
