import React from 'react'
import picture from "../../../resources/images/ystad.png";
import classes from "../DisplayPrint/displayPrint.module.css";

import BwButton from "../../../components/general/Buttons/BwButton/BwButton";

const DisplayPrint = () => {
    return (
        <div className={classes.displayContainer}>
            <div className={classes.imagesContainer}>
                <img src={picture} alt="image" />
                <div className={classes.smallImagesContainer}>
                    <img src={picture} alt="image" />
                    <img src={picture} alt="image" />
                </div>
            </div>
            <div className={classes.informationContainer}>
                <div className={classes.nameText}>Ystad</div>
                <div className={classes.priceText}>399 SEK</div>
                <div className={classes.infoText}>
                 some info some info some info 
                 </div>
                <div className={classes.sizeContainer}>
                    <div className={classes.sizeText}>size</div>
                    <div className={classes.sizeDropDownPlaceHolder}></div>
                </div>
                <div className={classes.quantityContainer}>
                    <BwButton text={"-"}/>
                        <div>1</div>
                    <BwButton text={"+"}/>
                </div>
                
                <div className={classes.informationButtonsContainer}>
                    <BwButton text={"Buy know"}/>
                    <BwButton text={"Add to chart"}/>
                </div>
                
            </div>
        </div>
    )
}

export default DisplayPrint
