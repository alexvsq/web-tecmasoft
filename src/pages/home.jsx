import React from 'react'

import Header from '../header.jsx'
import Servicios from '../servicios.jsx'
import Elegir from '../elegir.jsx'
import Introduccion from '../introduccion.jsx'
import Productos from '../productos.jsx'
import ServiciosCloud from '../servicios-cloud.jsx'
import Testimonios from '../testimonios.jsx'
import Nosotros from "../nosotros.jsx"



export default function Home() {
    return (
        <>

            <Header />
            <Introduccion />
            <Servicios />
            <Elegir />
            <Productos />
            <ServiciosCloud />
            <Testimonios />
            <Nosotros />
        
        </>
    )
}
