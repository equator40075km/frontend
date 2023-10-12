import React, { useEffect } from 'react'
import classes from './MainPage.module.css'

import ImageLink from '../../components/ImageLink/ImageLink'
import MainCarousel from '../../components/MainCarousel/MainCarousel';

import { useGlobal } from '../../store/global';
import { useArticles } from '../../store/articles';
import { pages } from '../../constants/constants';
import MainPageMerch from '../../components/MainPageMerch/MainPageMerch';

const MainPage = function () {
  const setCurrentPage = useGlobal(state => state.setCurrentPage)
  const setWhiteMenu = useGlobal(state => state.setWhiteMenu)
  const fetchArticles = useArticles(state => state.fetchArticles)

  useEffect(() => {
    setCurrentPage(pages.main)
    setWhiteMenu(true)
    fetchArticles()
  })

  return (
    <div className={classes.container}>
      <MainCarousel />

      <div className={classes.travels} id='scroll-about'>
        <div className={classes.trDescr}>
          <div className={classes.descrTitle}>
            Путешествуйте вместе с
          </div>
          <div className={classes.descrText}>
            Текст о том почему экватор такие классные и стоит выбирать именно их
          </div>
          <img src='static/logo-black.png' alt='' />
        </div>
        <div className={classes.trLinks}>
          <div className={classes.toursLink}>
            <ImageLink obj={{
                url: '/tours',
                title: 'Выберите тур',
                img: 'static/tours-link.jpeg',
                big: true
            }} />
          </div>
          <ImageLink obj={{
            external: true,
            url: 'https://t.me/equator_tickets_bot',
            title: 'Найдите выгодные былеты',
            img: 'static/tickets-link.jpeg',
            big: true
          }} />
          <ImageLink obj={{
            external: true,
            url: 'https://ostrovok.tp.st/4j2wgDAq',
            title: 'Забронируйте отель',
            img: 'static/hotels-link.jpeg',
            big: true
          }} />
        </div>
      </div>

      <MainPageMerch />
    </div>
  )
}

export default MainPage;
