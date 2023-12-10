import React from 'react'

import ScrollToTop from '../components/ScrollToTop';

import {motion} from "framer-motion"

export default function Gestionempresarial() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >

      <ScrollToTop />

      <section style={{ paddingTop: "100px" }} className='container'>

        <div className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <h2>Sistema de <br /> <span>Ticket e Inventario</span></h2>
            <p> Magnífico software que nos permitirá controlar el hardware de nuestra compañía de manera fácil, y no sólo eso, incluso podremos crear un potente sistema de tickets con nuestro usuario, con seguimiento de incidencias. </p>

          </div>

          <aside className='introducion-video'>

            <iframe
              src="https://www.youtube-nocookie.com/embed/irPFqIXpFtw"
              title="¿Qué es Firewall?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </aside>

        </div>

        <div className='dosarticleflex'>
          <article className='dosarticleuno'>
            <h2 className='subtitulo-pages'>¿QUÉ ES GLPI?</h2>
            <p>GLPI, es una herramienta web en software libre que ofrece una gestión integral del inventario informático de una empresa además de incluir un sistema de gestión de incidencias (ticketing / helpdesk).
              La herramienta está desarrollada para entornos LAMP (Apache-PHP-MySQL), por lo que puede ser instalada tanto en servidores Windows como Linux y su fácil instalación y manejo permite gestionar todo el soporte y mantenimiento de una empresa de una manera rápida y sencilla, por lo que el despliegue y la puesta en marcha son bastante reducidos.
              Este doble papel de gestor de inventario (equipos, servidores, periféricos, licencias de software, topología de red, reserva de recursos compartidos, etc) y helpdesk para el seguimiento de intervenciones, permite a los administradores, y al personal de soporte, vincular las intervenciones realizadas a Usuarios y a equipos, generándose así un historial completo del mantenimiento realizado.</p>


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

          <p className='subtitulo-pages'>Herramientas de seguridad</p>

          <div className='herramientas-grid'>

            <article className='herramineta-card'>
              <h2>A Nivel de Inventario</h2>
              <ul>
                <li>Detección, Registro y Monitoreo de servidores, ordenadores, impresoras, multifuncionales, y prácticamente cualquier otro dispositivo u equipo de red, mediante la complementación de otras herramientas como OCS Inventory y FusionInventory.</li>
                <li>Gestión de información técnica, comercial y financiera, generación de reportes y solicitudes, o carga de documentos relacionados con los ítems del inventario gestionado, tanto de equipos, piezas, consumibles u otros materiales relacionados.</li>
              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>A Nivel de Estadísticas</h2>
              <ul>
                <li>Generación de estadísticas globales o por categorías, tales como: Por técnico, hardware, usuario, entre otros.</li>
                <li>Generación de Informes exportables en diversos formatos (PNG, SVG, CSV).</li>
              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>A Nivel de Gestión de la Información</h2>
              <ul>
                <li>Permite la creación y uso de una sección de "Base de Datos de Conocimientos" y "Preguntas Frecuentes".</li>

                <li>Facilita la administración de los contenidos mediante el manejo de los usuarios (perfiles, grupos, entre otros).</li>

                <li>Posee una Interfaz de usuario (UI) simplificada y orientada a servicios.</li>

                <li>Ofrece la visualización de una línea de tiempo y del ciclo de vida (asignación, planificación, validación, tareas, seguimientos, soluciones, entre otros) de los tickets abiertos por incidentes o solicitudes de servicio.</li>

                <li>Permite la creación y/o actualización de tickets vía correo electrónico IMAP / POP.</li>

                <li>Posee un juego de plantillas de tickets predefinidos para incidentes, solicitud de servicio, soluciones, y tareas.</li>

                <li>Facilita el manejo de la aplicación bajo criterios de disponibilidad y horas de atención.</li>

                <li>Ofrece el manejo de Acuerdos de niveles de servicio (SLA), Objetivo de nivel de servicio (SLT) y Acuerdo de nivel operacional (OLA).</li>
              </ul>

            </article>


          </div>

        </div>

      </section>

      <div style={{ width: "100%", height: "2px", backgroundColor: "var(--bordes)", margin: "50px 0" }}></div>


      {/* ETHICAL HACKING */}

      <section className='container'>

        <div className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <h2><span>ALFRESCO</span></h2>
            <p> Alfresco ofrece innovadoras soluciones de gestión de contenido que conectan, gestionan y protegen la información más importante de la empresa, independientemente de su ubicación.
              Con el sistema de ECM nativo de la nube de Alfresco, puede gestionar el contenido desde cualquier lugar, conectar la información con los usuarios en cualquier ubicación y permitir acceso a las aplicaciones con cualquier dispositivo. Alfresco permite a las empresas aumentar la productividad de los trabajadores, gestionar información de valor y ofrecer experiencias excepcionales a los clientes. </p>

          </div>

          <aside className='introducion-video'>

            <iframe
              src="https://www.youtube-nocookie.com/embed/ltnVCLKTCns"
              title="¿Qué es Firewall?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </aside>

        </div>

        <div style={{marginTop:"40px"}} className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <div className='subtitulo-pages'>Capacidades ECM de Alfresco</div>
            <p> Los expertos en seguridad informática aplican varios métodos y técnicas para proteger a dichos sistemas de cualquier ataque de hackers o crackers malintencionados para evitar que estos roben o borren información. Uno de esos métodos es el Ethical Hacking.
              El objetivo fundamental del Ethical Hacking es explotar las vulnerabilidades existentes en los sistemas, haciendo pruebas de intrusión, que sirven para verificar y evaluar la seguridad física y lógica de los sistemas de información, redes de computadoras, aplicaciones web, bases de datos, servidores, etc.
              Esta técnica logra el acceso y demuestra si un sistema es vulnerable o no. Esta información sirve para tomar medidas preventivas en contra de ataques.
              Un Hacker Ético es una persona que realiza pruebas de penetración. Es un experto en computadoras y redes de datos cuya función es atacar los sistemas de seguridad en nombre de los dueños con la intención de buscar y encontrar vulnerabilidades actuando de forma igual o al menos similar y utilizan los mismos métodos que usaría un hacker con intención de atacar el sistema. En pocas palabras vulneran y entran a los sistemas empresariales para reportar vulnerabilidades, en lugar de robarla o borrarla.
              Las pruebas de penetración permiten: evaluar vulnerabilidades, analizar y categorizar las debilidades explotadas y proveer recomendaciones en base a las prioridades de la organización y por último eliminar dichas vulnerabilidades. </p>

          </div>

          <aside className='aside-intro-ethical'>

            <h2 className='subtitulo-pages'>Capacidades ECM de Alfresco</h2>
            <div className='aside-intro-ethical-grid'>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>01</div>
                <p>Gestion de documentos</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>02</div>
                <p>Escaneado y captura de documentos</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>03</div>
                <p>Colaboracion empresarial</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>04</div>
                <p>Gobierno de la informacion</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>05</div>
                <p>Inteligencia y análisis</p>
              </div>


            </div>

          </aside>

        </div>


        <div style={{marginTop:"40px"}} className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <div className='subtitulo-pages'>Características del sistema ECM de Alfresco</div>
            <p> Como una plataforma ECM flexible y escalable, Alfresco Content Services admite una serie de casos de uso, como los servicios de contenido, la gobernanza de la información, la búsqueda e información contextual, la fácil integración con las principales aplicaciones empresariales y mucho más.</p>

          </div>

          <aside className='aside-intro-ethical'>

         

          </aside>

        </div>

      </section>
    </motion.div>

  )
}
