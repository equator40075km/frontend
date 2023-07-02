import React from 'react'
import classes from './TourImage.module.css'

const TourImage = function (props) {
    const style = {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${props.tour.img})`
    }

    return (
        <div className={classes.container} style={style}>
            <div className={classes.content}>
                <div className={classes.date}>
                    <p>{props.tour.dateinfo}</p>
                </div>

                <h1>{props.tour.name}</h1>

                <div className={classes.btnWrap}>
                    <button className={classes.btn}>
                        Начать путешествие
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourImage