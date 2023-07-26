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

return (
<section>
    {post.map(({id, attributes}) => (
        
    <div key={id} className="card">
        <div className="receta">
            <img src={`http://127.0.0.1:1337${attributes.imagen.data.attributes.url}`} alt="" />
        </div>
        <div className="details">
            <h3 className="titulo">{attributes.titulo}</h3>
            <div className="info">
                <p>{attributes.descripcion}</p>
                <div className="compra">
                    <Link href="/" className="carrito">
                        <button>Leer más</button>
                    </Link>            
                </div>
            </div>
                
            </div>
    </div>

))}
</section>
    
);

}
