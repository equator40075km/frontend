import React from 'react'
import classes from './ProfileSettings.module.css'
import { useNavigate } from 'react-router-dom'
import ProfileSettingsForm from './ProfileSettingsForm'
import useUserID from '../../hooks/useUserID'
import useFetchProfile from '../../hooks/useFetchProfile'

const testImg = 'https://sun9-65.userapi.com/impg/EiOkSQFnFPpv8vSYYIAvkb7hi2Hlmd7DzkVuew/RYdjiEs_0iM.jpg?size=605x807&quality=95&sign=ef9ac8902558cb477dd7bfd8c63e345f&c_uniq_tag=xz2Gb08Llml-1cFkak-4yPQooN17VauWViGMq4Y--W0&type=album'

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