import {React, useState} from 'react'
import './tarjeta.css'

export default function Tarjeta({show}) {

    
    return (
        <div className='tarjeta-backgroud' style={show ? { display: "block" } : { display: "none" } } >

            <section style={{ paddingTop: "20px" }} className='container'>

                <div className='seguridad-tecnologica-introducion'>
                    <div className='titulo-pages'>

                        <h2 >Seguridad  <span>Perimetral</span></h2>
                        <p> La evolución de la tecnología y la constante demanda de seguridad han permitido que los sistemas de seguridad perimetral en redes evolucionen para ofrecer una mayor confiabilidad a los usuarios sobre la transparencia y protección de su información para el acceso de diferentes servicios. Hoy en día existen muchas personas que usan sus conocimientos y ética profesional de una forma incorrecta al ingresar a redes informáticas restringidas ocasionado pérdidas multimillonarias alrededor del mundo.
                            La seguridad perimetral de una empresa es primordial. Los ataques por red y pérdidas de información ocasionan un gran trastorno y no solo la imagen si no también el funcionamiento y progreso de una empresa se ven afectados. Una plataforma robusta para el control de accesos y protección de los servicios informáticos garantiza un correcto aprovechamiento de la infraestructura y garantiza la integridad y confidencialidad de la información.</p>

                    </div>
                    {/*  www.youtube-nocookie.com/embed/ */}
                    <aside className='introducion-video'>
                        <iframe
                            key='gasdasdc'
                            src="https://www.youtube-nocookie.com/embed/mcTCrTneeco"
                            title="¿Qué es Firewall?"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </aside>

                </div>

                <div className='dosarticleflex'>
                    <article className='dosarticleuno'>
                        <h2 className='subtitulo-pages'>Funciones de una buena seguridad perimetral informática</h2>
                        <p>La seguridad perimetral que protege tus redes debe cumplir cuatro funciones básicas:</p>

                        <div className='lista-article'>
                            <ul>
                                <li>Resistir a los ataques externos</li>
                                <li>Identificar los ataques sufridos y alertar de ellos</li>
                                <li>Aislar y segmentar los distintos servicios y sistemas en función de su exposición a ataques</li>
                                <li>Filtrar y bloquear el tráfico, permitiendo únicamente aquel que sea absolutamente necesario</li>
                            </ul>

                        </div>
                    </article>

                    <article className='dosarticledos'>
                        <h2 className='subtitulo-pages'>Cómo proteger a tu empresa?</h2>
                        <p>La mejor manera de dotar de seguridad perimetral informática a tu empresa es contratando los servicios de una empresa con experiencia como Perú Linux Ayudamos a establecer y gestionar los sistemas de tu empresa mediante:</p>

                        <div className='lista-article'>
                            <ul>
                                <li>Un diseño de una topología red adecuada</li>
                                <li>Recomendaciones de soluciones eficientes</li>
                                <li>Instalación y configuración de elementos red que sean necesarios</li>
                                <li>Proporción de soporte y equipos para el seguimiento y la administración de la red</li>
                            </ul>

                        </div>
                    </article>
                </div>


                <div style={{ marginTop: "50px" }}>

                    <p className='subtitulo-pages'>Herramientas de seguridad perimetral informática</p>

                    <div className='herramientas-grid'>

                        <article className='herramineta-card'>
                            <h2>Firewall</h2>
                            <ul>
                                <li>Control de tráfico de red desde y a hacia Internet.</li>
                                <li>Protección contra ataques externos.</li>
                                <li>Control de usuarios.</li>
                                <li>Generación y administración de VPN´s.</li>
                                <li>Conexión para equipos remotos (portátiles y dispositivos móviles).</li>
                                <li>Gestión de ancho de banda de internet.</li>
                            </ul>
                        </article>

                        <article className='herramineta-card'>
                            <h2>Sistemas de Detección de Intrusos (IDS)</h2>
                            <ul>
                                <li>Un IDS puede compartir u obtener información de otros sistemas como firewalls, routers y switches, lo que permite reconfigurar las características de la red de acuerdo a los eventos que se generan. También permite que se utilicen protocolos como SNMP (Simple Network Management Protocol) para enviar notificaciones y alertas a otras máquinas de la red. Esta característica de los IDS recibe el nombre de interoperabilidad.</li>
                            </ul>
                        </article>

                        <article className='herramineta-card'>
                            <h2>Monitorización del Perímetro: Detección y Prevención de Intrusos</h2>
                            <ul>
                                <li>Un perímetro de la red es el límite entre la esfera privada y de gestión local y propiedad de una red y el público en general y proveedores gestionados lado de la red y su monitorización es imprescindible para llevar un buen control de cualquier equipo que quiera entrar en la red de la empresa.</li>

                                <li>Para monitorizar la red perimetral y prevenir la intrusión hay varios métodos como pueden ser:</li>
                            </ul>
                        </article>


                    </div>

                </div>

            </section>

          
        </div>
    )
}
