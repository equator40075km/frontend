import React from 'react'
import classes from './BtnUp.module.css'

const scrollUp = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

const BtnUp = function () {
    return (
        <div 
            className={classes.container}
            onClick={scrollUp}
        >
            up
        </div>
    )
}

export default BtnUp
