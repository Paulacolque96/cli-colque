import "../App.css"
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
import {CartContext} from "../context/CartContext";
import { Link } from 'react-router-dom'

function CartWidget() {
    const {cantidadInCart} = useContext(CartContext)
    return(
        <div className="cart-widget">
            <Link to='/cart'>
                <div>
                    <FontAwesomeIcon icon={faWineGlass} size="2x" color="red" />
                    {
                     (cantidadInCart() > 0) &&
                     <span className="ml-2">{cantidadInCart()}</span>
                    }
                </div> 
            </Link>

        </div>
    )
}

export default CartWidget