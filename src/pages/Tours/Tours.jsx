import React, { useEffect } from 'react'
import classes from './Tours.module.css'
import { useGlobal } from '../../store/global'

import { tours } from '../../constants/constants'
import TourImage from '../../components/TourImage/TourImage'

const Tours = function () {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    useEffect(() => {
        setCurrentPage('tours')
    })

    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <h1>Куда с нами можно поехать?</h1>
                <p>
                    Сейчас мы путешествуем в только в одном направлении. 
                    Но мы растем с каждым днем и скоро откроем новые горизонты.
                </p>
            </div>
            <>
                {tours.map((tour) => (
                    <TourImage tour={tour} key={tour.name}/>
                ))}
            </>
            <div className={classes.formWrap}>
                <form className={classes.formContent}>
                    <p className={classes.ftitle}>Забронируйте поездку уже сейчас</p>
                    <select className={classes.ftour}>
                        {tours.map((tour) => (
                            <option key={tour.name}>{tour.name}</option>
                        ))}
                    </select>
                    <input className={classes.fname} placeholder='Ваше имя' />
                    <input className={classes.femail} placeholder='Ваша почта' />
                    <button className={classes.fbtn}>Забронировать</button>
                </form>
            </div>
        </div>
    )
}

export default Tours