import React, { useEffect, useState } from 'react'
import classes from './FavoriteArticle.module.css'
import useMatchMedia from 'use-match-media-hook'
import { useNavigate } from 'react-router-dom'
import GreenBtn from '../GreenBtn/GreenBtn'
import ProfileService from '../../API/ProfileService'
import { toast } from 'react-toastify'
import { toast_options } from '../../constants/constants'

function FavoriteArticle(props) {
    const navigate = useNavigate()
    const [like, setLike] = useState(true)
    const [icon, setIcon] = useState('/static/like-active.png')
    const [mobile] = useMatchMedia(['(max-width: 768px)'])

    useEffect(() => {
        if (like)
            setIcon('/static/like-active.png')
        else
            setIcon('/static/like-default.png')
    }, [like])

    async function onLike() {
        if (like) {
            const response = await ProfileService.removeFromFavorites(props.userID, props.id)
            if (response.status > 399) {
                toast.error('Ошибка сервера. Пожалуйста, сообщите нам о проблеме', toast_options)
                return
            }
        } else {
            const response = await ProfileService.addToFavorites(props.userID, props.id)
            if (response.status > 399) {
                toast.error('Ошибка сервера. Пожалуйста, сообщите нам о проблеме', toast_options)
                return
            }
        }

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
                <GreenBtn
                    style={{padding: "8px 10px", height: "40px"}}
                    onClick={() => {navigate(`/articles/${props.id}`)}}
                >
                    Открыть
                </GreenBtn>
            </div>
            {!mobile && <img src={props.img} alt='' />}
        </div>
    )
}

export default FavoriteArticle