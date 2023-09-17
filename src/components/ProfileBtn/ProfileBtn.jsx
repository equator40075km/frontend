import React from 'react'
import classes from './ProfileBtn.module.css'
import { useProfileChapter } from '../../store/profile'
import { profile_btns } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'

const ProfileBtn = function (props) {
    const setProfileChapter = useProfileChapter(state => state.setProfileChapter)
    const navigate = useNavigate()

    function onClick() {
        if (props.name === profile_btns.settings.name) {
            navigate('settings')
            return
        }

        setProfileChapter(props.name)
    }

    return (
        <div className={classes.container} onClick={onClick} >
            <img src={props.icon} alt='' />
            {props.text}
        </div>
    )
}

export default ProfileBtn;
