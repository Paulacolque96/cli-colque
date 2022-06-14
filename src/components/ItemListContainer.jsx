import ItemCount from "./ItemCount";

function ItemListContainer() {
    return(
        <div>
        <ItemCount stock={10} initial={0} />
        <p>Lista de vinos</p>
        </div>
    )
}

export default ItemListContainer;