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
        <div className="text-center container mx-auto mt-5">
            <div className="font-bold text-zinc-100 text-4x1 mb-2">{props.greet}</div>
            <ItemList articulos={products}/>
            <a href="/detail">ir a detalle del producto</a>
        </div>
    )
}

export default ItemListContainer;