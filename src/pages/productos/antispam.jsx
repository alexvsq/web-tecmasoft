import React from 'react'

import './antispam.css'

import { motion } from "framer-motion"
import ScrollToTop from '../../components/ScrollToTop';

export default function Antispam() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <ScrollToTop />

            <div style={{ height: "55px" }}></div>
            <div className='banner-productos4'>
                <div className='container'>
                    <div className='banner-productos-titulo'>
                        <h2>Antispam Comerciales</h2>

                        <p>En un mundo digital abrumado por correos no deseados, nuestra oferta de Antispam Comerciales en Tecmasoft es tu escudo infalible. Mantén tu bandeja de entrada limpia y eficiente con soluciones especializadas que filtran y bloquean el spam intrusivo. Descubre cómo podemos proteger tu comunicación digital y garantizar que solo recibas lo que realmente importa. En Tecmasoft, defendemos la integridad de tu correo electrónico.</p>
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

                        <h2> Sophos Email </h2>
                        <p> Seguridad predictiva del correo electrónico en la nube con inteligencia artificial </p>

                    </div>

                    <aside className='introducion-video'>
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/f6poTqtBb54?si=gwiwEvx0NNjuDSRh"
                            title="¿Qué es Firewall?"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </aside>

                </div>
                <p className='subtitulo-pages'>Evite las amenazas de phishing e impostores</p>

                <div className='herramientas-grid'>

                    <article className='herramineta-card'>
                        <h2>Impida el acceso a los impostores</h2>
                        <ul>
                            <li>Identifique automáticamente sus objetivos de alto perfil para detectar ataques de suplantación de identidad sin malware y de estafa por correo electrónico corporativo comprometido y, después, bloquee el ataque mediante análisis con Machine Learning del contenido del mensaje.</li>
                        </ul>
                    </article>

                    <article className='herramineta-card'>
                        <h2> Deje entrar a los remitentes de confianza </h2>
                        <ul>
                            <li> Autentique a todos sus remitentes sin bloquear los mensajes de correo legítimos mediante técnicas de autenticación SPF, DKIM y DMARC y el análisis de anomalías en encabezados de correo electrónico. </li>
                        </ul>
                    </article>

                    <article className='herramineta-card'>
                        <h2>Evite que el malware llegue a la bandeja de entrada</h2>
                        <ul>
                            <li> Nuestra protección multicapa cuenta con más de 35 años de información sobre amenazas, análisis de reputación y comportamientos, y Machine Learning de vanguardia para evitar que el malware y las URL maliciosas lleguen a sus bandejas de entrada. </li>
                        </ul>
                    </article>
                    <article className='herramineta-card'>
                        <h2>Tecnología de Deep Learning</h2>
                        <ul>
                            <li> Gracias a la integración del Deep Learning, una forma avanzada de Machine Learning, Intercept X está cambiando la seguridad de los endpoints de un enfoque reactivo a uno predictivo a fin de proteger contra amenazas tanto conocidas como nuevas. Aunque muchos productos afirman utilizar el aprendizaje automático, no todo el aprendizaje automático se crea de la misma manera. El Deep Learning ha superado sistemáticamente otros modelos de Machine Learning en la detección de malware. </li>
                        </ul>
                    </article>
                    <article className='herramineta-card'>
                        <h2>Protección posentrega</h2>
                        <ul>
                            <li> Elimine automáticamente los correos electrónicos de phishing que contengan nuevas URL infectadas tan pronto como cambie el estado de la amenaza con la monitorización continua de los buzones de correo de Microsoft 365. </li>
                        </ul>
                    </article>



                </div>

            </section>


            <div style={{ width: "100%", height: "2px", backgroundColor: "var(--bordes)", margin: "50px 0" }}></div>

            <section className='container'>


                <div className='productos-introducion'>
                    <div className='productos-introducion-titulo'>

                        <h2> The MagicSpam </h2>
                        <p> MagicSpam es un potente software antispam que se instala directamente en el servidor de correo o panel de control. </p>

                    </div>

                    <aside className='introducion-video'>

                    </aside>

                </div>

                <div className='subtitulo-pages'>La diferencia de MagicSpam</div>

                <div className='herramientas-grid'>

                    <article className='herramineta-card'>
                        <h2>Tecnología superior probada
                        </h2>
                        <ul>
                            <li>Nuestra tecnología antispam protege millones de bandejas de entrada en todo el mundo.</li>
                        </ul>
                    </article>

                    <article className='herramineta-card'>
                        <h2> Fácil de instalar, aún más fácil de usar
                        </h2>
                        <ul>
                            <li> Bloquea el spam a nivel de conexión y te brinda control total de tus políticas. </li>
                        </ul>
                    </article>

                    <article className='herramineta-card'>
                        <h2> Reduce el ancho de banda y los gastos generales </h2>
                        <ul>
                            <li> Más del 95% de todos los intentos de conectarse a su servidor provienen de spam. ¿Por qué procesarlo todo? </li>
                        </ul>
                    </article>
                    <article className='herramineta-card'>
                        <h2>Mejor protección del día CERO
                        </h2>
                        <ul>
                            <li> MagicSpam's Mail Server Profiling stops not only 'todays' spam but tommorow's as well. </li>
                        </ul>
                    </article>



                </div>

            </section>

            <div style={{ width: "100%", height: "2px", backgroundColor: "var(--bordes)", margin: "50px 0" }}></div>


            <section className='container'>


                <div className='productos-introducion'>
                    <div className='productos-introducion-titulo'>

                        <h2> FortiMail </h2>
                        <p> Puerta de enlace de correo electrónico segura que protege a los usuarios </p>

                    </div>

                    <aside className='introducion-video'>
                        <iframe
                            src="https://www.youtube-nocookie.com/embed/zm-aNQSRjBk?si=Eo0uzxla5VzDnq_T"
                            title="¿Qué es Firewall?"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </aside>

                </div>



                <div className='dosarticleflex'>
                    <article className='dosarticleuno'>
                        <h2 className='subtitulo-pages'> ¿Qué es y cómo funciona FortiMail? </h2>
                        <p> Si no quieres que te hackeen por medio de un simple correo electrónico como le pasó al primo de un amigo, no te preocupes que hoy te hablaremos del FortiMail. Lo primero que necesitamos saber es que FortiMail se integra con el famosísimo Security Fabric. Pero, ¿qué es y cuáles son sus características?. </p>
                        <p>Cuando se integra con el Security Fabric, FortiMail implementa más de una docena de técnicas de inspección de contenido, protocolos y remitentes para proteger las redes del spam, en conjunto, estas técnicas bloquean el 99,98% del spam en condiciones reales.

                            Los paneles de control, los informes, las cuarentenas centrales y los controles del usuario final en tiempo real brindan a las organizaciones una visibilidad total y un control sencillo del tráfico de correo electrónico.</p>


                    </article>

                    <article className='dosarticledos'>



                    </article>
                </div>



            </section>


        </motion.div>
    )
}
