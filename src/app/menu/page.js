'use client'
import MenuProps from "../components/MenuProps";
import { useCarrito } from "../components/CarritoContext";

export default function Menu(){
  const { carrito, agregarCarrito } = useCarrito();

  return (
    <div>
      <MenuProps agregarCarrito={agregarCarrito}/>
    </div>
  );
}
