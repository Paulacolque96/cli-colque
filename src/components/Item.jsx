import {Link} from 'react-router-dom';

const Item = ({name, img, id}) => {
    const urlDetalle = `/detail/${id}`
    return (
        <div className="mb-5 py-3 itemlist-card text-center" key={id}>
            <img className="itemlist-card-img" src={img} alt={name} />
            <h2 className="text-3x1 text-red-700 mt-2 mb-4 font-medium title-font">{name}</h2>
            <Link to={urlDetalle}>
                <button>Ver Detalle</button>
            </Link>
        </div>
    )
}

export default Item