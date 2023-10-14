import React, { useEffect } from 'react'
import { useGlobal } from '../../store/global';
import { useParams } from 'react-router-dom';
import classes from './Header.module.css';
import Menu from './Menu';
import Content from './Content';

import { tours, pages } from '../../constants/constants';

const Header = function () {
  const currentPage = useGlobal(state => state.currentPage)
  const showBack = currentPage === 'main' || currentPage === 'tourDetail'
  const backImg = '/static/gorniy.jpg'

  const params = useParams()
  let tour = tours.filter(tour => tour.name === params.name)
  tour = tour && tour.length ? tour[0] : undefined

  useEffect(() => {
    const blurDivs = document.querySelectorAll(`.${classes.blurLoad}`)

    blurDivs.forEach(div => {
      const img = div.querySelector('img')

      function loaded() {
        div.classList.add(classes.loaded)
      }

      if (img.complete) {
        loaded()
      } else {
        img.addEventListener("load", loaded)
      }
    })
  })

  return (
    <>
    { currentPage === pages.login
      ?
      <></>
      :
      <div className={classes.header}>
        <Menu />
        {showBack &&
          <>
            <Content tour={tour ? tour : tours[0]} main={currentPage === 'main'} />
            <div className={classes.background}>
              <div className={classes.blurLoad} style={{backgroundImage: "url(/static/gorniy-small.jpg)"}}>
                <img
                  src={backImg}
                  alt='background'
                  className={classes.img}
                />
              </div>
              <div className={classes.gradient}/>
            </div>
          </>
        }
      </div>
    }
    </>
  )
}

export default Header;
