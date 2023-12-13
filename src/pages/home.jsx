import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import Header from '../header.jsx';
import Servicios from '../servicios.jsx';
import Elegir from '../elegir.jsx';
import Introduccion from '../introduccion.jsx';
import Productos from '../productos.jsx';
import ServiciosCloud from '../servicios-cloud.jsx';
import Testimonios from '../testimonios.jsx';
import Nosotros from '../nosotros.jsx';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion"

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Utilizar react-router para obtener la ubicación actual
    const hash = location.hash;

    // Manejar el scroll solo si el hash es el que estamos buscando
    if (hash && hash === '#nosotros') {
      // Realizar un scroll suave hacia la sección "Nosotros"
      scroller.scrollTo('nosotros', {
        duration: 500, // Ajustar según preferencias
        offset: -50, // Puedes ajustar un desplazamiento adicional si es necesario
      });
    }
  }, [location]);

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >

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
    </motion.div>
  );
}
