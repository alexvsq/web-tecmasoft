import React from 'react'

import './firewallcomerciales.css'

import { motion } from "framer-motion"

import ScrollToTop from '../../components/ScrollToTop';

export default function Firewallcomerciales() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ScrollToTop />

            <div style={{ height: "55px" }}></div>
            <div className='banner-productos'>
                <div className='container'>
                    <div className='banner-productos-titulo'>
                        <h2>Firewal Comerciales</h2>

                        <p>En un mundo digital en constante evolución, la seguridad es esencial. Nuestros firewalls comerciales en PERULINUX SAC van más allá de la protección convencional. Con tecnología avanzada y un enfoque proactivo, garantizamos la seguridad de tu red empresarial. Descubre una defensa robusta y confiable que se adapta a los desafíos cibernéticos actuales. En PERULINUX, tu seguridad es nuestra prioridad.</p>
                    </div>
                </div>
            </div>



            {/* 
        -------------------------------------------------------------------------------------------------------------
        FIN DEL BANNER TITULO        
        ------------------------------------------------------------------------------------------------------------ */}


            <section className='container'>

                <div className='productos-introducion'>
                    <div className='productos-introducion-titulo'>

                        <h2>UTM SOPHOS XGS</h2>
                        <p> Dispositivos de firewall next-gen </p>

                    </div>

                    <aside className='introducion-video'>
                        <iframe
                            src="https://www.youtube.com/embed/ygMB1z12Od8?si=i1DO_DHlMcpUNLpT"
                            title="¿Qué es Firewall?"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </aside>

                </div>
                <p className='subtitulo-pages'>ARQUITECTURA XSTREAM</p>

                <div className='herramientas-grid'>

                    <article className='herramineta-card'>
                        <h2>CUBRIMOS EL PERÍMETRO</h2>
                        <ul>
                            <li>Sophos Firewall lleva su red hasta donde deba llegar con una amplia gama de dispositivos de hardware modulares, soporte para plataformas virtuales y en la nube, y dispositivos perimetrales de acceso seguro como nuestros dispositivos SD-RED y puntos de acceso inalámbricos APX.</li>
                        </ul>
                    </article>

                    <article className='herramineta-card'>
                        <h2>ARQUITECTURA XSTREAM</h2>
                        <ul>
                            <li> Los firewalls de la serie XGS de Sophos combinan lo mejor de dos mundos: la flexibilidad de una CPU multinúcleo de alto rendimiento para la inspección detallada de paquetes con las ventajas de rendimiento de un procesador de flujo Xstream dedicado para la aceleración inteligente de aplicaciones. </li>
                        </ul>
                    </article>

                    <article className='herramineta-card'>
                        <h2>POTENTE PROTECCIÓN EN TODA LA GAMA DE PRECIOS</h2>
                        <ul>
                            <li>Sophos Firewall y la serie XGS ofrecen la mejor visibilidad, protección y rendimiento del sector. Garantizamos una protección sin concesiones para aplicaciones desde pequeñas sucursales hasta compañías distribuidas.</li>
                        </ul>
                    </article>


                </div>

                <div>

                    <p className='subtitulo-pages'>EN LA NUBE Y VIRTUAL</p>
                    <div className='productos-card-grid'>

                        <div className='productos-card-nube'>
                            <img src="/productos/aws-logo.png" alt="aws logo" />
                            <p>Como socio tecnológico avanzado de AWS, Sophos ha sido validado como proveedor de competencia de seguridad de AWS, vendedor de AWS Marketplace y socio del sector público de AWS. Sophos Firewall está disponible en AWS Marketplace con modelos de licencias de pago por uso (PAYG) y de licencias propias (BYOL) para que pueda adaptarlo a sus necesidades</p>
                        </div>


                        <div className='productos-card-nube'>
                            <img src="/productos/vmware-logo.png" alt="aws logo" />
                            <p>Como socio tecnológico avanzado de AWS, Sophos ha sido validado como proveedor de competencia de seguridad de AWS, vendedor de AWS Marketplace y socio del sector público de AWS. Sophos Firewall está disponible en AWS Marketplace con modelos de licencias de pago por uso (PAYG) y de licencias propias (BYOL) para que pueda adaptarlo a sus necesidades</p>
                        </div>


                        <div className='productos-card-nube'>
                            <img src="/productos/nutanix-logo.jpg" alt="aws logo" />
                            <p>Como socio tecnológico avanzado de AWS, Sophos ha sido validado como proveedor de competencia de seguridad de AWS, vendedor de AWS Marketplace y socio del sector público de AWS. Sophos Firewall está disponible en AWS Marketplace con modelos de licencias de pago por uso (PAYG) y de licencias propias (BYOL) para que pueda adaptarlo a sus necesidades</p>
                        </div>


                    </div>
                </div>

            </section>


            <div style={{ width: "100%", height: "2px", backgroundColor: "var(--bordes)", margin: "50px 0" }}></div>

            <section className='container'>


                <div className='productos-introducion'>
                    <div className='productos-introducion-titulo'>

                        <h2>UTM FORTINET</h2>
                        <p> Los FortiGate NGFW protegen cualquier borde, a cualquier escala. </p>

                    </div>

                    <aside className='introducion-video'>
                        <iframe
                            src="https://www.youtube.com/embed/rqJuVJGSef4?si=ct23f6HZRjuXmfHu"
                            title="¿Qué es Firewall?"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </aside>

                </div>



                <div className='dosarticleflex'>
                    <article className='dosarticleuno'>
                        <img src="/productos/imagen-productos.jpg" alt="" />
                    </article>

                    <article className='dosarticledos'>
                        <h2 className='subtitulo-pages'>Novedades en FortiOS 7.2</h2>
                        <p> Los FortiGate NGFW ofrecen una seguridad empresarial líder en la industria para cualquier borde y a cualquier escala, con visibilidad completa y protección contra amenazas. Las organizaciones pueden integrar la seguridad en su arquitectura de TI híbrida y crear redes basadas en la seguridad para lograr: </p>

                        <div className='lista-article'>
                            <ul>
                                <li> Seguridad ultrarrápida, de extremo a extremo </li>
                                <li> Defensa consistente en tiempo real con los servicios de FortiGuard </li>
                                <li> Excelente experiencia del usuario con unidades de procesamiento de seguridad </li>
                                <li> Eficiencia operativa y flujos de trabajo automatizados </li>
                            </ul> 

                        </div>

                        <p> Los FortiGate NGFW permiten que las organizaciones puedan crear redes de alto rendimiento, ultraescalables e impulsadas por la seguridad </p>
                        <p> Para asegurarse de que el malware no penetre en su red a través del tráfico cifrado, debe haber una inspección confiable y de alto rendimiento. Compruebe los resultados de FortiGate 7121F en una de las pruebas más importantes de inspección profunda SSL y protección contra amenazas. </p>
                    </article>
                </div>
            </section>
  
        </motion.div>
    )
}
