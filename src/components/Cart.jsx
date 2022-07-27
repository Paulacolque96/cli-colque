import React, { useContext, useState } from 'react';
import {CartContext} from "../context/CartContext";
import { Link } from 'react-router-dom';
import Modal from './Modal';

function Cart () {
  const [modalForm, setModalForm] = useState(false);
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="bg-red-100">
        <h3 className="text-center font-medium text-red-800 text-4xl p-40">Carrito vacio</h3>
        <div className="flex justify-center p-7">
            <Link to="/" className="bg-yellow-600 py-4 px-10 text-4xl rounded-md font-bold text-white mt-5" >
               Volver al Inicio
            </Link>
        </div>
      </div>
    )
  }

  return (
    <>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      {cart.map((item) => (
        <div key={item.id} className="bg-zinc-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="mb-5 py-3 text-center">
            <h3 className="text-3xl text-red-700 mt-2 mb-4 font-medium title-font">{item.name}</h3>          
            <p className="mt-4 text-red-700 text-md font-bold">${item.price}</p>
            <p>Unidades: {item.cantidad} </p>
            <p className="mt-4 text-red-700 text-md font-bold"><span>Subtotal: ${item.price * item.cantidad}</span></p>
          </div>
        </div>
      ))}    
    </div>
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        
        <button className="bg-red-700 py-2 px-8 rounded-md text-white mx-auto">Finalizar Compra</button>
        <button onClick={() => { removeItem(item.id)}} className="bg-red-700 py-2 px-8 rounded-md text-white mx-auto">Vaciar Carrito</button>
    </div>

    <div >
      <div className="flex flex-col justify-center items-center container-fluid bg-orange-400">
        <p className="total p-10 text-4xl bg-orange-500 mt-10 rounded-md">Precio Total: <span className="text-green-800 font-bold">${totalPrice()}</span></p>
        <div>
          <button onClick={clearCart} className="bg-red-600 py-2 px-8 rounded-md font-bold text-white m-5">Vaciar Carrito</button>
          <button onClick={() => setModalForm(!modalForm)} className="bg-green-600 py-2 px-8 rounded-md  m-5 font-bold text-white mt-5">Comprar</button>
        </div>
      </div>
          <Modal modalForm={modalForm} setModalForm={setModalForm} />
    </div>
  </>  
  );
}

export default Cart;