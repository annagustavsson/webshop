import React from 'react'
import hamburger from "../../../resources/icons/hamburgerMenu2.svg"
import classes from "./hamburgerMenu.module.css"

const HamburgerMenu = () => {
    return (
        <div className={classes.hamburgerContainer}>
        <img className={classes.menuIcon} src={hamburger} alt="Cart Logo" />
        </div>
    )
}

export default HamburgerMenu




