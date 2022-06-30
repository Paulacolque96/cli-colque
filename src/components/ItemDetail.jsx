import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';
import { CartContext } from "../context/CartContext";

function ItemDetail({item}) {
    const [cant, setCantidad] = useState(0)
    const { addItem } = useContext(CartContext)
    

    function onAdd(cantidad){
        setCantidad(cantidad);
        addItem(item, cantidad)
    }
    return (
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <img src={item.img} alt={item.img} />
            </div>
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
            <h5 className="mt-4 text-red-700 text-md font-bold">${item.price}</h5>
            {
              cant === 0
                ? <ItemCount onAdd={onAdd} stock={10} initial={1} />
                : <Link to="/">Ir al carrito</Link>
            }
        </div>
    )
}

export default ItemDetail