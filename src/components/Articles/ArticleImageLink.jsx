import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ArticleImageLink.module.css'

const ArticleImageLink = function (props) {
    const style = {
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)), url(${props.article.img})`,
        fontSize: props.article.big ? `32px` : `24px`
    }

    const navigate = useNavigate()

    const navigateToArticle = () => {
        navigate(props.article.id.toString())
    }
    
    return (
        <div className={classes.container} style={style}>
            <p className={classes.title}>{props.article.title}</p>
            <div className={classes.btn} onClick={navigateToArticle} />
        </div>
    )
}

export default ArticleImageLink
