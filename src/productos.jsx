import { React, useState } from 'react'
import './productos.css'
import { Link } from 'react-router-dom'
import Tarjeta from './components/tarjeta'

export default function Productos() {
    const [showRedhat, setShowRedhat] = useState(false);
    const [showSuse, setShowSuse] = useState(false);
    const [showZextras , setShowZextras] = useState(false);


    const toggleRedhat = () => {
        setShowRedhat(!showRedhat);
    }
    const toggleSuse = () => {
        setShowSuse(!showSuse);
    }
    const toggleZextras = () => {
        setShowZextras(!showZextras);
    }

    return (
        <section className='container' id='productos'>
            <header className='titulo-productos'>

                <p>Nuestros Productos</p>
                <div style={{ width: '290px', height: '1px', backgroundColor: 'var(--verde)' }}></div>
            </header>

            <main className='productos-grid'>
                <Link to="firewallcomerciales">
                    <article className='card-producto1'>
                        <img className='card-producto1-icon' src="/productos/firewall-comerciales.svg" alt="" />
                        <h3>Firewall Comerciales</h3>
                        <ul>
                            <li>UTM Sophos XG</li>
                            <li>UTM Fortinet</li>
                            <li>FortiMail</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>

                <Link to="antiviruscomerciales">
                    <article className='card-producto1'>
                        <img src="/productos/antivirus-antiransomware.svg" alt="" />
                        <h3>Antivirus Antiransomware</h3>
                        <ul>
                            <li>Sophos Antivirus </li>
                            <li>Kaspersky</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>

                <Link to="antispam">

                    <article className='card-producto1'>
                        <img src="/productos/antispam.svg" alt="" />
                        <h3>Antispam Comerciales</h3>
                        <ul>
                            <li>Sophos Mail</li>
                            <li>Magic Spam</li>
                            <li>FortiMail</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>

                <Link to="telefoniaip">

                    <article className='card-producto1'>
                        <img src="/productos/telefonia.svg" alt="" />
                        <h3>Telefonía IP</h3>
                        <ul>
                            <li>Centrales Telefónicas</li>
                            <li>Módulos de Telefonía</li>
                            <li>Sistema de Borde Controler (SBC)</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>



            </main>

            <div className='flex-grid-productos'>

                <Tarjeta
                    show={showRedhat}
                    title="RED HAT"
                    mainText="Evoluciona constantemente para brindar flexibilidad y confianza en las nuevas áreas que conquista la TI empresarial, desde la nube pública hasta el extremo de la red. Es la base estable que posibilita una gran cantidad de innovaciones."
                    subText="Red Hat Enterprise Linux"
                    subtitle="El valor de Red Hat Enterprise Linux "
                    listItems={[
                        "Zimbra como Servicio en la Nube  ",
                        "Servidor de Zimbra instalado en sus Servidores Onpremise",
                        "Servidor de Correo Hibrida, Zimbra Opensource integrado con otras plataformas de correo como Exchance, Office 365, Gsuite, Zimbra Professional."
                    ]}
                    toolCards={[
                        {
                            title: "VENTAJAS DE LAS SUSCRIPCIONES",
                            items: ["Red Hat Enterprise Linux no solo le ofrece un sistema operativo, sino que también lo conecta con el amplio ecosistema de partners de nube, de software y de hardware de Red Hat, e incluye un servicio de soporte permanente. El último lanzamiento fue el de RHEL 9, pero puede acceder a todas las versiones compatibles con un ciclo de vida de 10 años, para actualizar el sistema cuando le resulte más conveniente y adoptar las funciones nuevas a medida que las necesite."],
                        },
                        {
                            title: "ARQUITECTURAS COMPATIBLES   ",
                            items: [
                                "Red Hat Enterprise Linux se puede optimizar para ejecutarla en los servidores o las estaciones de trabajo de alto rendimiento. Además, admite diversas arquitecturas de hardware, como x86, ARM, IBM Power, IBM Z e IBM LinuxONE. Nuestra estrecha colaboración con las comunidades upstream y los partners de hardware nos permite ofrecerle una plataforma confiable para varios casos prácticos y un entorno de aplicaciones uniforme en las implementaciones virtuales, físicas y de nube.",
                            ],
                        },
                        {
                            title: "AUTOMATIZACIÓN Y GESTIÓN                            ",
                            items: [
                                "Los administradores pueden obtener una experiencia uniforme y estable para dedicar más tiempo a las innovaciones y menos a las tareas repetitivas que son propensas a los errores. RHEL incluye Red Hat Insights, un servicio gestionado para el análisis y la resolución de los problemas que genera alertas permanentes sobre los puntos vulnerables y ofrece orientación específica para que las empresas aprovechen al máximo el tiempo de actividad y eviten los incidentes."
                            ],
                        },
                    ]}
                />


                <Tarjeta
                    show={showSuse}
                    title="SUSE LINUX"
                    mainText="SUSE Linux Enterprise Server (SLES) es una plataforma adaptable y fácil de gestionar que permite a los desarrolladores y administradores implantar cargas de trabajo esenciales para el negocio en entornos locales, en la nube y en el perímetro."


                    subText="Beneficios"
                    listItems={[
                        "Simplifique su entorno de TI                        ",
                        "Modernice su infraestructura de TI",
                        "Acelere la innovación"
                    ]}
                    subtitle="¿Por qué optar por SUSE Linux Enterprise Server for SAP Applications? "
                    toolCards={[
                        {
                            title: "Mejore la fiabilidad del SAP servicio",
                            items: ["Reduzca el tiempo de inactividad de los sistemas SAP importantes mediante la detección automática de errores del sistema y el failover (relevo de funciones multinodo) para la recuperación. Las funciones de seguridad mejoradas protegen los sistemas SAP HANA y los dispositivos de almacenamiento remoto contra el acceso no autorizado. La supervisión de datos del sistema permite evitar problemas de forma proactiva."],
                        },
                        {
                            title: "Implementación de SAP servicios agilizada   ",
                            items: [
                                "Automatice la implantación de la pila de software SAP para nuevos servicios y la migración del sistema SAP S/4HANA con una solución para implantaciones in situ y en la nube. Las implantaciones incluyen prácticas recomendadas para acelerar el aprovisionamiento de instancias en el servidor y la nube y para reducir el riesgo de errores.",
                            ],
                        },
                        {
                            title: "Reducción de la complejidad en la gestión de TI ",
                            items: [
                                "Reduzca las cargas de trabajo de los administradores de sistemas con funciones de automatización y asistentes de configuración guiados para configurar y mantener sistemas. El personal de TI se centra en ofrecer soluciones innovadoras en lugar de en el mantenimiento rutinario."
                            ],
                        },
                    ]}
                />


                <Tarjeta
                    show={showZextras}
                    title="Zextras Carbonio"
                    mainText="Módulos nativo para Zimbra Open Source."


                    subText="Beneficios"
                    listItems={[
                        "OPTIMIZACIÓN DEL ALMACENAMIENTO DE ZIMBRA ",
                        "COPIA DE SEGURIDAD Y RESTAURACIÓN EN TIEMPO REAL",
                        "VARIOS MÉTODOS DE AUTENTIFICACIÓN"
                    ]}
                    subtitle="¿Por qué optar por Zextras Carbonio "
                    toolCards={[
                        {
                            title: "OUTLOOK SYNC",
                            items: ["Utilizando la extensión Zextras active sync para Zimbra puedes sincronizar los correos electrónicos, los contactos, las tareas y el calendario con Outlook para Windows y con la aplicación Windows Mail"],
                        },
                        {
                            title: "SINCRONIZACIÓN CON DISPOSITIVO MÓVIL ",
                            items: [
                                "Puedes sincronizar tu buzón de correo Zimbra con cualquier cliente que soporte el Protocolo Exchange ActiveSync*, incluyendo dispositivos iOS y Android.",
                            ],
                        },
                        {
                            title: "DELEGACIÓN DE ADMINISTRACIÓN ",
                            items: [
                                "Minimiza los gastos en TI y maximiza la capacidad de administración utilizando la extensión Zextras Admin con funcionalidad multitenencia, delegando los derechos de administrador rápidamente y administrando distintos propietarios, evitando así conflictos."
                            ],
                        },
                    ]}
                />

                <section className='flex-grid-productos-texto'>
                    Descubre soluciones avanzadas que potenciarán el rendimiento de tu empresa, cada producto en nuestra selección está diseñado para impulsar la eficiencia, seguridad y rendimiento de tu empresa. Con tecnología de vanguardia, te ofrecemos las herramientas que necesitas para prosperar en la era digital.

                    <div style={{ width: '100px', height: "1px", backgroundColor: "var(--verde)", marginTop: "15px" }}></div>

                </section>

                <aside className='flex-grid-productos-cards'>

                    <article onClick={toggleRedhat} className='card-producto2'>
                        <img className='card-producto2-icon' src="/productos/redhat-icon.svg" alt="redhat" />

                        <p>Red Hat</p>

                        <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                    </article>



                    <article onClick={toggleSuse} className='card-producto2'>
                        <img className='card-producto2-icon' src="/productos/linux-icon.svg" alt="redhat" />

                        <p>Suse Linux</p>

                        <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                    </article>



                    <article className='card-producto2'>
                        <img className='card-producto2-icon' src="/productos/servidores-cloud-icon.svg" alt="redhat" />

                        <p>Servidores Cloud</p>

                        <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                    </article>


                    <article className='card-producto2'>
                        <img className='card-producto2-icon' src="/productos/storage-icon.svg" alt="redhat" />

                        <p>Storage</p>

                        <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                    </article>



                    <article className='card-producto2'>
                        <img className='card-producto2-icon' src="/productos/certificados-icon.svg" alt="redhat" />

                        <p>Certificados Digitales</p>

                        <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                    </article>



                    <article onClick={toggleZextras} className='card-producto2'>
                        <img className='card-producto2-icon' src="/productos/zextras-icon.svg" alt="redhat" />

                        <p>Zextras Carbonio</p>

                        <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                    </article>


                </aside>

            </div>

        </section>

    )
}
