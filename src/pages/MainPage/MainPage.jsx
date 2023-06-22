import React from 'react'
import classes from './MainPage.module.css'

import { useGlobal } from '../../store/global';

const MainPage = function () {
  const setIsMainPage = useGlobal(state => state.setIsMainPage)
  setIsMainPage(false)

  return (
    <div className={classes.container}>
      <div className={classes.best}>
        Лента с отобранным контентом
      </div>
    </div>
  )
}

export default MainPage;
