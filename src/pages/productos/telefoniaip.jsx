import React from 'react'

import { motion } from "framer-motion"
import ScrollToTop from '../../components/ScrollToTop';

import "./telefoniaip.css"

export default function Telefoniaip() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ScrollToTop />

            <div style={{ height: "55px" }}></div>
            <div className='banner-productos3'>
                <div className='container'>
                    <div className='banner-productos-titulo'>
                        <h2>Telefonia IP</h2>

                        <p> En Tecmasoft, llevamos la comunicación empresarial al siguiente nivel con nuestra oferta de telefonía IP. Moderniza y simplifica tu infraestructura de comunicaciones, eliminando fronteras físicas y mejorando la eficiencia. Descubre la flexibilidad y la calidad de audio excepcional que ofrecemos para potenciar la conectividad de tu empresa. En PERULINUX, transformamos cómo te comunicas. </p>
                    </div>
                </div>
            </div>



            {/* 
          -------------------------------------------------------------------------------------------------------------
          FIN DEL BANNER TITULO        
          ------------------------------------------------------------------------------------------------------------ */}


            <section className='container'>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, quas fugiat eum fuga, itaque et quia molestiae dignissimos adipisci tenetur, quis labore ea sint molestias consectetur. Nesciunt quasi nostrum veritatis?</p>

            </section>

        </motion.div>
    )
}
