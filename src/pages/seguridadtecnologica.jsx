import React from 'react'
import './seguridadtecnologica.css'

export default function SeguridadTecnologica() {
  return (
    <>
      <section style={{ paddingTop: "100px" }} className='container'>

        <div className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <h2>Seguridad <br /> <span>Perimetral</span></h2>
            <p> La evolución de la tecnología y la constante demanda de seguridad han permitido que los sistemas de seguridad perimetral en redes evolucionen para ofrecer una mayor confiabilidad a los usuarios sobre la transparencia y protección de su información para el acceso de diferentes servicios. Hoy en día existen muchas personas que usan sus conocimientos y ética profesional de una forma incorrecta al ingresar a redes informáticas restringidas ocasionado pérdidas multimillonarias alrededor del mundo.
              La seguridad perimetral de una empresa es primordial. Los ataques por red y pérdidas de información ocasionan un gran trastorno y no solo la imagen si no también el funcionamiento y progreso de una empresa se ven afectados. Una plataforma robusta para el control de accesos y protección de los servicios informáticos garantiza un correcto aprovechamiento de la infraestructura y garantiza la integridad y confidencialidad de la información.</p>

          </div>

          <aside className='introducion-video'>
            <iframe
              src="https://www.youtube.com/embed/mcTCrTneeco"
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

            <article className='herramineta-card'>
              <h2>Redes Privadas Virtuales (VPN)</h2>
              <ul>
                <li>Sistemas de Detección de Intrusos.</li>
                <li>IPS</li>
                <li>Antivirus corporativo</li>
                <li>Medidas de seguridad contra virus.</li>
                <li>Mecanismos Activo y Pasivos+</li>
              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>IDS</h2>
              <ul>

                <li>Las redes de área local (LAN) son las redes internas de las organizaciones, es decir las conexiones entre los equipos de una organización particular. Estas redes se conectan cada vez con más frecuencia a Internet mediante un equipo de interconexión. Muchas veces, las empresas necesitan comunicarse por Internet con filiales, clientes o incluso con el personal que puede estar alejado geográficamente.</li>
              </ul>
            </article>


            <article className='herramineta-card'>
              <h2>WEBFILTER</h2>
              <ul>

                <li>El servicio de filtrado web proporciona un control visual y fácil sobre los sitios web que los usuarios visitan.</li>
                <li>Funciona a través de un cortafuegos que bloquea descargas de malware, virus y el acceso a recursos que podrían comprometer la seguridad de la conexión.</li>
                <li>La falta de control sobre las actividades en Internet de los usuarios puede originar problemas de seguridad en muchas empresas.</li>
                <li>Destaca la importancia del control de la navegación web, permitiendo a los usuarios seleccionar categorías de páginas para bloquear o permitir. Se recomienda la contratación de Perú Linux para gestionar la seguridad informática perimetral, incluyendo diseño de topología de red, soluciones eficientes, instalación y configuración de elementos de red, y soporte continuo.
                </li>
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

            <h2>Ethical <br /> <span>Hacking</span></h2>
            <p> Los expertos en seguridad informática aplican varios métodos y técnicas para proteger a dichos sistemas de cualquier ataque de hackers o crackers malintencionados para evitar que estos roben o borren información. Uno de esos métodos es el Ethical Hacking.
              El objetivo fundamental del Ethical Hacking es explotar las vulnerabilidades existentes en los sistemas, haciendo pruebas de intrusión, que sirven para verificar y evaluar la seguridad física y lógica de los sistemas de información, redes de computadoras, aplicaciones web, bases de datos, servidores, etc.
              Esta técnica logra el acceso y demuestra si un sistema es vulnerable o no. Esta información sirve para tomar medidas preventivas en contra de ataques.
              Un Hacker Ético es una persona que realiza pruebas de penetración. Es un experto en computadoras y redes de datos cuya función es atacar los sistemas de seguridad en nombre de los dueños con la intención de buscar y encontrar vulnerabilidades actuando de forma igual o al menos similar y utilizan los mismos métodos que usaría un hacker con intención de atacar el sistema. En pocas palabras vulneran y entran a los sistemas empresariales para reportar vulnerabilidades, en lugar de robarla o borrarla.
              Las pruebas de penetración permiten: evaluar vulnerabilidades, analizar y categorizar las debilidades explotadas y proveer recomendaciones en base a las prioridades de la organización y por último eliminar dichas vulnerabilidades. </p>

          </div>

          <aside className='aside-intro-ethical'>

            <h2>Los beneficios que ofrece el <strong>Ethical Hacking</strong>  son:</h2>
            <div className='aside-intro-ethical-grid'>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>01</div>
                <p>Otorgar un panorama acerca de las vulnerabilidades encontradas para tomar medidas.</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>02</div>
                <p>Evidencia configuraciones inadecuadas en las aplicaciones instaladas.</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>03</div>
                <p>Identifica a qué sistemas les hacen falta actualizaciones.</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>04</div>
                <p>Disminuir el tiempo y esfuerzo requeridos para afrontar situaciones de riesgo.</p>
              </div>


            </div>

          </aside>

        </div>

      </section>



      <div style={{ width: "100%", height: "2px", backgroundColor: "var(--bordes)", margin: "50px 0" }}></div>


      {/* Ciberseguridad*/}

      <section className='container'>
        <div className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <h2> <span>Ciberseguridad</span></h2>
            <p> La ciberseguridad es la práctica de defender las computadoras, los servidores, los dispositivos móviles, los sistemas electrónicos, las redes y los datos de ataques maliciosos. También se conoce como seguridad de tecnología de la información o seguridad de la información electrónica. El término se aplica en diferentes contextos, desde los negocios hasta la informática móvil, y puede dividirse en algunas categorías comunes.
              La seguridad de red es la práctica de proteger una red informática de los intrusos, ya sean atacantes dirigidos o malware oportunista.
              La seguridad de las aplicaciones se enfoca en mantener el software y los dispositivos libres de amenazas. Una aplicación afectada podría brindar acceso a los datos que está destinada a proteger. La seguridad eficaz comienza en la etapa de diseño, mucho antes de la implementación de un programa o dispositivo. </p>

          </div>

          <aside className='aside-intro-ethical'>

            <h2>Las amenazas a las que se enfrenta la <strong> Ciberseguridad </strong> son tres:</h2>
            <div className='aside-intro-ethical-grid'>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>01</div>
                <p>El delito cibernético incluye agentes individuales o grupos que atacan a los sistemas para obtener beneficios financieros o causar interrupciones.</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>02</div>
                <p>Los ciberataques a menudo involucran la recopilación de información con fines políticos.</p>
              </div>

              <div className='card-intro-ethical'>
                <div className='num-circulo'>03</div>
                <p>EL CIBERTERRORISMO tiene como objetivo debilitar los sistemas electrónicos para causar pánico o temor.</p>
              </div>


            </div>

          </aside>

        </div>
      </section>
    </>
  )
}
