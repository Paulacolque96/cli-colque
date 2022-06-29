import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../mock/productos";
import ItemList from "./ItemList";



function ItemListContainer(props) {

    const [products, setProducts] = useState ([]);
    const {categoryId} = useParams();

    useEffect(() => {
        const traerProductos = new Promise ((resolve, reject) => {
            setTimeout(() => {
                if (categoryId === undefined)
                    resolve(productos);
                else {
                   const itemsFound = productos.filter( vino =>{
                    return vino.category === categoryId;
                   })
                   resolve(itemsFound)
                }
            }, 2000);
        });

        traerProductos
            .then((resolve) => {
                setProducts(resolve);
            })
            .catch((reject) => {
                console.log(reject);
            });

    }, [categoryId]);
    
    return(
        <div className="text-center container mx-auto">
            <div className="font-bold text-red-700 text-4x1">{props.greet}</div>
            <ItemList articulos={products}/>
        </div>
    )
}

export default ItemListContainer;