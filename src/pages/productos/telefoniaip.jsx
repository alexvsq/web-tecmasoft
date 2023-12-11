import React from 'react'

import { motion } from "framer-motion"
import ScrollToTop from '../../components/ScrollToTop';

import "./telefoniaip.css"

import TextoEfecto from '../../components/TextoEfecto';

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

                <div className='subtitulo-pages'>
                <TextoEfecto text="  Centrales Telefonicas  " />
                    </div>
                <div className='telefonias-grid'>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/centrales1.jpg" alt="centrales1" />
                        <h2>SERVIDOR DE COMUNICACIONES IP PBX MODELO P550</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/centrales2.jpg" alt="centrales1" />
                        <h2>SERVIDOR DE COMUNICACIONES IP PBX MODELO S100</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/centrales3.jpg" alt="centrales1" />
                        <h2>SERVIDOR DE COMUNICACIONES IP PBX MODELO S50</h2>
                        <p>comprar</p>
                    </article>


                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/centrales4.jpg" alt="centrales1" />
                        <h2>SERVIDOR DE COMUNICACIONES IP PBX MODELO S20</h2>
                        <p>comprar</p>
                    </article>


                </div>



                
                <div className='subtitulo-pages'>
                <TextoEfecto text=" TELEFONOS IPS " />
                    </div>
                <div className='telefonias-grid'>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/ips1.jpg" alt="ips1" />
                        <h2>CÁMAR IP FANVIL MODELO CM60</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/ips2.jpg" alt="ips2" />
                        <h2>TELÉFONO IP FANVIL MODELO X1SG</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/ips3.jpg" alt="ips3" />
                        <h2>TELÉFONO IP FANVIL MODELO X3SG</h2>
                        <p>comprar</p>
                    </article>


                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/ips4.jpg" alt="ips4" />
                        <h2>TELÉFONO IP FANVIL MODELO X3SP LITE</h2>
                        <p>comprar</p>
                    </article>


                </div>



                
                <div className='subtitulo-pages'>
                <TextoEfecto text="  GATEWAY ANALOGICOS Y PRIMARIOS " />
                  </div>
                <div className='telefonias-grid'>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/gataway1.jpg" alt="gataway1" />
                        <h2>GATEWAY ANALÓGICO – TA3200</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/gataway2.jpg" alt="centrales2" />
                        <h2>GATEWAY ANALÓGICO – TE810</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/gataway3.jpg" alt="gataway3" />
                        <h2>GATEWAY E1</h2>
                        <p>comprar</p>
                    </article>


                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/centrales4.jpg" alt="centrales4" />
                        <h2>GATEWAY E2</h2>
                        <p>comprar</p>
                    </article>


                </div>




                <div className='subtitulo-pages'>
                <TextoEfecto text="  Modulos para PBX " />
                  </div>
                <div className='telefonias-grid'>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/pbx1.jpg" alt="pbx1" />
                        <h2>MODULO DE 1 PUERTOS 4G LTE</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/pbx2.jpg" alt="pbx2" />
                        <h2>MODULO DE 1 PUERTOS UMTS</h2>
                        <p>comprar</p>
                    </article>

                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/pbx3.jpg" alt="pbx3" />
                        <h2>MODULO DE 2 PUERTOS FXO</h2>
                        <p>comprar</p>
                    </article>


                    <article className='card-telefonia'>
                        <img src="/productos/telefonia/pbx4.jpg" alt="pbx4" />
                        <h2>MODULO DE 2 PUERTOS FXS</h2>
                        <p>comprar</p>
                    </article>


                </div>





            </section>

        </motion.div>
    )
}
