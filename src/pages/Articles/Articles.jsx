import React, { useEffect } from 'react'
import classes from './Articles.module.css'

import ImageLink from '../../components/ImageLink/ImageLink'
import ArticlePreview from '../../components/Articles/ArticlePreview'

import { useArticles } from '../../store/articles'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants'

const Articles = function () {
  const setCurrentPage = useGlobal(state => state.setCurrentPage)
  const articles = useArticles(state => state.articles)
  const fetchArticles = useArticles(state => state.fetchArticles)

  useEffect(() => {
    setCurrentPage(pages.articles)
    fetchArticles()
  }, [setCurrentPage, fetchArticles])
  
  return (
    <div className={classes.container}>
        <div className={classes.content}>

          {articles.length > 2
          ?
          <div className={classes.bWrap}>
            <div className={classes.bTitle}>
                  Лучшее за неделю
            </div>
            <div className={classes.bLeft}>
              <ImageLink obj={{...articles[0], big: true}} />
            </div>
            <div className={classes.bRight}>
              <ImageLink obj={{...articles[1]}} />
              <ImageLink obj={{...articles[2]}} />
            </div>
          </div>
          :
          <></>
          }
          
          {articles.map(article => (
            <ArticlePreview article={article} key={article.id}/>
          )) }

        </div>
    </div>
  )
}

export default Articles;
