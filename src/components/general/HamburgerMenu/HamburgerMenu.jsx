import React, {useRef} from 'react'
import classes from "./hamburgerMenu.module.css"
import PopupMenu from "./PopupMenu"



const HamburgerMenu = ({isClicked, onClick}) => {

    return (
        <>
        <div className={isClicked && classes.popupContainer}>{isClicked && <PopupMenu/>}</div>
        <div onClick={onClick} className={!isClicked? classes.container : [classes.container, classes.clicked].join(" ")} >
            <div className={classes.bar1 }></div>
            <div className={classes.bar2 }></div>
            <div className={classes.bar3 }></div>
        </div>
        </>
    )
}

export default HamburgerMenu




