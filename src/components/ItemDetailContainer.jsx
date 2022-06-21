import React, { useState, useEffect } from "react";
import { productos } from "../mock/productos";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(props) {

    const [producto, setProducto] = useState ([]);

    useEffect(() => {
        const traerProducto = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(productos[2]);
            }, 2000);
        });

        traerProducto
            .then((resolve) => {
                setProducto(resolve);
            })
            .catch((reject) => {
                console.log(reject);
            });

    }, []);
    
    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;