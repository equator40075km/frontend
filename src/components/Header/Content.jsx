import React from 'react'
import classes from './Content.module.css';
import { useNavigate } from 'react-router-dom';

const Content = function (props) {
  const navigate = useNavigate()
  const centerStyle = props.main ? ' ' : ' ' + classes.center

  function onBtn(event) {
    event.preventDefault()
    if (props.main) {
      navigate('/tours')
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      })
    }
  }

  return (
    <div className={classes.content}>
        <div className={classes.curtour + centerStyle}>
            <div className={classes.dateWrap + centerStyle}>
              <div className={classes.date}>
                {props.tour.dateinfo}
              </div>
            </div>
            <div className={classes.nameWrap}>
              <div className={classes.name}>
                {props.tour.title}
              </div>
            </div>
            <div className={classes.btnWrap + centerStyle}>
              <button className={classes.btnStart} onClick={onBtn}>
                {props.main ? 'Начать путешествие' : 'Узнать подробнее'}
              </button>
            </div>
        </div>
    </div>
  )
}

export default Content;
