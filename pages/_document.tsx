import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className='text-gray-800 m-auto bg-white w-9/12'>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
