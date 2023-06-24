import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ImageLink.module.css'

const ImageLink = function (props) {
    const navigate = useNavigate()

    const toUrl = () => {
        if ( props.obj.external ) {
            window.open(props.obj.url, "_blank")
            return
        }

        // TODO: хук для navigate
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

    const style = {
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${props.obj.img})`,
        fontSize: props.obj.big ? `32px` : `24px`
    }
    
    const parentStyle = props.style ? props.style : ''

    return (
        <div className={classes.container + ' ' + parentStyle} style={style}>
            <p className={classes.title}>{props.obj.title}</p>
            <div className={classes.btn} onClick={toUrl} />
        </div>
    )
}

export default ImageLink
