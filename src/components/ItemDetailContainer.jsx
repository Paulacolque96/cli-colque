import React, { useState, useEffect } from "react";
import { getAnItem } from "../firebase";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom"

function ItemDetailContainer(props) {

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getAnItem(id)
        .then((resolve) => {
  
          setProducto(resolve);
          setLoading(false);
  
        })
    }, [id]);
    
    return(
        <div>
            <h2>{props.greeting}</h2>
            {
                loading
                 ?  <div className="mx-auto h-96 flex justify-around">
                        <div className="flex-1 flex justify-center items-center">
                            {/*<RotateLoader className="mx-auto align-middle" color={"rgb(217, 4, 121)"} size={20} />*/}
                        </div>
                    </div>
          : <ItemDetail item={producto} />
      }
        </div>
    )
}

export default ItemDetailContainer;