
export default function Blog ({entradas}) {
    console.log(entradas)

return (
    <div>
    <h3 className="titulo">Blog</h3>

    <div className="main">
    </div>
    </div>
);

} 

export async function getServerSideProps() {

    const url = 'http://localhost:1337/api/blogs'
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    
    console.log(resultado);

return {
    props: {
        entradas: resultado,
    }
}
}
