import React from 'react'
import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage';
import Articles from '../pages/Articles/Articles';
import ArticleDetail from '../pages/ArticleDetail/ArticleDetail'
import Tours from '../pages/Tours/Tours'
import Merch from '../pages/Merch/Merch'
import About from '../pages/About/About';

const Router = function () {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/articles/:id' element={<ArticleDetail />}/>
      <Route path='/tours' element={<Tours />} />
      <Route path='/merch' element={<Merch />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default Router;
