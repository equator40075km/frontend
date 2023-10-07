import React, { useEffect } from 'react'
import classes from './Articles.module.css'
import { useArticles } from '../../store/articles'
import { useGlobal } from '../../store/global'
import { pages } from '../../constants/constants'
import useMatchMedia from 'use-match-media-hook'

import ImageLink from '../../components/ImageLink/ImageLink'
import ArticlePreview from '../../components/Articles/ArticlePreview'
import Development from '../../components/Develepment/Development'
import MobileCarousel from '../../components/MobileCarousel/MobileCarousel'

const Articles = function () {
  const setCurrentPage = useGlobal(state => state.setCurrentPage)
  const articles = useArticles(state => state.articles)
  const fetchArticles = useArticles(state => state.fetchArticles)
  const [mobile] = useMatchMedia(['(max-width: 768px)'])

  useEffect(() => {
    setCurrentPage(pages.articles)
    fetchArticles()
  }, [setCurrentPage, fetchArticles])
  
  function mainBlock() {
    if (!mobile) {
      if (articles.length > 2)
        return (
          <div className={classes.bWrap}>
            <ImageLink obj={{...articles[0], big: true}} />
            <div className={classes.bRight}>
              <ImageLink obj={{...articles[1]}} />
              <ImageLink obj={{...articles[2]}} />
            </div>
          </div>
        )
    } else {
      return (
        <MobileCarousel />
      )
    }

    return (<Development />)
  }

  return (
    <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.best}>
            <p className={classes.bTitle}>Лучшее за неделю</p>
            {mainBlock()}
          </div>
          
          <div className={classes.articles}>
            {articles.map(article => (
              <ArticlePreview {...article} key={article.id}/>
            )) }
          </div>
        </div>
    </div>
  )
}

export default Articles;
