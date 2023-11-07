import React from 'react'
import classes from './TourImage.module.css'
import { useNavigate } from 'react-router-dom'

const TourImage = function (props) {
    const navigate = useNavigate()

    const style = {
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(${props.tour.img})`
    }

    const toUrl = () => {
        navigate(`/tours/${props.tour.name}`)
    }

    return (
        <div className={classes.container} style={style}>
            <div className={classes.content}>
                <div className={classes.date}>
                    <p>{props.tour.dateinfo}</p>
                </div>

                <h1>{props.tour.title}</h1>

                <div className={classes.btnWrap}>
                    <button className={classes.btn} onClick={toUrl}>
                        Начать путешествие
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TourImage