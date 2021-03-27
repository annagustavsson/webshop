import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

import PrimaryButton from "../../general/Buttons/PrimaryButton/PrimaryButton";
import LandingHeader from "../LandingHeader/LandingHeader";
import HamburgerMenu from "../../general/HamburgerMenu/HamburgerMenu";
import classes from '../LandingPage/landingpage.module.css';

import styles from "../LandingPage/landingpage.module.css";
const LandingPage = () => {

    let history = useHistory()


    const [isClicked, setClicked] = useState(false)
    console.log(isClicked, "isClicked")

    const changeClicked = () => {
        setClicked(!isClicked)
    }


    return (
        <>
        <div><HamburgerMenu isClicked={isClicked} onClick={changeClicked}/></div>
        <div className={styles.flexContainer}>
            <LandingHeader/>
            <div className={classes.buttonContainer}>
                <PrimaryButton 
                event = {() => history.push("/shop")}
                text="Poster Shop"/>
                <PrimaryButton 
                event = {() => history.push("/portfolio")}
                text="Portfolio"/> 
            </div>
        </div>
        </>
    )
}

export default LandingPage;