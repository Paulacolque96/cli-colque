import Item from "./Item"

const ItemList = ({articulos}) => {
    return (
        <div className="flex justify-around flex-wrap">
            {articulos.map((articulos) => (
                    <Item key={articulos.id}{...articulos}/>
            ))}
        </div>
    )
}

export default ItemList;