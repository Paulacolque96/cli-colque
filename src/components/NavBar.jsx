import CartWidget from "./CartWidget.jsx";
import {Link} from 'react-router-dom';

function NavBar() {
    return(
    <nav className="flex items-center justify-between flex-wrap bg-zinc-900 p-6 app-header">
  <div className="flex items-center flex-shrink-0 text-red-700 mr-6">
    <span className="font-semibold text-xl tracking-tight">COPA</span>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-m lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Home</Link>
      <Link to="detail" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Detalle</Link>
      <Link to="/category/tinto" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Tinto</Link>
      <Link to="/category/blanco" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Blanco</Link>
      <Link to="/category/rosado" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white">Rosado</Link>
    </div>
  </div>
  <CartWidget/>
</nav>
    )
}
export default NavBar