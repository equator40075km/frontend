import React, { useEffect } from 'react'
import classes from './ArticleRecommendation.module.css'

import ImageLink from '../ImageLink/ImageLink'

import { useArticles } from '../../store/articles'
import useMatchMedia from 'use-match-media-hook'

const ArticleRecommendation = function (props) {
    const [medium, small] = useMatchMedia(['(max-width: 1200px)', '(max-width: 768px)'])
    const count = small ? 1 : (medium ? 2 : 3)
    const articles = useArticles(state => state.articles)

    // TODO: padding в зависимости от useMatchMedia
    const padding = props.padding ? {padding: "0 10%"} : {}

    // TODO: запрос на получение статей определнной категории, взять 3 шт
    const fetchArticles = useArticles(state => state.fetchArticles)

    useEffect(() => {
        if ( articles.length === 0 ) {
            fetchArticles()
        }
    })

    const recommends = useArticles(state => state.articles.slice(0, count))

    return (
        <div className={classes.interests} style={padding}>
            <p className={classes.ititle}>Вам так же может быть интерено</p>
            {recommends.map(article => (
                <ImageLink obj={article} key={article.id}/>
            ))}
        </div>
    )
}

export default ArticleRecommendation
