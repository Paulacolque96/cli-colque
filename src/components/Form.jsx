/*import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { createBuyOrder } from '../firebase';

export const Form = () => {

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;
        setBuyer({ ...buyer, [field]: value });
    }


    function handleBuyOrder(evt) {

        const dataOrder = {
            buyer,
            items: cart,
            total: totalPrice()
        }

        
        createBuyOrder(dataOrder).then((orederDataCreated) => {
            clearCart();
        });

    }




    return (<>

        <div>
            <div className="flex align-middle justify-between text-lg mb-10 border-double border-b-4">
                <h1 className="mb-4 text-slate-500 font-bold">Ingrese sus datos</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleBuyOrder)} className="flex flex-col">



                    <label className="text-center text-slate-500"
                        htmlFor="name">Nombre</label>

                    <input {...register("name", { required: true })}
                        aria-required
                        className="text-center rounded mb-5 bg-slate-300 border-solid"
                        onChange={handleChange}
                        type="text"
                        name="name" />
                    {errors.name?.type === 'required' &&
                        <span className="text-red-500">Se requiere un nombre de contacto</span>}



                    <label className="text-center text-slate-500"
                        htmlFor="phone">Telefono</label>

                    <input {...register("phone", { required: true })}
                        aria-required
                        className="text-center rounded mb-5 bg-slate-300"
                        onChange={handleChange}
                        type="phone"
                        name="phone" />
                    {errors.phone?.type === 'required' &&
                        <span className="text-red-500">Se requiere un nombre de contacto</span>}



                    <label className="text-center text-slate-500"
                        htmlFor="email">Email</label>

                    <input {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
                        className="text-center rounded mb-5 bg-slate-300"
                        onChange={handleChange}
                        type="email"
                        name="email" />
                    {errors.email?.type === 'required' &&
                        <span className="text-red-500">Se requiere un Email</span>}
                    {errors.email?.type === 'pattern' &&
                        <span className="text-red-500">Invalid email</span>}

                    <button type="submit" className="bg-green-400 py-2 px-8 rounded-md font-bold text-white mt-5">Finalizar Compra</button>

                </form>
            </div>

        </div>
    </>
    )
}
*/