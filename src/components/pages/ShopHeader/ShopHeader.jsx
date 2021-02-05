import React from 'react'
import cartLogo from "../../../resources/icons/cart.svg";

import classes from "./shopHeader.module.css";


const ShopHeader = () => {
    return (
        <div className={classes.headerContainer}>
            <img className={classes.cart} src={cartLogo} alt="Cart Logo" />
        </div>
    )
}

export default ShopHeader
