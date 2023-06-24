import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MarkdownView from 'react-showdown'
import classes from './ArticleDetail.module.css'

import ImageLink from '../../components/ImageLink/ImageLink'

import { useArticles } from '../../store/articles'
import { useGlobal } from '../../store/global'

const ArticleDetail = function () {
  const setCurrentPage = useGlobal(state => state.setCurrentPage)
  
  const params = useParams()
  let article = useArticles(state => state.articles.filter(article => article.id === Number(params.id)))
  const notFound = article.length === 0
  article = notFound ? undefined : article[0]

  const interests = useArticles(state => state.articles.slice(0, 3))

  useEffect(() => {
    setCurrentPage(10)
  })

  return (
    <>
      {notFound
        ?
        <div>
          Не удалось найти статью
        </div>
        :
        <div className={classes.container}>

          <div className={classes.header}>
            <div className={classes.title}>
              {article.title}
            </div>
            <div className={classes.author}>
              <img
                src='https://sun9-32.userapi.com/s/v1/ig2/Qp9a7TK4hdjp7H1gosI3uqwdaZB1gaRN-s7QIJP-3orqSmWctI8ztalwcEDmYipeDVc2yEL7-GRafO3c8In_FTOS.jpg?size=100x100&quality=95&crop=0,140,1080,1080&ava=1'
                alt='equator'
                className={classes.avatar}
              />
              <p className={classes.name}>{article.author}</p>
              <p className={classes.date}>{article.date ? article.date : '01.01.1970'}</p>
            </div>
            <img src={article.img} alt='equator' className={classes.image}/>
          </div>

          <div className={classes.content}>
            <MarkdownView markdown={article.text} />
          </div>

          <div className={classes.interests}>
            <p className={classes.ititle}>Вам так же может быть интерено</p>
            {interests.map(article => (
              <ImageLink obj={article} key={article.id}/>
            ))}
          </div>

        </div>
      }
    </>
  )
}

export default ArticleDetail
