import './post.css'

const fetchSiglePost = (id) => {
    return fetch(`http://127.0.0.1:1337/api/blogs/${id}`, {
        next: {
            revalidate: 60
        }
    })
    .then(res=>res.json())
}

export default async function OnePost ({ params }) {
    const { id } = params
    const posteo = await fetchSiglePost(id)
    console.log(posteo)
    return(
        <article className='articulo'>
            <h1 className='titular'>{posteo.data.attributes.titulo}</h1>
            <p className='noticia'>{posteo.data.attributes.articulo}</p>
        </article>
    )
}