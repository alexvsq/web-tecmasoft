import React from 'react'
import "./infraestrotura.css"

import ScrollToTop from '../components/ScrollToTop';

import {motion} from "framer-motion"

export default function Infraestructura() {
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

            <h2> Virtualización & <br /> <span>Backup</span></h2>
            <p> La virtualización es una solución de automatizar los recursos de hardware, los departamentos TIC que ya han virtualizado sus servidores de forma básica, ahora suben de nivel ampliando la virtualización a sus aplicaciones más críticas. </p>

          </div>

          <aside className='introducion-video'>

            <iframe
              src="https://www.youtube-nocookie.com/embed/mgSjaS8yXFA?si=hMzr5uE3LG6R058D"
              title="¿Qué es Firewall?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </aside>

        </div>

        <div className='dosarticleflex'>
          <article className='dosarticleuno'>
            <h2 className='subtitulo-pages'>La tendencia a la virtualización continúa. El motivo es que las ventajas estratégicas son notables y responden a las necesidades de las organizaciones:</h2>

            <div className='lista-article'>
              <ul>
                <li>Permite alinear la implementación de capacidad y recursos TIC con el crecimiento y expansión del negocio, porque resuelve el problema de expansión del servidor físico al mismo tiempo que recorta los gastos de capital que conlleva la compra y mantenimiento de nuevas máquinas.</li>
                <li>Mejora la calidad del servicio porque aumenta el rendimiento y el tiempo de funcionamiento de su infraestructura agilizando, flexibilizando y simplificando los procesos.</li>
                <li>Instalación y configuración de elementos red que sean necesarios</li>
                <li>Permite implementar soluciones de alta disponibilidad a nivel de servidores y equipos de conexión de telecomunicaciones, lo que redunda en una mayor disponibilidad y fiabilidad de los servicios.</li>
              </ul>

            </div>


          </article>

          <article className='dosarticledos'>
            <h2 className='subtitulo-pages'>Transformación Digital</h2>
            <p>Las empresas actualmente experimentan procesos de transformación digital, en el que la implementación de tecnologías de cómputo es cada vez más importante para asegurar su activo más valioso: la información.
              Por este motivo, contar con un backup o copia de seguridad, es una de las tecnologías primordiales que toda organización que almacena datos propios, como de clientes y proveedores, requiere implementar.
              Hacer Backup de la Información en una ventana de tiempo reducido y con la retención que el cliente necesita es un componente esencial en cualquier estrategia de protección de datos. La copia de seguridad de los datos críticos de la organización garantiza que la empresa o institución siempre esté en funcionamiento, independientemente de lo que ocurra.
            </p>


          </article>
        </div>
      </section>

      <div style={{ width: "100%", height: "2px", backgroundColor: "var(--bordes)", margin: "50px 0" }}></div>
      <section className='container'>

        <div className='seguridad-tecnologica-introducion'>
          <div className='titulo-pages'>

            <h2> Cableado <br /> <span>Estructurado</span></h2>
            <p> El cableado estructurado de redes es un sistema integral de cableado, accesorios y componentes que proporcionan de manera conjunta y cumpliendo ciertas normas y estándares, una infraestructura de interconexión para los componentes de una red de datos. Esta infraestructura es capaz de integrar tanto los servicios de voz, datos y video, como sistemas de control y automatización de un edificio.
              Técnicamente podemos definirlo como la infraestructura de cable destinada a transportar, a lo largo y ancho de un edificio, las señales que emite un emisor de algún tipo de señal hasta el correspondiente receptor. Un sistema de cableado estructurado es físicamente una red de cable única y completa, con combinaciones de cable de cobre (par trenzado), cables de fibra óptica, bloques de conexión, cables terminados en diferentes tipos de conectores y adaptadores. </p>

          </div>

          <aside className='introducion-video'>

            <iframe
              src="https://www.youtube-nocookie.com/embed/3KhfU7v0VSo?si=GZ3TzcUjaiRLryi4"
              title="¿Qué es Firewall?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </aside>

        </div>

        <div className='dosarticleflex'>
          <article className='dosarticleuno'>
            <h2 className='subtitulo-pages'>¿Para qué sirve el Cableado Estructurado?</h2>

            <p>
              Por lo general la implementación de un Sistema de Cableado Estructurado permite establecer y crear infraestructuras de telecomunicaciones en el interior de un edificio, ofreciendo así una fácil instalación. Entre una de sus principales ventajas encontramos que está estandarizado, lo que le aporta una ventaja a los fabricantes de tecnología y un crecimiento de una forma más sencilla.
              Esto permite que este sistema pueda instalarse sin conocer previamente el producto a usar, ya que se encuentra unificado a los sistemas informáticos y de comunicaciones de cualquier empresa. Se puede usar tanto para establecer redes de área local (LAN) o de área ancha (WAN).
              Por lo tanto, todo edificio actual debería considerar la implementación de un sistema de cableado estructurado en su interior, creando así una infraestructura tecnológica estandarizada para correr distintos tipos de servicios de datos, voz, video y demás, sobre ella, pensando en una vigencia tecnológica que cubra sus necesidades durante un periodo de tiempo de 20 a 25 años como mínimo.
            </p>


          </article>

          <article  className='dosarticledos'>
            <h2 className='subtitulo-pages'>Cableado Horizontal</h2>
            <p>Es aquel encargado de llevar o transmitir la información desde el distribuidor de piso (patch panel) instalado normalmente en un cuarto de comunicaciones, hasta los usuarios o clientes finales de la red (mediante terminaciones en pared conocidas como faceplates.
              Trabaja bajo la norma EIA/TIA 568A, donde también es conocido como “La porción del sistema cableado de telecomunicaciones que se extiende desde el área de trabajo hasta el cuarto principal de las telecomunicaciones”.
              Por lo general está conformado por un núcleo sólido que está fabricado de cobre, esto con el fin de evitar que ese se tuerza o sufra daños. Además, se recomienda que el mismo sea instalado dentro de las paredes evitando que el usuario final tenga contacto directo con él.</p>
            <div className='lista-article'>
              <ul>
                <li>Cables horizontales.</li>
                <li>Terminación mecánica (ponchado).</li>
                <li>Interconexiones horizontales que se deben encontrar localizadas dentro del cuarto de telecomunicaciones.</li>
                <li>Placa de pared (faceplate)</li>
                <li>Conectores en el área de trabajo.</li>
                <li>Cables y conectores de transición instalados entre la salida del área de trabajo y el cuarto principal.</li>
                <li>Paneles y cables de empalme que se utilizan para configurar las conexiones de los cables en el cuarto principal.</li>
              </ul>

            </div>

          </article>
        </div>

        <div  style={{margin:"80px 0"}}   >
          <div className='subtitulo-pages'>Características de un buen Cableado Estructurado de redes</div>
          <div className='grid-estrocturado'>

            <article className='herramineta-card'>
              <h2>MODULARIDAD</h2>
              <ul>
                <li>Nos sirve para construir redes de mayor tamaño sin incrementar la complejidad del sistema. Debe ser totalmente modular y debe poder reconfigurarse fácilmente de acuerdo a las necesidades cambiantes de la empresa.</li>

              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>FLEXIBILIDAD</h2>
              <ul>
                <li>Permite el crecimiento de la red, tocando poco o nada los elementos existentes. Así mismo, facilita la reubicación de usuarios en las empresas.</li>

              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>TECNOLOGÍAS INTEGRADAS</h2>
              <ul>
                <li>Permite una infraestructura de red para instalar sobre ella, diversos servicios de manera integral: Data, Voz, Audio, Video, Control, entre otros. Facilita la conectividad de equipos y tecnologías.</li>

              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>BAJO COSTO DE INSTALACIÓN</h2>
              <ul>
                <li>Soporta altas velocidades de transmisión de las nuevas tecnologías a costos relativamente bajos.</li>

              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>FACILIDAD DE INSTALACIÓN Y MANTENIMIENTO</h2>
              <ul>
                <li>Facilita la conectividad de equipos y tecnologías. Reduce costos de mantenimiento de la red.</li>

              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>CONFIABILIDAD
              </h2>
              <ul>
                <li>Es altamente confiable, respecto a interrupciones del servicio o incremento de la probabilidad de errores de transmisión de datos.
                </li>

              </ul>
            </article>

            <article className='herramineta-card'>
              <h2>ADMINISTRACIÓN</h2>
              <ul>
                <li>Es sencillo de administrar y configurar por medio de software de administración de redes
                </li>

              </ul>
            </article>


            <article className='herramineta-card'>
              <h2>MANEJA REDES </h2>
              <ul>
                <li>Maneja redes de datos con diversidad de topologías y protocolos
                </li>

              </ul>
            </article>


          </div>
        </div>


        <section className='container'>


          <div style={{margin:"80px 0"}} className='seguridad-tecnologica-introducion'>
            <div className='titulo-pages'>

              <div className='subtitulo-pages'>Cableado Vertical (Backbone)</div>
              <p> También llamado como cableado vertical, troncal o backbone, es aquel que se utiliza para interconectar los gabinetes de distribución de los diferentes cuartos de telecomunicaciones, en un edificio o entre edificios.
                Por lo general, está conformado por cables verticales (cobre o enlaces de fibra óptica), conexiones cruzadas principales e intermedias, cordones de parcheo (patch cords) para las conexiones cruzadas, las terminaciones mecánicas (ponchado) y/o terminaciones por fusión (hilos de fibra óptica).
                Este sistema vertical se encarga de realizar lo que es la interconexión entre los distintos gabinetes de los cuartos de telecomunicaciones y la sala de equipamiento (Data Center). A diferencia de un cableado horizontal, un cableado vertical (backbone) a primera instancia, no es tan accesible o económico. Sin embargo, permite realizar instalaciones de servicios de manera independiente.
                Al permitir realizar instalaciones independientes facilidad a futuro la sustitución del backbone a un costo no elevado de servicio. Por lo cual, su modificación resulta ser más fácil y económica para los usuarios del edificio. </p>

            </div>

            <aside className='aside-intro-ethical'>

              <h2 className='subtitulo-pages'>El backbone incluye los siguientes elementos:</h2>
              <div className='aside-intro-ethical-grid'>

                <div className='card-intro-ethical'>
                  <div className='num-circulo'>01</div>
                  <p>Las canalizaciones backbone pueden ser tanto verticales como horizontales entre los distintos pisos del edificio.</p>
                </div>

                <div className='card-intro-ethical'>
                  <div className='num-circulo'>02</div>
                  <p>Incluye un medio de transmisión por cables.</p>
                </div>

                <div className='card-intro-ethical'>
                  <div className='num-circulo'>03</div>
                  <p>Tiene puntos principales e intermedios de conexiones cruzadas y terminaciones mecánicas.</p>
                </div>


              </div>

            </aside>

          </div>

        </section>

      </section>

      {/* ETHICAL HACKING */}

    </motion.div>
  )
}
