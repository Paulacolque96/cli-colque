import { useState } from "react"
import ItemCount from "./ItemCount"
import {Route, Routes} from 'react-router-dom';

function ItemDetail({item}) {
    const [isAddedToCart, setAdeddToCart] = useState(false)
    function handleOnAdd(){
        setAdeddToCart(true)
    }
    return (
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <img src={item.img} alt={item.img} />
            </div>
            <h2 className="">{item.name}</h2>
            <h4>{item.description}</h4>
            <h5 className="mt-4 text-red-700 text-md font">${item.price}</h5>
            {
              isAddedToCart === (false)
                ? <ItemCount onAdd={handleOnAdd} stock={10} initial={0} />
                : <Routes>
                    <Route path="/cart"/>
                  </Routes>
            }
        </div>
    )
}

export default ItemDetail