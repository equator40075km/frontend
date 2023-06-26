import React from 'react'
import Slider from 'react-slick';
import "./main-carousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import classes from './MainCarousel.module.css'

import ImageLink from '../ImageLink/ImageLink'
import GreenBtn from '../GreenBtn/GreenBtn';

import { useArticles } from '../../store/articles';

const MainCarousel = function () {
    const bsetArticles = useArticles(state => state.articles.slice(0, 6))

    const settings = {
        dots: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: (<></>),
        prevArrow: (<></>),
    };

    const slider = React.useRef(null)

    return (
        <div className={classes.container}>
            <div className={classes.title}>Лучшие статьи по версии EQUATOR</div>
            <div className={classes.arrows}>
                <div className={classes.arrowPrev} onClick={() => slider?.current?.slickPrev()} />
                <div className={classes.arrowNext} onClick={() => slider?.current?.slickNext()} />
            </div>
            <div className={classes.slider}>
                <Slider ref={slider} {...settings}>
                    {bsetArticles.map(article => (
                        <ImageLink obj={article} key={article.id} className={classes.slide} />
                    ))}
                </Slider>
            </div>
            <div className={classes.btn}>
                <GreenBtn>
                    Посмотреть все
                </GreenBtn>
            </div>
        </div>
    )
}

export default MainCarousel;