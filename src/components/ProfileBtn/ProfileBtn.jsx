import React from 'react'
import classes from './ProfileBtn.module.css'
import profile_classes from '../Header/PhoneProfileMenu.module.css';
import menu_classes from '../Header/Menu.module.css'
import pmclasses from '../Header/PhoneLinksMenu.module.css'
import { useProfileChapter } from '../../store/profile'
import { profile_btns } from '../../constants/constants'
import { useNavigate } from 'react-router-dom'
import LoginService from '../../API/LoginService'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants'
import useMatchMedia from 'use-match-media-hook'

const ProfileBtn = function (props) {
    const {profileChapter, setProfileChapter} = useProfileChapter()
    const setCurrentPage = useGlobal(state => state.setCurrentPage)
    const currentPage = useGlobal(state => state.currentPage)
    const setWhiteMenu = useGlobal(state => state.setWhiteMenu)
    const navigate = useNavigate()
    const [mobile] = useMatchMedia(['(max-width: 768px)'])

    const menu = document.getElementById('menu')
    const bodys = document.getElementsByTagName('body')

    const btnClass = profileChapter === props.name
                        ? classes.container + ' ' + classes.hover
                        : classes.container;

    function onProfile() {
        const profileMenu = document.getElementById('profile-menu')

        if (menu.classList.contains(menu_classes.fixed)) {
            setWhiteMenu(
                currentPage === pages.main ||
                currentPage === pages.tourDetail
            )
        } else {
            setWhiteMenu(false)
        }

        bodys[0].classList.toggle(pmclasses.block)
        profileMenu.classList.toggle(profile_classes.active)
        menu.classList.toggle(menu_classes.fixed)
    }

    async function onClick() {
        switch (props.name) {
        case profile_btns.settings.name:
            navigate('/profile/settings')
            if (mobile)
                onProfile()
            break
        case profile_btns.exit.name:
            await LoginService.logout()
            await setCurrentPage(pages.main)
            navigate('/')
            setProfileChapter(profile_btns.favorites.name)
            if (mobile)
                onProfile()
            return
        default:
            if (mobile) {
                navigate('/profile')
                onProfile()
            }
        }

        setProfileChapter(props.name)
    }

    return (
        <div className={btnClass} onClick={onClick}>
            <img src={props.icon} alt='' />
            {props.text}
        </div>
    )
}

export default ProfileBtn;
