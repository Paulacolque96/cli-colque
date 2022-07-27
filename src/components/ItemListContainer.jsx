import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getItemOfCategory, getItems } from "../firebase";


function ItemListContainer(props) {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState ([]);
    const {categoryId} = useParams();

    useEffect(() => {
        if (categoryId) {
            getItemOfCategory(categoryId)
              .then((res) => {
                setProducts(res);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
      
          } else {
      
            getItems()
              .then((res) => {
                setProducts(res);
                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }, [categoryId]);
              
    return(
        <div className="text-center container mx-auto">
            <div className="font-bold text-red-700 text-4x1">{props.greet}</div>
            {
              loading
                ? <div className="mx-auto h-96 flex justify-around">
                    <div className="flex-1 flex justify-center items-center">
                      {/*<RotateLoader className="mx-auto align-middle" color={"rgb(210, 4, 120)"} size={10} /> */}
                    </div>
                  </div>

                : <ItemList items={products} />
            }

        </div>
    )
}

export default ItemListContainer;