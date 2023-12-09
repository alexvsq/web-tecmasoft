import React from 'react'
import './servicios.css'
import TextoEfecto from './components/TextoEfecto'
import Boton1 from './components/boton1.jsx'
import BannerServicios from './banner-servicios.jsx'

export default function Servicios() {
    return (
        <>
            <BannerServicios />

            <div className='container ' id='servicios'>

                <section className='titulo-servicios'>

                    <h2>Nuestros <br /> <span>Servicios</span></h2>
                    <p> <TextoEfecto text=" Nuestros servicios especializados impulsan tu empresa con soluciones a medida. Con un enfoque personalizado, llevamos tu infraestructura al siguiente nivel." /></p>

                </section>
            </div>



            <div  className='flex-servicios'>

                <div className='blocke-1 '>



                    <section className='card-servicio'>
                        <img src="/servicios/huella2.svg" alt="Seguridad Tecnológica" />
                        <h2>Seguridad <br /> <strong>Tecnológica</strong></h2>
                        <ul>
                            <li>Seguridad perimetral</li>
                            <li>Ethical Hacking</li>
                            <li>Ciberseguridad</li>
                        </ul>

                        <div>
                            <Boton1
                                texto='Más Información'
                                path={"/seguridadtecnologica"}
                            />
                        </div>

                    </section>

                </div>

                <div className='blocke-2'>
                    <section className='card-servicio'>
                        <img src="/servicios/gestion-empresarial.svg" alt="Gestión Empresarial " />
                        <h2>Gestión<br /> <strong>  Empresarial </strong></h2>
                        <ul>
                            <li>Sistema de Ticket</li>
                            <li>Inventario</li>
                            <li>Alfresco</li>
                        </ul>

                        <div>
                        <Boton1
                                texto='Más Información'
                                path={"/gestionempresarial"}
                            />
                        </div>

                    </section>
                </div>
            </div>



            
            <div className='flex-servicios'>

                <div className='blocke-1 '>



                    <section className='card-servicio'>
                        <img src="/servicios/alamacenamiento-redes.svg" alt="Almacenamiento y Redes " />
                        <h2>Almacenamiento y <br /> <strong>Redes </strong></h2>
                        <ul>
                            <li>Storage TrueNAS</li>
                            <li>Configuración de Switches</li>
                            <li>Soporte de Servidores</li>
                        </ul>

                        <div>
                        <Boton1
                                texto='Más Información'
                                path={"/alamacenamientoredes"}
                            />
                        </div>

                    </section>

                </div>

                <div className='blocke-2'>
                    <section className='card-servicio'>
                        <img src="/servicios/infraestructura-tecnologica.svg" alt="Infraestructura Tecnológica" />
                        <h2>Infraestructura<br /> <strong> Tecnológica </strong></h2>
                        <ul>
                            <li>Virtualización & Backup</li>
                            <li>Soporte de Servidores</li>
                            <li>Cableado Estructurado</li>
                        </ul>

                        <div>
                        <Boton1
                                texto='Más Información'
                                path={"/infraestructura"}
                            />
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}
