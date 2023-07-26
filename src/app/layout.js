import './globals.css'
import Header from '../app/components/Header/Header'
import Footer from '../app/components/Footer/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata  = {
  title: 'La Cantina',
  description: 'Un restaurante de cocina internacional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header/>
        
        {children}

        <Footer/>
      
      </body>
    </html>
  )
}
