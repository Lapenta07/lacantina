import Link from "next/link";
import './menuProps.css'

async function getPost() {
try {
    const res = await fetch('http://127.0.0.1:1337/api/recetas?populate=*');

    if (!res.ok) {
        throw new Error('algo mal, no se que');
    }

    const { data } = await res.json();
    return data;
    } catch (error) {
    console.error('Error en getPost:', error);
    throw error; // Re-lanza el error para que pueda ser capturado nuevamente en el lugar que llama a getPost
    }
}

export default async function ListOfPosts() {
    const post = await getPost();
    console.log(post);

return (
    <div className="main">
        {post.map(({ id, attributes }) => (
                <article key={id} className="card">
                        <div className="imgBx">
                            <img src={`http://127.0.0.1:1337${attributes.imagen.data.attributes.url}`} alt="" /> 
                        </div>
                        <div className="titulo">    
                            <h3>{attributes.Nombre}</h3>
                        </div>
                        
                    <div className="contenido">
                        <div className="atributos">
                            <p>{attributes.pais} </p>
                            <p>{attributes.tipo}</p>
                            <p>{attributes.raiting}</p> 
                        </div>
                        <div className="descripcion"> 
                            <p>{attributes.Descripcion}</p>
                        </div>
                        
                        <div className="boton">
                            <p>🛒</p>
                        </div>
                    </div>
                </article>

        ))}
    </div>
);
}