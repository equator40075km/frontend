import React from 'react'

import { useGlobal } from '../store/global';

const MainPage = function () {
  const setIsMainPage = useGlobal(state => state.setIsMainPage)
  setIsMainPage(true)

  return (
    <div>
      MainPage
    </div>
  )
}

export default MainPage;
