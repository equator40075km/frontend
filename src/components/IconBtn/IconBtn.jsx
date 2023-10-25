import React from 'react'
import classes from './IconBtn.module.css'
import { toast } from 'react-toastify'

const IconBtn = function (props) {
    const onBtn = () => {
        toast.warn('К сожалению, данный функционал в разработке. Используйте аутентификацию по email.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }

    return (
        <div className={classes.container} onClick={onBtn}>
            <img src={props.icon} alt=''/>
            <p>{props.text}</p>
        </div>
    )
}

export default IconBtn;
