import React from 'react';
import classes from './imageContainer.module.css';

import RoundedButton from "../../../general/Buttons/RoundedButton/RoundedButton"
 //import PrimaryButton from "../../../general/Buttons/PrimaryButton/PrimaryButton"


const ImageContainer = ({ 
    id, 
    name,
    price,
    image,
    addToChartHandler
}) => {
    console.log(image, "image")
    return (
  
        <div className={classes.ImageContainer} >
            <img className={classes.img} src={image} alt="image" />
            {/* {id} */}
            {name}
            {price} SEK
            <RoundedButton 
            event = {() => addToChartHandler(id)}
            text="Add to chart"/> 
        </div>
    
        
       
    )
}

export default ImageContainer
