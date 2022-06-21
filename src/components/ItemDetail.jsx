function ItemDetail({item}) {
    return (
        <div>
            <div>
                <img src={item.img} alt="" />
            </div>
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
            <h5>${item.price}</h5>
        </div>
    )
}

export default ItemDetail