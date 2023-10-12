import React, { useEffect } from 'react'
import classes from './Tours.module.css'
import { useGlobal } from '../../store/global'

import { tours, pages } from '../../constants/constants'
import TourImage from '../../components/TourImage/TourImage'
import ArticleRecommendation from '../../components/Articles/ArticleRecommendation'

const Tours = function () {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const setWhiteMenu = useGlobal(state => state.setWhiteMenu)

    useEffect(() => {
        setCurrentPage(pages.tours)
        setWhiteMenu(false)
    })

    const onBookBtn = (e) => {
        e.preventDefault()

        // TODO: проверить поля на пустоту

        alert('С Вами свяжутся в ближайшее время! Собирайте рюкзак!')
    }

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
                    <select disabled className={classes.ftour}>
                        {tours.map((tour) => (
                            <option key={tour.name}>{tour.title}</option>
                        ))}
                    </select>
                    <input className={classes.fname} placeholder='Ваше имя' />
                    <input className={classes.femail} placeholder='Ваша почта' />
                    <button className={classes.fbtn} onClick={onBookBtn}>Забронировать</button>
                </form>
            </div>

            <div className={classes.recommeds}>
                <ArticleRecommendation />
            </div>

        </div>
    )
}

export default Tours