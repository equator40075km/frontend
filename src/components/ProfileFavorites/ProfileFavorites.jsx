import React, { useEffect, useState } from 'react'
import classes from './ProfileFavorites.module.css'
import GreenBtn from '../GreenBtn/GreenBtn'
import { useNavigate } from 'react-router-dom'
import FavoriteArticle from './FavoriteArticle'
import ProfileService from '../../API/ProfileService'
import useUserID from '../../hooks/useUserID'

function ProfileFavorites() {
  const navigate = useNavigate()
  const userID = useUserID()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    async function fetchFavorites() {
      if (!userID)
        return

      const response = await ProfileService.getFavorites(userID)

      if (response && response.status === 200)
          setFavorites(response.data)
    }

    fetchFavorites()
  }, [setFavorites, userID])

  return (
    <>
      {favorites.length === 0
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
        {favorites.map(article => (
          <FavoriteArticle userID={userID} {...article} key={article.id}/>
        ))}
      </div>
      }
    </>
  )
}

export default ProfileFavorites