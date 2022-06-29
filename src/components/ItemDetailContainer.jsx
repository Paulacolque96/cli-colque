import React, { useState, useEffect } from "react";
import { productos } from "../mock/productos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

function ItemDetailContainer(props) {

    const [producto, setProducto] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const traerProducto = new Promise ((resolve, reject) => {
            setTimeout(() => {
                let idNum = parseInt(id)
                const idFound = productos.find( vino => {
                    return vino.id === idNum 
                })
                resolve(idFound);
            }, 2000);
        });

        traerProducto
            .then((resolve) => {
                setProducto(resolve);
            })
    }, [id]);
    
    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;