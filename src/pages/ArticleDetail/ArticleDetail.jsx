import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MarkdownView from 'react-showdown'
import classes from './ArticleDetail.module.css'

import ArticleRecommendation from '../../components/Articles/ArticleRecommendation'

import { useArticles } from '../../store/articles'
import { useGlobal } from '../../store/global'
import { pages, toast_options } from '../../constants/constants'
import GreenBtn from '../../components/GreenBtn/GreenBtn'
import ProfileService from '../../API/ProfileService'
import useUserID from '../../hooks/useUserID'
import { toast } from 'react-toastify'

const ArticleDetail = function () {
  const navigate = useNavigate()
  const userID = useUserID()
  const setCurrentPage = useGlobal(state => state.setCurrentPage)
  const setWhiteMenu = useGlobal(state => state.setWhiteMenu)
  
  const params = useParams()
  let article = useArticles(state => state.articles.filter(article => article.id === Number(params.id)))
  const notFound = article.length === 0
  article = notFound ? undefined : article[0]

  useEffect(() => {
    setCurrentPage(pages.articleDetail)
    setWhiteMenu(false)
  })

  async function toFavorites() {
    const response = await ProfileService.addToFavorites(userID, article.id)
    if (response.status > 399)
      toast.error('Ошибка сервера. Пожалуйста, сообщите о проблеме', toast_options)
    else
      toast.success(`Статья "${article.title}" добавлена в избранное!`, toast_options)
  }

  function favoriteBtn() {
    return (
      <GreenBtn
        style={{width: "200px"}}
        onClick={toFavorites}
      >
        {'в избранное'}
      </GreenBtn>
    )
  }

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
              <p>{article.title}</p>
              <div className={classes.author}>
                <img
                  src='https://sun9-32.userapi.com/s/v1/ig2/Qp9a7TK4hdjp7H1gosI3uqwdaZB1gaRN-s7QIJP-3orqSmWctI8ztalwcEDmYipeDVc2yEL7-GRafO3c8In_FTOS.jpg?size=100x100&quality=95&crop=0,140,1080,1080&ava=1'
                  alt='equator'
                  className={classes.avatar}
                  onClick={() => {navigate('/')}}
                />
                <p className={classes.name}>{article.author}</p>
                <p className={classes.date}>{article.date ? article.date : '01.01.1970'}</p>
              </div>
              {favoriteBtn()}
            </div>
            <img src={article.img} alt='equator' className={classes.image}/>
          </div>

          <div className={classes.content}>
            <MarkdownView markdown={article.text} />
          </div>

          <ArticleRecommendation padding />
          
        </div>
      }
    </>
  )
}

export default ArticleDetail
