import React from 'react'
import classes from './Content.module.css';

import { tours } from '../../constants/constants';

const Content = function () {
  return (
    <div className={classes.content}>
        <div className={classes.curtour}>
            <div className={classes.dateWrap}>
              <div className={classes.date}>
                {tours[0].dateinfo}
              </div>
            </div>
            <div className={classes.nameWrap}>
              <div className={classes.name}>
                {tours[0].name}
              </div>
            </div>
            <div className={classes.btnWrap}>
              <button className={classes.btnStart}>
                Начать путешествие
              </button>
            </div>
        </div>
    </div>
  )
}

export default Content;
