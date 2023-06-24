import React from 'react'
import classes from './GreenBtn.module.css'

const GreenBtn = function ({children}) {
  return (
    <button className={classes.btn}>
        {children}
    </button>
  )
}

export default GreenBtn