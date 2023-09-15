import React from 'react'
import classes from './IconBtn.module.css'

const IconBtn = function (props) {
    const onBtn = () => {
        console.log("onBtn")
    }

    return (
        <div className={classes.container} onClick={onBtn}>
            <img src={props.icon} alt=''/>
            <p>{props.text}</p>
        </div>
    )
}

export default IconBtn;
