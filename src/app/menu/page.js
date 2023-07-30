'use client'
import { useState } from "react";
import MenuProps from "../components/MenuProps";

export default function Menu() {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar plato al carrito
  const agregarCarrito = (platoSeleccionado) => {
    setCarrito([...carrito, platoSeleccionado]);
    console.log('Plato agregado al carrito:', platoSeleccionado);
  };

  return (
    <div>
      <MenuProps agregarCarrito={agregarCarrito}/>
    </div>
  );
}