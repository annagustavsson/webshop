import React from 'react';
import styles from "../Button/primaryButton.module.css";

const PrimaryButton = ({text}) => {
    return (
        <button className={styles.buttonPrimary}>
            {text}
        </button>
    )
}

export default PrimaryButton;
