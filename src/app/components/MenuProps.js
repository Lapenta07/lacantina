'use client'
import { useEffect, useState } from "react";
import './menuProps.css'
import Carrito from "./icons/Carrito";

export default function menuProps({ agregarCarrito }) {
  const [post, setPost] = useState([]);
  const [cantidad, setCantidad] = useState(1); // Inicialmente, la cantidad será 1

  const handleSubmit = (e, id) => {
    e.preventDefault();
    // Agregar al carrito
    if (cantidad < 1) {
      alert('Cantidad no válida');
      return;
    }

    // Obtener el plato seleccionado del array post según el id
    const platoSeleccionado = post.find(item => item.id === id);

    if (platoSeleccionado) {
      // Crear el objeto para agregar al carrito
      const itemCarrito = {
        id: platoSeleccionado.id,
        imagen: platoSeleccionado.attributes.imagen.data.attributes.url,
        Nombre: platoSeleccionado.attributes.Nombre,
        Precio: platoSeleccionado.attributes.Precio,
        cantidad: cantidad,
      };

      // Llamar a la función agregarCarrito para agregar el plato al carrito
      agregarCarrito(itemCarrito);
      alert('Plato agregado al carrito');
    } else {
      alert('Plato no encontrado');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://127.0.0.1:1337/api/recetas?populate=*');

        if (!res.ok) {
          throw new Error('algo mal, no se que');
        }

        const { data } = await res.json();
        setPost(data);
      } catch (error) {
        console.error('Error en fetchData:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      {post.map(({ id, attributes }) => {
        const { Nombre, Precio } = attributes;

        return (
          <article key={id} className="card">
            <div className="imgBx">
              <img src={`http://127.0.0.1:1337${attributes.imagen.data.attributes.url}`} alt="" />
            </div>
            <div className="titulo">
              <h3>{attributes.Nombre}</h3>
            </div>

            <div className="contenido">
              <div className="descripcion">
                <p>{attributes.Descripcion}</p>
              </div>
              <div className="atributos">
                <p>{attributes.raiting}</p>
                <p>{attributes.pais}</p>
              </div>
              <div className="precio">
                <p>${attributes.Precio}</p>
                <form className="form" onSubmit={(e) => handleSubmit(e, id)}>
                  <label className="cantidad">Cantidad:</label>

                  <select
                    className="seleccion"
                    value={cantidad}
                    onChange={(e) => setCantidad(parseInt(e.target.value))}
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <button className="boton" type="submit"> <Carrito fill="#ff5c5c" /> </button>
                </form>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}