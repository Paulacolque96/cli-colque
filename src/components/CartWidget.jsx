import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineGlass } from '@fortawesome/free-solid-svg-icons';
function CartWidget() {
    return(
        <div className="cart-widget">
        
        <FontAwesomeIcon icon={faWineGlass} size="2x" color="white" />
      <div className="numero-shop">0</div>
    </div>
    )
}

export default CartWidget