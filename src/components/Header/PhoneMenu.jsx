import React from 'react'
import classes from './PhoneMenu.module.css'
import pmclasses from './PhoneLinksMenu.module.css'
import profile_classes from './PhoneProfileMenu.module.css'
import menu_classes from './Menu.module.css'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants'

const testImg = '/static/user-icon.png'

function PhoneMenu() {
    const navigate = useNavigate()
    const [whiteMenu, setWhiteMenu] = useGlobal(state => [state.whiteMenu, state.setWhiteMenu])
    const currentPage = useGlobal(state => state.currentPage)

    const btnStyle = whiteMenu ? {} : {color: "black"}
    const burgerImg = whiteMenu ? '/static/burger.svg' : '/static/burger-black.svg'

    const token = localStorage.getItem('token')
    const bodys = document.getElementsByTagName('body')

    function onBurger() {
        const phoneLinksMenu = document.getElementById('phone-links-menu')
        phoneLinksMenu.classList.toggle(pmclasses.active)
        bodys[0].classList.toggle(pmclasses.block)
    }

    function onProfile() {
        const profileMenu = document.getElementById('profile-menu')
        const menu = document.getElementById('menu')

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

    function loginMobileBtn() {
        if (token) {
            return (
                <img
                    src={testImg}
                    alt=''
                    className={classes.avatar}
                    onClick={onProfile}
                />
            )
        } else {
            return (
                <button
                    className={classes.login}
                    style={btnStyle}
                    id='login'
                    onClick={() => {navigate('/login')}}
                >
                    Войти
                </button>
            )
        }
    }

    return (
        <div className={classes.container}>
            {loginMobileBtn()}
            <img src={burgerImg} alt='' onClick={onBurger} />
        </div>
    )
}

export default PhoneMenu
