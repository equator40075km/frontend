import React from 'react'
import classes from './Menu.module.css';
import pmclasses from './PhoneLinksMenu.module.css'
import { Link, useNavigate } from 'react-router-dom';

import useFetchProfile from '../../hooks/useFetchProfile';
import MenuLinks from './MenuLinks';
import PhoneLinksMenu from './PhoneLinksMenu';

const testImg = '/static/user-icon.png'

const Menu = function (props) {
  const navigate = useNavigate()
  const profile = useFetchProfile()

  const showBack = props.showBack
  const login_class = (showBack ? classes.loginWhite : classes.loginBlack) + ' ' + classes.login
  const token = localStorage.getItem('token')

  const onLink = (e) => {
    if (e.target.id === 'login')
      navigate('/login')
  }

  const onBurger = () => {
    const phoneMenu = document.getElementById('phone-links-menu')
    phoneMenu.classList.toggle(pmclasses.active)
  }

  return (
    <>
      <div className={classes.menu}>
        <div className={classes.burger} onClick={onBurger} />
        <Link to='/'>
          <img className={classes.logo}
              src={showBack ? '/static/logo-white.png' : '/static/logo-black.png'}
              alt='equator'/>
        </Link>
        <MenuLinks {...props} />
        {token
          ?
          <img
            src={testImg}
            alt=''
            className={classes.avatar}
            onClick={() => navigate(`/profile/${profile.user.id}`)}
          />
          :
          <button className={login_class} id='login' onClick={onLink}>
            Войти
          </button>
        }
        <div className={classes.burger}  />
      </div>
      <PhoneLinksMenu />
    </>
  )
}

export default Menu;
