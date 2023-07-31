'use client'
import "./header.css";
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function BarraNavegacion() {
    

return (
<header>
    <div className="logo"><Link href='/'>
    <img src="../assets/facha.png" alt="logo"/>
    </Link></div>
    <input type="checkbox" id="nav_check" hidden />
    <nav>
    <div className="logo">
        <img src="./assets/facha.png" alt="logo" />
    </div>
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
    </nav>
    <label htmlFor="nav_check" className="hamburger">
    <div></div>
    <div></div>
    <div></div>
    </label>
</header>
);
}
