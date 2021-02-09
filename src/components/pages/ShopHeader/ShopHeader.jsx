import React from 'react'
import cartLogo from "../../../resources/icons/cart.svg";

import classes from "./shopHeader.module.css";
import {useCartUpdate, useCart} from "../../general/contexts/ProductContext";


const ShopHeader = () => {

    const cart = useCart()
    const addToCart = useCartUpdate()

    return (
        <div className={classes.headerContainer}>
            <img className={classes.cart} src={cartLogo} alt="Cart Logo" />
            <div>{cart}</div>
        </div>
    )
}

export default ShopHeader
