import React, { useEffect } from 'react'
import classes from './Merch.module.css'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants'

function Merch() {
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const setWhiteMenu = useGlobal(state => state.setWhiteMenu)

    useEffect(() => {
        setWhiteMenu(false)
        setCurrentPage(pages.merch)
    })

    return (
        <div className={classes.container}>
            <div className={classes.progress}>
               МЕРЧ
            </div>
        </div>
    )
}

export default Merch