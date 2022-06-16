import Item from "./Item"

const ItemList = ({articulos}) => {
    return (
        <div>
            {articulos.map((articulos) => (
                    <Item key={articulos.id}{...articulos}/>
            ))}
        </div>
    )
}

export default ItemList;