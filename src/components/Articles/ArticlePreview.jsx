import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './ArticlePreview.module.css'

const OneArticle = function (props) {
  const navigate = useNavigate()

  const navigateToArticle = () => {
    navigate(`/articles/${props.id}`)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }

  return (
    <div className={classes.container} onClick={navigateToArticle}>
        <img src={props.img} alt='' className={classes.image}/>
        <div className={classes.content}>
          <div className={classes.cat}>{props.cat}</div>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.preview}>{props.preview}</div>
        </div>
    </div>
  )
}

export default OneArticle
