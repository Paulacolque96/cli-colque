import React, { useState } from 'react'
import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <div className="flex justify-around flex-wrap">
            {items.map((items) => (
                    <Item key={items.id}{...items}/>
            ))}
        </div>
    )
}

export default ItemList;