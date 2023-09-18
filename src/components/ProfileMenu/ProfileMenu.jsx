import React from 'react'
import classes from './ProfileMenu.module.css'
import ProfileBtn from '../ProfileBtn/ProfileBtn'
import { profile_btns } from '../../constants/constants'
import useFetchProfile from '../../hooks/useFetchProfile'

const testImg = '/static/user-icon.png'

const ProfileMenu = function () {
    const profile = useFetchProfile()

    return (
        <div className={classes.container}>
            <div className={classes.avatar}>
                <img src={testImg} alt='' />
                <p className={classes.username}>{profile.user.first_name} {profile.user.last_name}</p>
                <p className={classes.city}>{profile.city}</p>
            </div>

            <div className={classes.menu}>
                <ProfileBtn {...profile_btns.favorites} />
                <ProfileBtn {...profile_btns.trips} />
                <ProfileBtn {...profile_btns.paid_articles} />
                <hr/>
                <ProfileBtn {...profile_btns.settings} />
                <ProfileBtn {...profile_btns.exit} />
            </div>
        </div>
    )
}

export default ProfileMenu;
