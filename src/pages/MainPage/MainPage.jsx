import React, { useEffect } from 'react'
import classes from './MainPage.module.css'

import ImageLink from '../../components/ImageLink/ImageLink'
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import GreenBtn from '../../components/GreenBtn/GreenBtn';

import { useGlobal } from '../../store/global';
import { useArticles } from '../../store/articles'; 

const MainPage = function () {
  const setCurrentPage = useGlobal(state => state.setCurrentPage)
  const fetchArticles = useArticles(state => state.fetchArticles)

  useEffect(() => {
    setCurrentPage('main')
    fetchArticles()
  })

  return (
    <div className={classes.container}>
      <MainCarousel />

      <div className={classes.travels}>
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

      <div className={classes.merch}>
        <div className={classes.merchL}>
          <div className={classes.merchTitle}>Станьте частью сообщества</div>
          <div className={classes.merchText}>
            Какой то текст про то что мы сделали для вас свой мерч, что бы вы стали ближе к нам
          </div>
          <div className={classes.merchBtn}>
            <GreenBtn>Присоединиться</GreenBtn>
          </div>
        </div>
        
        <div className={classes.merchR}>
          <div className={classes.merchPhoto}>
            <img src='static/merch.jpg' alt='merch' />
          </div>
          <div className={classes.merchGreen} />
        </div>
      </div>
    </div>
  )
}

export default MainPage;
