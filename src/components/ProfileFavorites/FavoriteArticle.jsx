import React, { useEffect, useState } from 'react'
import classes from './FavoriteArticle.module.css'
import useMatchMedia from 'use-match-media-hook'

function FavoriteArticle(props) {
    const [like, setLike] = useState(true)
    const [icon, setIcon] = useState('/static/like-active.png')
    const [mobile] = useMatchMedia(['(max-width: 768px)'])

    useEffect(() => {
        if (like)
            setIcon('/static/like-active.png')
        else
            setIcon('/static/like-default.png')

        // TODO: api
    }, [like])

    function onLike() {
        setLike(!like)
    }

    function onOver() {
        if (!like)
            setIcon('/static/like-hover.png')
    }

    function onOut() {
        if (!like)
            setIcon('/static/like-default.png')
    }

    return (
        <div className={classes.container}>
            {mobile && <img src={props.img} alt='' />}
            <div className={classes.info}>
                <div className={classes.cat}>
                    <p>{props.cat}</p>
                    <img src={icon} alt='' className={classes.icon}
                        onClick={onLike}
                        onMouseOver={onOver}
                        onMouseOut={onOut}
                    />
                </div>
                
                <p className={classes.title}>{props.title}</p>
                <p className={classes.preview}>{props.preview}</p>
            </div>
            {!mobile && <img src={props.img} alt='' />}
        </div>
    )
}

export default FavoriteArticle