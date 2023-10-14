import React from 'react'
import classes from './PhoneLinksMenu.module.css'
import { useNavigate } from 'react-router-dom';
import { links, pages } from '../../constants/constants';
import useFetchProfile from '../../hooks/useFetchProfile';

import GreenBtn from '../../components/GreenBtn/GreenBtn'

function PhoneLinksMenu() {
    const navigate = useNavigate()
    const bodys = document.getElementsByTagName('body')
    const token = localStorage.getItem('token')
    const profile = useFetchProfile()

    function onClose() {
        const phoneMenu = document.getElementById('phone-links-menu')
        phoneMenu.classList.toggle(classes.active)
        bodys[0].classList.toggle(classes.block)
    }

    function onLink(e) {
        const id = e.target.id
        onClose()

        switch (id) {
        case pages.merch:
        case pages.about:
            navigate('/')
            setTimeout(() => {
                const scroll_by = document.getElementById('scroll-' + id)
                scroll_by.scrollIntoView({behavior: 'smooth'})
            }, 50)
            return
        case pages.articles:
            navigate(links[0].to)
            break
        case pages.tours:
            navigate(links[1].to)
            break
        case 'login':
            navigate('/login')
            break
        case 'home':
            navigate('/')
            break
        case 'user-icon':
            navigate(`/profile/${profile.user.id}`)
            break
        default:
            return
        }
    }

    function onContact(e) {
        const id = e.target.id

        console.log("onContact:", e)

        switch (id) {
        case 'vk':
            window.open("https://vk.com/aequator", "_blank")
            break
        case 'tg':
            window.open("https://t.me/equator_channel", "_blank")
            break
        default:
            return
        }
    }

    function loginBlock() {
        if (token) {
            return (
                <img
                    src='/static/user-icon.png'
                    alt='icon'
                    className={classes.userIcon}
                    id='user-icon'
                    onClick={onLink}
                />
            )
        } else {
            return (
                <GreenBtn
                    id='login'
                    style={{width: "50%", justifySelf: "right"}}
                    onClick={onLink}
                >
                    Войти
                </GreenBtn>
            )
        }
    }

    return (
        <div className={classes.container} id='phone-links-menu'>
            <div className={classes.close}>
                <img src='/static/logo-black.svg' width={"90%"} alt='equator' id='home' onClick={onLink} />
                <img src='/static/burger-close.svg' alt='close' onClick={onClose} />
            </div>

            <div className={classes.wrapper}>
                <div className={classes.links}>
                    <p id={links[0].page} onClick={onLink}>
                        {links[0].text}
                    </p>
                    <p id={links[1].page} onClick={onLink}>
                        {links[1].text}
                    </p>
                    <p id={links[2].page} onClick={onLink}>
                        {links[2].text}
                    </p>
                    <p id={links[3].page} onClick={onLink}>
                        {links[3].text}
                    </p>
                </div>
                {loginBlock()}
                <div className={classes.contacts}>
                    <div className={classes.contact} onClick={onContact}>
                        <img id='vk' src='/static/burger-vk.svg' alt='vk' />
                        <p>Наша группа</p>
                    </div>
                    <div className={classes.contact}  onClick={onContact}>
                        <img id='tg' src='/static/burger-tg.svg' alt='tg' />
                        <p>Наш telegram</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneLinksMenu
