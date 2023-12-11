import React from 'react'

import ScrollToTop from '../components/ScrollToTop';

import { motion } from "framer-motion"

export default function Alamacenamientoredes() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ScrollToTop />

      <section style={{ paddingTop: "100px" }} className='container'>

        <div className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <h2>Storage <br /> <span> TrueNAS</span></h2>
            <p> TrueNAS es un sistema operativo basado en FreeBSD que proporciona servicios de almacenamiento en red. Permite convertir una computadora personal en un soporte de almacenamiento accesible desde red, por ejemplo para almacenamientos masivos de información, música, backups, etc. </p>

          </div>

          <aside className='introducion-video'>

            <iframe
              src="https://www.youtube-nocookie.com/embed/XNSN9IqchfQ?si=hX61Tn32kg7cy5V8"
              title="¿Qué es Firewall?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </aside>

        </div>

        <div className='dosarticleflex'>
          <article className='dosarticleuno'>
            <h2 className='subtitulo-pages'>¿Qué ventajas ofrece TrueNAS en comparación con otros sistemas operativos similares?</h2>
            <p>TrueNAS ofrece varias ventajas en comparación con otros sistemas operativos similares. En primer lugar, TrueNAS es un sistema operativo de almacenamiento diseñado específicamente para entornos empresariales y de alto rendimiento. Esto significa que está optimizado para ofrecer una gran capacidad de almacenamiento, alta disponibilidad y rendimiento rápido.

              Además, TrueNAS cuenta con una interfaz de usuario intuitiva y fácil de usar, lo que facilita la administración del sistema y la configuración del almacenamiento. También ofrece una amplia gama de características avanzadas, como compresión y deduplicación de datos, replicación remota y cifrado integrado.</p>


          </article>

          <article className='dosarticledos'>
            <h2 className='subtitulo-pages'>Principales características</h2>
            <p> Por su poco requerimiento de almacenamiento, puede ser instalado en un dispositivo de memoria extraíble como Compact Flash, Memorias USB o disco duro. </p>

            <div className='lista-article'>
              <ul>
                <li>Fácil instalación.</li>
                <li>Fácil administración remota, mediante páginas web accesibles desde cualquier computadora en red con un navegador.</li>
                <li>No es necesario tener conectado monitor ni teclado para su operación.</li>
                <li>RAID Hardware y Software</li>
              </ul>

            </div>
          </article>
        </div>


      </section>

     
    </motion.div>
  )
}
