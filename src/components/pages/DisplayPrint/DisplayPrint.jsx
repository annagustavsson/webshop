import React from 'react'
import image from "../../../resources/images/ystad.png";
import classes from "../DisplayPrint/displayPrint.module.css"

import BwButton from "../../../components/general/Buttons/BwButton/BwButton"

const DisplayPrint = () => {
    return (
        <div className={classes.displayContainer}>
             <img src={image} alt="image" />
             <div className={classes.buttonContainer}>
                 <BwButton text={"Buy know"}/>
                 <BwButton text={"Add to chart"}/>
             </div>
        </div>
    )
}

export default DisplayPrint
