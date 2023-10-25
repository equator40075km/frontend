import React, { useEffect } from 'react'
import classes from './Merch.module.css'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants'

function Merch() {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)

    useEffect(() => {
        setCurrentPage(pages.merch)
    })

    return (
        <div className={classes.container}>
            <div className={classes.progress}>
               <img src='/static/merch-progress.svg' alt='' />
            </div>
        </div>
    )
}

export default Merch