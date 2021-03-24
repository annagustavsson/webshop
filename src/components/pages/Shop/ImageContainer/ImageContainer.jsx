import React from 'react';
import {useHistory} from "react-router-dom";
import classes from './imageContainer.module.css';

import RoundedButton from "../../../general/Buttons/RoundedButton/RoundedButton";

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
            <div className={classes.infoContainer}>
                <div className={classes.infoText}>
                    <div>{name}</div>
                    <div>{price} SEK</div>
                </div>
                <div className={classes.infoContainerButton}>
                    <div><RoundedButton 
                    event = {() => addToChartHandler(id)}
                    text="Add to chart"/>
                </div>
                </div>
            </div>
           
            
        </div>
    
        
       
    )
}

export default ImageContainer
