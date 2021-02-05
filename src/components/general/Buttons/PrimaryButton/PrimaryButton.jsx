import React from 'react';
import styles from "../PrimaryButton/primaryButton.module.css";



const PrimaryButton = ({event,text}) => {
    return (
        <button onClick={event} className={styles.buttonPrimary}>
            {text}
        </button>
    )
}

export default PrimaryButton;
