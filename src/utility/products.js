import flowers from "../../../resources/images/flowers.png";
import ystad from "../../../resources/images/ystad.png";
import italy from "../../../resources/images/italy.png";
import kristina from "../../../resources/images/kristina.png";

// använd såhär
// id_list = Object.keys(products)
// id_list.forEach(key => {
     // do stuff with key })

const products = {

    "2000" : {
        "img": flowers,
        "price":399,
        "name": "Flower"
    }, 
    "2001" : {
        "img": ystad,
        "price":399,
        "name": "Ystad"
    }, 
    "2002": {
        "img": italy,
        "price":399,
        "name": "Italy" 
    }, 
    "2003" : {
        "img": kristina,
        "price":399,
        "name": "Kristina"  
    }, 
    
}

export default products