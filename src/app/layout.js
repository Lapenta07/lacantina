'use client'
import { useState, useEffect } from 'react'
import { CarritoProvider } from './components/CarritoContext'
import './globals.css'
import Header from '../app/components/Header/Header'
import Footer from '../app/components/Footer/Footer'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata  = {
  title: 'Sweet Cantina',
  description: 'Un restaurante de cocina internacional',
}

export default function RootLayout({ children }) {

  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    console.log(carrito);
  }, [carrito]);

  const agregarCarrito = producto =>{
    setCarrito([...carrito, producto])
  };


  return (
    <html lang="en">
      <body className={inter.className}>
        <CarritoProvider>
        <Header/>
          {children}
        <Footer/>
        </CarritoProvider>
      
      </body>
    </html>
  )
}
