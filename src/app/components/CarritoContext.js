'use client'
import { createContext, useState, useContext, useEffect } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (platoSeleccionado) => {
    const itemExists = carrito.some((articulo) => articulo.id === platoSeleccionado.id);

    if (itemExists) {
      const carritoActualizado = carrito.map((articulo) =>
        articulo.id === platoSeleccionado.id ? platoSeleccionado : articulo
      );
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, platoSeleccionado]);
    }

    console.log("Plato agregado al carrito:", platoSeleccionado);
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe ser utilizado dentro de CarritoProvider");
  }
  return context;
}
