import {useState} from 'react'

function ItemCount({stock, initial}) {
    const [count, setCount] = useState(initial)

    function suma() {
        setCount(count +1)
    }
    function resta() {
        setCount(count -1)
    }
    return (
        <div className="flex items-center justify-center bg-green-100">
            <button disabled={count <= 1} onClick={resta} className="text-white bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-300">-</button>
            <span className="m-5" x-text="count">{count}</span>
            <button disabled={count >= stock} onClick={suma} className="text-white bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-300">+</button>
            <button className="text-white bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-300">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount