import React from 'react'
import { Route, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage/MainPage';
import Articles from '../pages/Articles/Articles';
import ArticleDetail from '../pages/ArticleDetail/ArticleDetail';
import Tours from '../pages/Tours/Tours';
import TourDetail from '../pages/TourDetail/TourDetail';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import ProfileSettings from '../pages/ProfileSettings/ProfileSettings';
import Merch from '../pages/Merch/Merch';

const Router = function () {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/articles' element={<Articles />} />
      <Route path='/articles/:id' element={<ArticleDetail />}/>
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:name' element={<TourDetail />}/>
      <Route path='/login' element={<Login type='sign_in'/>} />
      <Route path='/signup' element={<Login type='sign_up' />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/settings' element={<ProfileSettings />} />
      <Route path='/merch' element={<Merch />} />
    </Routes>
  )
}

export default Router;
