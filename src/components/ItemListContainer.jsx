import React, { useState, useEffect } from "react";
import { productos } from "../mock/productos";
import ItemList from "./ItemList";



function ItemListContainer(props) {

    const [products, setProducts] = useState ([]);

    useEffect(() => {
        const traerProductos = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        traerProductos
            .then((resolve) => {
                setProducts(resolve);
            })
            .catch((reject) => {
                console.log(reject);
            });

    }, []);
    
    return(
        <div>
            <h2>{props.greet}</h2>
            <ItemList articulos={products}/>
        
        </div>
    )
}

export default ItemListContainer;