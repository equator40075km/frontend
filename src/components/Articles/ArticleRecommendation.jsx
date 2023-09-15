import React, { useEffect } from 'react'
import classes from './ArticleRecommendation.module.css'

import ImageLink from '../ImageLink/ImageLink'

import { useArticles } from '../../store/articles'

const ArticleRecommendation = function () {
    const articles = useArticles(state => state.articles)

    // TODO: запрос на получение статей определнной категории, взять 3 шт
    const fetchArticles = useArticles(state => state.fetchArticles)

    useEffect(() => {
        if ( articles.length === 0 ) {
            fetchArticles()
        }
    })

    const recommends = useArticles(state => state.articles.slice(0, 3))

    return (
        <div className={classes.interests}>
            <p className={classes.ititle}>Вам так же может быть интерено</p>
            {recommends.map(article => (
                <ImageLink obj={article} key={article.id}/>
            ))}
        </div>
    )
}

export default ArticleRecommendation
