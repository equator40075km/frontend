import React from 'react'
import classes from './ProfileFavorites.module.css'
import { useArticles } from '../../store/articles'
import GreenBtn from '../GreenBtn/GreenBtn'
import { useNavigate } from 'react-router-dom'
import FavoriteArticle from './FavoriteArticle'

function ProfileFavorites() {
  const navigate = useNavigate()
  const articles = useArticles(state => state.articles)

  return (
    <>
      {articles.length === 0
      ?
      <div className={classes.empty}>
        <h1>У вас пока нет избранных статей</h1>
        <p>Отмечайте значком ♡ статьи и они появятся здесь</p>
        <GreenBtn onClick={() => {navigate('/articles')}}>
          Найти статьи
        </GreenBtn>
      </div>
      :
      <div>
        {articles.map(article => (
          <FavoriteArticle {...article} key={article.id}/>
        ))}
      </div>
      }
    </>
  )
}

export default ProfileFavorites