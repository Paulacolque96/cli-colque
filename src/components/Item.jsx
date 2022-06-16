const Item = ({name, description, price}) => {
    return (
        <>
            <div>
                <h2>{name}</h2>
                <h4>{description}</h4>
                <h5>${price}</h5>
            </div>    
        </>
    )
}

export default Item