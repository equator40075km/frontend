import React from 'react'
import { useGlobal } from '../../store/global';
import { useParams } from 'react-router-dom';
import classes from './Header.module.css';
import Menu from './Menu';
import Content from './Content';

import { tours, pages } from '../../constants/constants';

const Header = function () {
  const currentPage = useGlobal(state => state.currentPage)
  const showBack = currentPage === 'main' || currentPage === 'tourDetail'
  const backImg = '/static/gorniy.jpg'
  const backStyle = showBack
    ? { backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${backImg})` }
    : {}

  const params = useParams()
  let tour = tours.filter(tour => tour.name === params.name)
  tour = tour && tour.length ? tour[0] : undefined

  return (
    <>
    { currentPage === pages.login
      ?
      <></>
      :
      <div className={classes.header} style={backStyle}>
        <Menu currentPage={currentPage} showBack={showBack}/>
        {showBack &&
          <Content tour={tour ? tour : tours[0]} main={currentPage === 'main'} />
        }
      </div>
    }
    </>
  )
}

export default Header;
