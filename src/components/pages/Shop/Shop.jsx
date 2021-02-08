import React from 'react';
import classes from "../Shop/shop.module.css";

import flowers from "../../../resources/images/flowers.png";
import ystad from "../../../resources/images/ystad.png";
import italy from "../../../resources/images/italy.png";
import kristina from "../../../resources/images/kristina.png";

import ImageContainer from "./ImageContainer/ImageContainer";
import ShopHeader from "../ShopHeader/ShopHeader";

const Shop = () => {
    const images = [
        {
            "img": flowers,
            "id": 2000,
            "price":399,
            "name": "Flower"
        }, {
            "img": ystad,
            "id": 2001,
            "price":399,
            "name": "Ystad"
        },{
            "img": italy,
            "id": 2002,
            "price":399,
            "name": "Italy" 
        }, {
            "img": flowers,
            "id": 2003,
            "price":399,
            "name": "Kristina"  
        }, 
        
        {
            "img": flowers,
            "id": 2000,
            "price":399,
            "name": "Flower"
        }, {
            "img": ystad,
            "id": 2001,
            "price":399,
            "name": "Ystad"
        },{
            "img": italy,
            "id": 2002,
            "price":399,
            "name": "Italy" 
        }, {
            "img": ystad,
            "id": 2003,
            "price":399,
            "name": "Kristina"  
        }, {
            "img": flowers,
            "id": 2003,
            "price":399,
            "name": "Flowers"  
        }
    ] 

    
 
    const addToCartHandler = (id) => {
        console.log("this is id", id)
    }

    return (

        <div>
            <ShopHeader/>
            <div className={classes.flexContainer}>
                {
                    images.map(imageObject => (
                        <ImageContainer
                            id = {imageObject.id}
                            name = {imageObject.name}
                            price = {imageObject.price}
                            image = {imageObject.img}
                            addToChartHandler = {addToCartHandler}
                        />
                    ))
                }
            </div>
        </div>

    )
}

export default Shop;
