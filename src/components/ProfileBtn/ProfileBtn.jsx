import React from 'react'
import classes from './ProfileBtn.module.css'
import { useProfileChapter } from '../../store/profile'
import { profile_btns } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'
import LoginService from '../../API/LoginService'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants'

const ProfileBtn = function (props) {
    const setProfileChapter = useProfileChapter(state => state.setProfileChapter)
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const navigate = useNavigate()

    async function onClick() {
        switch (props.name) {
        case profile_btns.settings.name:
            navigate('settings')
            break
        case profile_btns.exit.name:
            await LoginService.logout()
            await setCurrentPage(pages.main)
            navigate('/')
            setProfileChapter(profile_btns.favorites.name)
            return
        default:
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
