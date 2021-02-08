import React, {useState, useContext} from 'react';


const CartContext = React.createContext();
const CartUpdateContext = React.createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const useCartUpdate = () => {
    return useContext(CartUpdateContext);
}

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (newProduct) => {
        const tempCart = [...cart];
        tempCart.push(newProduct);
        setCart(tempCart);
    }


    return (
        <CartContext.Provider value={cart}>
            <CartUpdateContext.Provider value={addToCart}>
                {children}
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}

export default CartProvider;
