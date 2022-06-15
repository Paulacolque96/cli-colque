import ItemCount from "./ItemCount";

function ItemListContainer(props) {
    return(
        <div>
        <h2>{props.greet}</h2>
        <p>este es el item list container</p>
        <ItemCount stock={10} initial={0} />
        </div>
    )
}

export default ItemListContainer;