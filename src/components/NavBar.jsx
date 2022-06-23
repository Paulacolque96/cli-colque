import CartWidget from "./CartWidget.jsx";
import {Link} from 'react-router-dom';

function NavBar() {
    return(
    <nav className="flex items-center justify-between flex-wrap bg-zinc-900 p-6 app-header">
  <div className="flex items-center flex-shrink-0 text-red-700 mr-6">
    <span className="font-semibold text-xl tracking-tight">COPA</span>
  </div>
  {/*<div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-red-700 border-red-700 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>*/}
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-m lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Home</Link>
      <Link to="detail" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Detalle</Link>
      {/*<Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Shop</Link>
      <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white mr-4">Ocasion</Link>
      <Link to="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-red-700 hover:text-white">Contacto</Link>*/}
    </div>
  </div>
  <CartWidget/>
</nav>
    )
}
export default NavBar