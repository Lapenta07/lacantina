'use client'
import "./footer.css";
import Link from 'next/link'

export default function Footer (){
    return(
        <footer className="footer">
            <div className="izquierda">
            <ul>
                <li><Link href='/'>
                Home
                </Link></li>
                <li><Link href="/">
                Recetas
                </Link></li>
                <li><Link href="/carrito">
                <span className="carrito">🛒</span><span>0</span>			
                </Link></li>
                <li><Link href="/blog">
                Blog
                </Link></li>
                <li><Link href="/nosotros">
                Nosotros
                </Link></li>
                <li><Link href="/contacto">
                Contacto
                </Link></li>
            </ul>
            </div>
            <div className="derecha">
                <h4>Diplomatura Front-End</h4>
                <p>Entrega Final - Ignacio Lapenta</p>
            </div>
        </footer>
    )
}