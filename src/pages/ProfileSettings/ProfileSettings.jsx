import React from 'react'
import classes from './ProfileSettings.module.css'
import { useNavigate } from 'react-router-dom'
import ProfileSettingsForm from './ProfileSettingsForm'
import useUserID from '../../hooks/useUserID'
import useFetchProfile from '../../hooks/useFetchProfile'

const testImg = '/static/user-icon.png'

function ProfileSettings() {
    const userID = useUserID()
    const navigate = useNavigate()

    useFetchProfile()

    function onBack() {
        navigate(`/profile/${userID}`)
    }

    function onChangePhoto() {
        alert('Аватары в разработке :(\nПока полюбуйтесь нашей прекрасной подписчецей')
        // TODO:
    }

    return (
        <div className={classes.container}>
            <div className={classes.back} onClick={onBack}/>
            <div className={classes.photo}>
                <img src={testImg} alt='' />
                <button onClick={onChangePhoto}>
                    Изменить
                </button>
            </div>
            <ProfileSettingsForm />
        </div>
    )
}

export default ProfileSettings