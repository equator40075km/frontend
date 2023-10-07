import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ImageLink.module.css'
import useMatchMedia from 'use-match-media-hook'

const ImageLink = function (props) {
    const navigate = useNavigate()
    const [medium] = useMatchMedia(['(max-width: 992px)'])
    const [bigFont, smallFont] = [
        medium ? '24px' : '32px',
        medium ? '18px' : '24px'
    ]

    const toUrl = () => {
        if ( props.obj.external ) {
            window.open(props.obj.url, "_blank")
            return
        }

        if ( props.obj.id )
            navigate(`/articles/${props.obj.id}`)
        else
            navigate(props.obj.url)
        
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }

    const back = {
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${props.obj.img})`,
    }
    
    const font = {
        fontSize: props.obj.big ? bigFont : smallFont
    }

    return (
        <div className={classes.wrapper}>
            <p className={classes.title} style={font}>{props.obj.title}</p>
            <div className={classes.btn} onClick={toUrl} />
            <div className={classes.back} style={back} />
        </div>
    )
}

export default ImageLink
