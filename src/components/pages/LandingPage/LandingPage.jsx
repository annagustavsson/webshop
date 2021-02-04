import React from 'react'
import {useHistory} from "react-router-dom";
import PrimaryButton from "../../general/Button/primaryButton"
import styles from "../LandingPage/landingpage.module.css"
const LandingPage = () => {

    let history = useHistory()


    return (
        <div className={styles.flexContainer}>
            <PrimaryButton 
            event = {() => history.push("/shop")}
            text="Poster Shop"/>
            <PrimaryButton 
            event = {() => history.push("/portfolio")}
            text="Portfolio"/> 

        </div>
    )
}

export default LandingPage;