import React from 'react';
import styles from "../BwButton/bwButton.module.css";



const BwButton = ({event,text, color}) => {
    return (
        <button onClick={event} className={styles.bwButton}>
            {text}
        </button>
    )
}

export default BwButton;