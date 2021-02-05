import React from 'react';
import {useHistory} from "react-router-dom";
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

    let history = useHistory()

    return (
  
        <div className={classes.ImageContainer} >
            <img onClick={() => history.push("/viewprint")} src={image} alt="image" />
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
