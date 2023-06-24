import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ArticlePreview.module.css'

const OneArticle = function (props) {
  const navigate = useNavigate()

  const navigateToArticle = () => {
    navigate(`/articles/${props.article.id}`)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }

  return (
    <div className={classes.container} onClick={navigateToArticle}>
        <img src={props.article.img} alt='' className={classes.image}/>
        <div className={classes.content}>
          <div className={classes.cat}>{props.article.cat}</div>
          <div className={classes.title}>{props.article.title}</div>
          <div className={classes.preview}>{props.article.preview}</div>
        </div>
    </div>
  )
}

export default OneArticle
