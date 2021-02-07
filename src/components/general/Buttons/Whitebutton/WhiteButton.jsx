import React from 'react';
import classes from "../Whitebutton/whiteButton.module.css";

const WhiteButton = ({event,text, color}) => {
    return (
        <button onClick={event} className={classes.whiteButton}>
            {text}
        </button>
    )
}

export default WhiteButton;