import React from 'react'
import { useGlobal } from '../../store/global';

import classes from './Header.module.css';
import Menu from './Menu';
import Content from './Content';

const Header = function () {
  const isMainPage = useGlobal(state => state.isMainPage)

  const backImg = 'https://sun9-15.userapi.com/impg/L-LP12g2R8-kWJcpyq45sRT7Jif5QQrvHjVBnw/lZO3hXgLh2w.jpg?size=828x989&quality=95&sign=25c4a73cbe8a73fb2d5a67fffd977aa3&type=album'
  const backStyle = isMainPage
    ? { backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.2), rgba(255,255,255,0)), url(${backImg})` }
    : {}

  return (
    <div className={classes.header} style={backStyle}>
      <Menu isMainPage={isMainPage}/>
      {isMainPage
        ? <Content />
        : <></>
      }
    </div>
  )
}

export default Header;
