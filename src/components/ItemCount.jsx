import {useState} from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    function suma() {
        setCount(count +1)
    }
    function resta() {
        setCount(count -1)
    }
    return (
        <div className="flex items-center justify-center bg-zinc-900">
            <button disabled={count <= 1} onClick={resta} className="text-white bg-red-700 px-4 py-2 rounded hover:bg-red-600">-</button>
            <span className="m-5" x-text="count">{count}</span>
            <button disabled={count >= stock} onClick={suma} className="text-white bg-red-700 px-4 py-2 rounded hover:bg-red-600">+</button>
            <button onClick={onAdd} className="text-white bg-red-700 px-4 py-2 rounded hover:bg-red-600">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount