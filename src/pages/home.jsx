import {React, useEffect} from 'react'

import Header from '../header.jsx'
import Servicios from '../servicios.jsx'
import Elegir from '../elegir.jsx'
import Introduccion from '../introduccion.jsx'
import Productos from '../productos.jsx'
import ServiciosCloud from '../servicios-cloud.jsx'
import Testimonios from '../testimonios.jsx'
import Nosotros from "../nosotros.jsx"

import { Element, scroller } from 'react-scroll';

export default function Home() {
    useEffect(() => {
        // Obtén la ubicación del hash actual
        const hash = window.location.hash;
    
        // Si hay un hash y es el que estamos buscando (p. ej., #nosotros)
        if (hash && hash === '#nosotros') {
          // Realiza un scroll suave hacia la sección "Nosotros"
          scroller.scrollTo('nosotros', {
            smooth: true,
            duration: 300,
          });
        }
      }, []); // Asegúrate de ejecutar esto solo una vez al cargar la página
    
    return (
        <>

            <Header />
            <Introduccion />
            <Servicios />
            <Elegir />
            <Productos />
            <ServiciosCloud />
            <Testimonios />

            <Element name="nosotros">
            <Nosotros />
            </Element>

        </>
    )
}
