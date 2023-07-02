import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from "../components/Navbar"

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className='text-gray-100'>
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
