import React, { useEffect } from 'react'
import classes from './TourDetail.module.css'
import { useParams } from 'react-router-dom'
import { useGlobal } from '../../store/global'
import { tours, pages } from '../../constants/constants'
import Development from '../../components/Develepment/Development'

const TourDetail = function () {
    const params = useParams()
    let tour = tours.filter(tour => tour.name === params.name)
    tour = tour && tour.length ? tour[0] : undefined
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const setWhiteMenu = useGlobal(state => state.setWhiteMenu)

    useEffect(() => {
        setCurrentPage(pages.tourDetail)
        setWhiteMenu(true)
    })

    return (
        <>
        {tour
            ? 
            <div className={classes.container}>
                <h1>{tour.title}</h1>
                <hr/>
                <Development />
            </div>
            :
            <h1>Не удалось найти направление</h1>
        }
        </>
    )
}

export default TourDetail
