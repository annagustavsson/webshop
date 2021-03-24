import React from 'react'
import {useHistory} from "react-router-dom";

import PrimaryButton from "../../general/Buttons/PrimaryButton/PrimaryButton";
import LandingHeader from "../LandingHeader/LandingHeader";
import HamburgerMenu from "../../general/HamburgerMenu/HamburgerMenu";
import classes from '../LandingPage/landingpage.module.css';

import styles from "../LandingPage/landingpage.module.css";
const LandingPage = () => {

    let history = useHistory()


    return (
        <div>
        <HamburgerMenu/>
        <div className={styles.flexContainer}>
            <LandingHeader/>
            <HamburgerMenu/>
            <div className={classes.buttonContainer}>
                <PrimaryButton 
                event = {() => history.push("/shop")}
                text="Poster Shop"/>
                <PrimaryButton 
                event = {() => history.push("/portfolio")}
                text="Portfolio"/> 
            </div>
        </div>
        </div>
    )
}

export default LandingPage;