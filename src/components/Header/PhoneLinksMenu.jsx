import React from 'react'
import classes from './PhoneLinksMenu.module.css'
import { useNavigate } from 'react-router-dom';
import { links, pages } from '../../constants/constants';

function PhoneLinksMenu() {
    const navigate = useNavigate()
    const phoneMenu = document.getElementById('phone-links-menu')

    function onClose() {
        phoneMenu.classList.toggle(classes.active)
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
        default:
            return
        }
    }

    return (
        <div className={classes.container} id='phone-links-menu'>
            <div className={classes.wrapper}>
                <div className={classes.close} onClick={onClose}>

                </div>
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
        </div>
    )
}

export default PhoneLinksMenu
