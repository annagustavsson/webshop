import React from 'react'
import classes from "./hamburgerMenu.module.css";
import {useHistory} from "react-router-dom";

const PopupMenu = () => {
    let history = useHistory()
    return (
        <div>
            <div onClick={() => history.push("/portfolio")}className={[classes.popupInfo, classes.popupText].join(" ")}>Portfolio</div>
            <div className={[classes.popupInfo, classes.popupText].join(" ")}>Book | Contact</div> 
            <div onClick={() => history.push("/shop")} className={[classes.popupInfo, classes.popupText].join(" ")}>Shop prints</div>
            <div className={[classes.popupInfo, classes.popupText].join(" ")}>About</div>
        </div>
    )
}

export default PopupMenu
