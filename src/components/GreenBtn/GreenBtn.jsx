import React from 'react'
import classes from './GreenBtn.module.css'

const GreenBtn = function ({children, ...props}) {
  return (
    <button {...props} className={classes.btn}>
        {children}
    </button>
  )
}

export default GreenBtn