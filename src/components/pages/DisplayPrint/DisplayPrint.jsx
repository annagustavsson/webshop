import React from 'react'
import image from "../../../resources/images/ystad.png";
import classes from "../DisplayPrint/displayPrint.module.css";

import BwButton from "../../../components/general/Buttons/BwButton/BwButton";
import Quantitycounter from "../../general/Quantitycounter/Quantitycounter";

const DisplayPrint = () => {
    return (
        <div className={classes.displayContainer}>
            <div>
                <BwButton text={"-"}/>
                <div>1</div>
                <BwButton text={"+"}/>
            </div>
             <img src={image} alt="image" />
             <div className={classes.buttonContainer}>
                 <BwButton text={"Buy know"}/>
                 <BwButton text={"Add to chart"}/>
             </div>
        </div>
    )
}

export default DisplayPrint
