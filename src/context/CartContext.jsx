import React, { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            
        } else {
            setCart([...cart, {...item, cantidad}])
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    return(
        <CartContext.Provider value={{ cart, addItem }}>
            {children}
        </CartContext.Provider>
    )
}