import React, { useState, createContext } from "react";

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([])
    
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {

            let index = cart.findIndex(el => el.id === item.id);
            let product = cart[index];
            product.cantidad = product.cantidad + cantidad;
            const newCart = [...cart];
            newCart.splice(index, 1, product);
      
            setCart([...newCart]);
        
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    function cantidadInCart(){
        let total = 0
        cart.forEach(item => total = total + item.cantidad );
        return total
    }

    function limpiarCart() {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(item => item.id !== id)
        setCart(products)
    }

    const totalPrice = () => {
        let total = 0
        cart.forEach(item => {
          total += item.cantidad * item.price
        })
    
        return total
    }
    

    return(
        <CartContext.Provider value={{ cart, addItem, isInCart, cantidadInCart, limpiarCart, removeItem, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}