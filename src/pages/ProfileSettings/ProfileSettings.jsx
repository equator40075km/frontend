import React, { useEffect } from 'react'
import classes from './ProfileSettings.module.css'
import { useNavigate } from 'react-router-dom'
import ProfileSettingsForm from './ProfileSettingsForm'
import { useGlobal } from '../../store/global'
import useMatchMedia from 'use-match-media-hook'
import { pages } from '../../constants/constants'

const testImg = '/static/user-icon.png'

function ProfileSettings() {
    const navigate = useNavigate()
    const setWhiteMenu = useGlobal(state => state.setWhiteMenu)
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const [mobile] = useMatchMedia(['(max-width: 768px)'])

    useEffect(() => {
        setCurrentPage(pages.profile)
        setWhiteMenu(false)
    }, [setWhiteMenu, setCurrentPage])

    function onBack() {
        navigate('/profile')
    }

    function onChangePhoto() {
        alert('Аватары в разработке :(\nПока полюбуйтесь нашей прекрасной подписчецей')
        // TODO:
    }

    return (
        <div className={classes.container}>
            {!mobile && <div className={classes.back} onClick={onBack}/>}
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