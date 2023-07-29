'use client'
import "./footer.css";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


export default function Footer (){
    return(
        <footer className="footer">
            <div className="izquierda">
            <ul>
                <li><Link href='/'>
                Home
                </Link></li>
                <li><Link href="/menu">
                Menú
                </Link></li>
                <li><Link href="/carrito">
                <span className="carrito"><FontAwesomeIcon icon={faCartShopping} /></span>			
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