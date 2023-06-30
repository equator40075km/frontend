import React from 'react'
import { useGlobal } from '../../store/global';

import classes from './Header.module.css';
import Menu from './Menu';
import Content from './Content';

const Header = function () {
  const currentPage = useGlobal(state => state.currentPage)

  const showBack = currentPage === 'main'
  const backImg = 'static/gorniy5.jpg'
  const backStyle = showBack && backImg
    ? { backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${backImg})` }
    : {}

  return (
    <div className={classes.header} style={backStyle}>
      <Menu currentPage={currentPage} showBack={showBack}/>
      {showBack
        ? <Content />
        : <></>
      }
    </div>
  )
}

export default Header;
