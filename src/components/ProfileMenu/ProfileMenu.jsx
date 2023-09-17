import React from 'react'
import classes from './ProfileMenu.module.css'
import ProfileBtn from '../ProfileBtn/ProfileBtn'
import { profile_btns } from '../../constants/constants'
import useFetchProfile from '../../hooks/useFetchProfile'

const testImg = 'https://sun9-65.userapi.com/impg/EiOkSQFnFPpv8vSYYIAvkb7hi2Hlmd7DzkVuew/RYdjiEs_0iM.jpg?size=605x807&quality=95&sign=ef9ac8902558cb477dd7bfd8c63e345f&c_uniq_tag=xz2Gb08Llml-1cFkak-4yPQooN17VauWViGMq4Y--W0&type=album'

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
