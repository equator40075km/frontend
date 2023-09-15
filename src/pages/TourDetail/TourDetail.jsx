import React, { useEffect } from 'react'
import classes from './TourDetail.module.css'
import { useParams } from 'react-router-dom'
import { useGlobal } from '../../store/global'
import { tours, pages } from '../../constants/constants'

const TourDetail = function () {
    const params = useParams()
    let tour = tours.filter(tour => tour.name === params.name)
    tour = tour && tour.length ? tour[0] : undefined
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    useEffect(() => {
        setCurrentPage(pages.tourDetail)
    })

    return (
        <>
        {tour
            ? 
            <div>{tour.title}</div>
            :
            <div>Тур не найден</div>
        }
        </>
    )
}

export default TourDetail
