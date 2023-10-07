import React from 'react'
import classes from './Menu.module.css';
import pmclasses from './PhoneLinksMenu.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { pages } from '../../constants/constants';
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
  const black = props.currentPage !== pages.main

  const phoneMenu = document.getElementById('phone-links-menu')
  const bodys = document.getElementsByTagName('body')

  const onBurger = () => {
    phoneMenu.classList.toggle(pmclasses.active)
    bodys[0].classList.toggle(pmclasses.block)
  }

  const onLogin = (e) => {
    if (e.target.id === 'login')
      navigate('/login')
  }

  return (
    <>
      <div className={classes.menu}>
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
          <button className={login_class} id='login' onClick={onLogin}>
            Войти
          </button>
        }
        <div className={classes.phoneMenu}>
          <button className={classes.phoneLogin} style={black ? {color: "black"} : {}} id='login' onClick={onLogin}>
            Войти
          </button>
          <img src={black ? '/static/burger-black.svg' : '/static/burger.svg'} alt='' onClick={onBurger} />
        </div>
      </div>
      <PhoneLinksMenu />
    </>
  )
}

export default Menu;
