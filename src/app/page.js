import './page.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='main'>
      <div className="left">
      <div className="nombre">
        <h1>La Cantina</h1>
      </div>
      <div className="introduccion">
        <p>Bienvenido/a a nuestro Cantina con platos de España, Francia e Italia. Aquí encontrarás una amplia
          variedad de platos típicos de estos países, una breve descripción y la posibilidad de pedirlos para que los
          llevemos a tu casa.</p>
      </div>
      <div className="button">
        <div>
        <Link href="/nosotros">
                Leer más
                </Link>  
        </div>
      </div>
    </div>
    <div className="right">
      <div className="imagen">
        <img src="./assets/cheff.png" alt="chef"/>
      </div>
    </div>
  </main>
    
  )
}