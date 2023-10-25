import React from 'react'
import classes from './MenuLinks.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { links, pages } from '../../constants/constants';
import { useGlobal } from '../../store/global';
import useFetchProfile from '../../hooks/useFetchProfile'

function MenuLinks() {
    const navigate = useNavigate()
    const currentPage = useGlobal(state => state.currentPage)
    const whiteMenu = useGlobal(state => state.whiteMenu)
    const link_class = (whiteMenu ? classes.linkWhite : classes.linkBlack) + ' ' + classes.link
    
    useFetchProfile()

    const onLink = (e) => {
        const id = e.target.id
    
        if (id !== pages.main)
          navigate('/')
    
        setTimeout(() => {
          const scroll_by = document.getElementById('scroll-' + id)
          scroll_by.scrollIntoView({block: 'center', behavior: 'smooth'})
        }, 50)
    }

    return (
        <div className={classes.links}>
            <Link to={links[0].to}
                className={link_class}
                style={links[0].page === currentPage ? {fontWeight: 600} : {}}
                key={links[0].page}
            >
                {links[0].text}
            </Link>
            <Link to={links[1].to}
                className={link_class}
                style={links[1].page === currentPage ? {fontWeight: 600} : {}}
                key={links[1].page}
            >
                {links[1].text}
            </Link>
            <Link to={links[2].to}
                className={link_class}
                style={links[2].page === currentPage ? {fontWeight: 600} : {}}
                key={links[2].page}
            >
                {links[2].text}
            </Link>
            {/* <p className={link_class} id={links[2].page} onClick={onLink}>
            {links[2].text}
            </p> */}
            <p className={link_class} id={links[3].page} onClick={onLink}>
            {links[3].text}
            </p>
        </div>
    )
}

export default MenuLinks