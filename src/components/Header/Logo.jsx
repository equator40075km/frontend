import React from 'react'
import classes from './Logo.module.css'
import pmclasses from './PhoneLinksMenu.module.css'
import profile_classes from './PhoneProfileMenu.module.css'
import menu_classes from './Menu.module.css'
import { useGlobal } from '../../store/global'
import { useNavigate } from 'react-router-dom'
import { pages } from '../../constants/constants'

function Logo() {
    const navigate = useNavigate()
    const [whiteMenu, setWhiteMenu] = useGlobal(state => [state.whiteMenu, state.setWhiteMenu])
    const currentPage = useGlobal(state => state.currentPage)

    const bodys = document.getElementsByTagName('body')
    const menu = document.getElementById('menu')

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

    function onLogo() {
        navigate('/')

        const profileMenu = document.getElementById('profile-menu')
        if (profileMenu.classList.contains(profile_classes.active))
            onProfile()
    }

    return (
        <img className={classes.logo}
            src={whiteMenu ? '/static/logo-white.svg' : '/static/logo-black.svg'}
            alt='equator'
            onClick={onLogo}
        />
    )
}

export default Logo