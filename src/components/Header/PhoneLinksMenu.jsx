import React from 'react'
import classes from './PhoneLinksMenu.module.css'
import { useNavigate } from 'react-router-dom';
import { links, pages } from '../../constants/constants';

import GreenBtn from '../../components/GreenBtn/GreenBtn'

function PhoneLinksMenu() {
    const navigate = useNavigate()
    const phoneMenu = document.getElementById('phone-links-menu')
    const bodys = document.getElementsByTagName('body')

    function onClose() {
        phoneMenu.classList.toggle(classes.active)
        bodys[0].classList.toggle(classes.block)
    }

    function onLink(e) {
        const id = e.target.id
    
        switch (id) {
        case pages.merch:
        case pages.about:
            onClose()
            navigate('/')
            setTimeout(() => {
                const scroll_by = document.getElementById('scroll-' + id)
                scroll_by.scrollIntoView({behavior: 'smooth'})
            }, 50)
            return
        case pages.articles:
            onClose()
            navigate(links[0].to)
            break
        case pages.tours:
            onClose()
            navigate(links[1].to)
            break
        case 'login':
            onClose()
            navigate('/login')
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

    return (
        <div className={classes.container} id='phone-links-menu'>
            <div className={classes.close}>
                <img src='/static/logo-black.png' width={"90%"} alt='equator' />
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
                <GreenBtn
                    id='login'
                    style={{width: "50%", justifySelf: "right"}}
                    onClick={onLink}
                >
                    Войти
                </GreenBtn>
                <div className={classes.contacts}>
                    <div className={classes.contact} onClick={onContact}>
                        <img id='vk' src='/static/burger-vk.svg' alt='vk' />
                        <p>Наша группа</p>
                    </div>
                    <div className={classes.contact}  onClick={onContact}>
                        <img id='tg' src='/static/burger-tg.svg' alt='tg' />
                        <p>Наша telegram</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneLinksMenu
