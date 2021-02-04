import React from 'react';
import styles from "../Button/primaryButton.module.css";



const PrimaryButton = ({event,text}) => {
    return (
        <button onClick={event} className={styles.buttonPrimary}>
            {text}
        </button>
    

        //<button onClick={function} className={styles.buttonPrimary}>
        //  <Button onClick={() => history.push("/shop")}></Button> 
        //  gör detta ovan fast med primarybutton som måste ta emot onclick-funktion

    )
}

export default PrimaryButton;
