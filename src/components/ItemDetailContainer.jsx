import React, { useState, useEffect } from "react";
import { productos } from "../mock/productos";
import ItemDetail from "./ItemDetail";
import { useParams} from "react-router-dom"

function ItemDetailContainer(props) {

    const [producto, setProducto] = useState ([]);
    const {idNum} = useParams()

    useEffect(() => {
        const traerProducto = new Promise ((resolve, reject) => {
            setTimeout(() => {
                let idNum = parseInt(id)
                const idFound = productos.find( vino =>{
                    return vino.id === idNum 
                } )
                resolve(idFound);
            }, 2000);
        });

        traerProducto
            .then((resolve) => {
                setProducto(resolve);
            })
            .catch((reject) => {
                console.log(reject);
            });

    }, [idNum]);
    
    return(
        <div>
            <h2>{props.greeting}</h2>
            <ItemDetail item={producto}/>
        </div>
    )
}

export default ItemDetailContainer;