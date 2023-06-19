import React from 'react'
import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import Articles from '../pages/Articles/Articles';
import ArticleDetail from '../pages/ArticleDetail/ArticleDetail'

const Router = function () {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/articles/:id' element={<ArticleDetail />}/>
    </Routes>
  )
}

export default Router;
