import React, { useState } from 'react'

import classes from './Content.module.css';

const Content = function () {
  const [tours, setTours] = useState(
    [
      {
        'name': 'Горы Дагестана',
        'dateinfo': '4-20 июня 2023 - 5 дней 4 ночи'
      },
      {
        'name': 'Зимний Байкал',
        'dateinfo': 'С февраля по март 2023'
      },
      {
        'name': 'Владивосток',
        'dateinfo': 'Август 2023'
      },
      {
        'name': 'Северная Осетия',
        'dateinfo': 'Июль 2023'
      },
    ]
  )
  const [ctour, setCtour] = useState(tours[0])

  return (
    <div className={classes.content}>
        <div className={classes.curtour}>
            <div className={classes.dateWrap}>
              <div className={classes.date}>
                4-20 июня 2023 - 5 дней 4 ночи
              </div>
            </div>
            <div className={classes.nameWrap}>
              <div className={classes.name}>
                Горы Дагестана
              </div>
            </div>
            <div className={classes.btnWrap}>
              <button className={classes.btnStart}>
                Начать путешествие
              </button>
            </div>
        </div>
        <div className={classes.otours}>
          {tours.slice(0, 4).map(tour =>
            <div className={tour['name'] === ctour['name'] ? classes.ctour : classes.otour} key={tour.name}>
              {tour['name']}
            </div>  
          )}
        </div>
    </div>
  )
}

export default Content;
