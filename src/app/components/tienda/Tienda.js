'use client'
import './tienda.css'
import { useCarrito } from '../CarritoContext';
import { useEffect, useState } from 'react';

export default function Tienda() {
const { carrito, agregarCarrito } = useCarrito();
console.log(carrito);

const [total, setTotal] = useState(0)

useEffect(()=>{
    const calculoTotal = carrito.reduce((total, producto)=> total + (producto.cantidad * producto.Precio), 0)

    setTotal(calculoTotal);
}, [carrito])

return (
    <main className="principal">
    <h1 className="heading"></h1>

    <section className="agregados">
        <div className='izquierda'>
        <h2>Platos</h2>
        {carrito.length === 0 ? 'Carrito Vacio' : (
            carrito.map(producto => (
            <div key={producto.id} className='prod1'>
                <div className='prodimg'>
                <img src={`http://127.0.0.1:1337${producto.imagen}`} alt={`Imagen de ${producto.Nombre}`} />
                </div>
                <div className="prodinfo">
                <p>Plato: {producto.Nombre}</p>
                <p>Precio: ${producto.Precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Subtotal: $<span>{producto.Precio * producto.cantidad}</span></p>
                </div>
            </div>
            ))
        )}
        </div>
        <div className='derecha'>
        
        {total > 0 ? (
            <div className='resumen'>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: ${total}</p>
            </div>
        ) : <p>No hay productos</p>}

        </div>
    </section>
    </main>
)
}
