import React from 'react';
import classes from "../RoundedButton/roundedButton.module.css"



const RoundedButton = ({event,text}) => {
    return (
        <button onClick={event} className={classes.roundedButton}>
            {text}
        </button>
    )
}

export default RoundedButton;
