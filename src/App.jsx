import { useState } from 'react'
import './App.css'
import Nav from './nav.jsx'
import Header from './header.jsx'
import Servicios from './servicios.jsx'
import Elegir from './elegir.jsx'
import Introduccion from './introduccion.jsx'
import Productos from './productos.jsx'
import ServiciosCloud from './servicios-cloud.jsx'
import Testimonios from './testimonios.jsx'
import Nosotros from "./nosotros.jsx"
import Footer from "./footer.jsx"


function App() {

  return (
    <>
    < Nav />
    <Header />
    <Introduccion />
    <Servicios />
    <Elegir />
    <Productos />
    <ServiciosCloud />
    <Testimonios />
    <Nosotros />
    <Footer />

    </>
  )
}

export default App
