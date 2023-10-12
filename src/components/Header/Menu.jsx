import React from 'react'
import classes from './Menu.module.css';
import { useNavigate } from 'react-router-dom';
import useFetchProfile from '../../hooks/useFetchProfile';

import MenuLinks from './MenuLinks';
import PhoneLinksMenu from './PhoneLinksMenu';
import PhoneProfileMenu from './PhoneProfileMenu';
import PhoneMenu from './PhoneMenu';
import Logo from './Logo';
import { useGlobal } from '../../store/global';

const testImg = '/static/user-icon.png'

const Menu = function () {
  const navigate = useNavigate()
  const profile = useFetchProfile()

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
          onClick={() => navigate(`/profile/${profile.user.id}`)}
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
