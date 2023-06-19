import React, { useEffect } from 'react'
import classes from './Articles.module.css'

import ArticleImageLink from '../../components/Articles/ArticleImageLink'
import ArticlePreview from '../../components/Articles/ArticlePreview'

import { useArticles } from '../../store/articles'
import { useGlobal } from '../../store/global'

const Articles = function () {
  const setIsMainPage = useGlobal(state => state.setIsMainPage)
  const articles = useArticles(state => state.articles)
  const fetchArticles = useArticles(state => state.fetchArticles)

  useEffect(() => {
    setIsMainPage(false)
    fetchArticles()
  }, [])

  
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
              <ArticleImageLink article={{...articles[0], big: true}} />
            </div>
            <div className={classes.bRight}>
              <ArticleImageLink article={{...articles[1], big: false}} />
              <ArticleImageLink article={{...articles[2], big: false}} />
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
