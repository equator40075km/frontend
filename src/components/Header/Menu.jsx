import React from 'react'
import classes from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import { useGlobal } from '../../store/global';

import MenuLinks from './MenuLinks';
import PhoneLinksMenu from './PhoneLinksMenu';
import PhoneProfileMenu from './PhoneProfileMenu';
import PhoneMenu from './PhoneMenu';
import Logo from './Logo';

const testImg = '/static/user-icon.png'

const Menu = function () {
  const navigate = useNavigate()
  const whiteMenu = useGlobal(state => state.whiteMenu)
  const login_class = (whiteMenu ? classes.loginWhite : classes.loginBlack) + ' ' + classes.login
  const token = localStorage.getItem('token')

  function loginBtn() {
    if (token) {
      return (
        <img
          src={testImg}
          alt=''
          className={classes.avatar}
          onClick={() => navigate('/profile')}
        />
      )
    } else {
      return (
        <button className={login_class} onClick={() => {navigate('/login')}}>
          Войти
        </button>
      )
    }
  }

  return (
    <>
      <div className={classes.menu} id='menu'>
        <Logo />
        <MenuLinks />
        {loginBtn()}
        <PhoneMenu />
      </div>
      <PhoneLinksMenu />
      <PhoneProfileMenu />
    </>
  )
}

export default Menu;
