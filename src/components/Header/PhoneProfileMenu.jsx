import React from 'react'
import classes from './PhoneProfileMenu.module.css'
import ProfileMenu from './ProfileMenu'

function PhoneProfileMenu() {
  return (
    <div className={classes.container} id='profile-menu'>
        <ProfileMenu />
    </div>
  )
}

export default PhoneProfileMenu
