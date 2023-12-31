import React from 'react'
import Slider from 'react-slick';
import "./main-carousel.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import classes from './MainCarousel.module.css'

import ImageLink from '../ImageLink/ImageLink'
import GreenBtn from '../GreenBtn/GreenBtn';

import { useArticles } from '../../store/articles';
import { useNavigate } from 'react-router-dom';
import useMatchMedia from 'use-match-media-hook';

const MainCarousel = function () {
    const [medium, small] = useMatchMedia(['(max-width: 1200px)', '(max-width: 710px)'])
    const navigate = useNavigate()
    const bsetArticles = useArticles(state => state.articles.slice(0, 6))

    const settings = {
        dots: false,
        speed: 1000,
        slidesToShow: small ? 1 : (medium ? 2 : 3),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
        nextArrow: (<></>),
        prevArrow: (<></>),
    };

    function onBtn() {
        navigate('/articles/')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }

    const slider = React.useRef(null)

    return (
        <div className={classes.container}>
            <div className={classes.title}>Лучшие статьи по версии EQUATOR</div>
            <div className={classes.arrows}>
                <div className={classes.arrowPrev} onClick={() => slider?.current?.slickPrev()} />
                <div className={classes.arrowNext} onClick={() => slider?.current?.slickNext()} />
            </div>
            {/* <div className={classes.slick}> */}
            <div className="main-carousel">
                <Slider ref={slider} {...settings}>
                    {bsetArticles.map(article => (
                        <ImageLink obj={article} key={article.id} />
                    ))}
                </Slider>
            </div>
            <div className={classes.btn}>
                <GreenBtn onClick={onBtn}>
                    Посмотреть все
                </GreenBtn>
            </div>
        </div>
    )
}

export default MainCarousel;