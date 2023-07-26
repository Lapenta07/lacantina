import Link from "next/link";
import './ListOfPosts.css'

async function getPost() {
try {
    const res = await fetch('http://127.0.0.1:1337/api/blogs?populate=*');

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
                <div key={id} className="entrada">
                    <div className="foto">
                        <img src={`http://127.0.0.1:1337${attributes.imagen.data.attributes.url}`} alt="" /> 
                    </div>
                    <div className="titulo">    
                        <h3>{attributes.titulo}</h3>
                    </div>
                    <div className="descripcion"> 
                        <p>{attributes.descripcion}</p>
                    </div>
                    <div className="boton">
                        <Link href="/"><button>Leer nota</button></Link>
                    </div>
                </div>
   
        ))}
    </div>
);
}
