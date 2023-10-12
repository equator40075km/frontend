import React from 'react'
import classes from './MobileCarousel.module.css'
import "./mobile-carousel.css"
import Slider from 'react-slick';
import { useArticles } from '../../store/articles';

import ImageLink from '../ImageLink/ImageLink';

function MobileCarousel() {
    const articles = useArticles(state => state.articles.slice(0, 3))

    const settings = {
        infinite: false,
        dots: false,
        speed: 1000,
        slidesToShow: 1.1,
        swipeToSlide: true,
        nextArrow: (<></>),
        prevArrow: (<></>),
    }

    return (
        <div className={classes.wrapper}>
            <Slider {...settings}>
                {articles.map(article => (
                    <ImageLink obj={article} key={article.id} />
                ))}
            </Slider>
        </div>
    )
}

export default MobileCarousel
