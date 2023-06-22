import React from 'react'
import classes from './Contact.module.css'

const Contact = function (props) {
  const redirection = () => {
    window.open(props.contact.url, "_blank")
  }

  return (
    <div className={classes.container} onClick={redirection}>
      <img src={props.contact.image} alt=''/>
      <p>{props.contact.text}</p>
    </div>
  )
}

export default Contact;
