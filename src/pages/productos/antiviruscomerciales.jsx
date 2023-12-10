import React from 'react'

import "./antiviruscomerciales.css"

import { motion } from "framer-motion"
import ScrollToTop from '../../components/ScrollToTop';

export default function Antiviruscomerciales() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ScrollToTop />

      <div style={{ height: "55px" }}></div>
      <div className='banner-productos2'>
        <div className='container'>
          <div className='banner-productos-titulo'>
            <h2>Antivirus Antiransomware</h2>

            <p>En el complejo panorama digital de hoy, la protección de tu empresa es fundamental. Nuestros servicios de antivirus y antiransomware en Tecmasoft ofrecen una defensa activa contra las amenazas cibernéticas. Con soluciones avanzadas y actualizaciones continuas, aseguramos que tu empresa esté blindada contra virus y ataques de ransomware. En Tecmasoft, tu seguridad digital es nuestra prioridad constante.</p>
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

            <h2> SOPHOS INTERCEPT X Endpoint </h2>
            <p> La mejor protección para endpoints del mundo </p>

          </div>

          <aside className='introducion-video'>
            <iframe
              src="https://www.youtube-nocookie.com/embed/YW6J-U-zP9I?si=N7NPPedyIYvMbhF_"
              title="¿Qué es Firewall?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </aside>

        </div>
        <p className='subtitulo-pages'>Funciones de Intercep X Endpoint</p>

        <div className='herramientas-grid'>

          <article className='herramineta-card'>
            <h2>Sophos Intercep X Endpoint</h2>
            <ul>
              <li>Sophos Intercept X Advanced with XDR integra una potente detección y respuesta para endpoints (EDR) con la protección para endpoints mejor valorada del mercado. Intercept X, diseñado tanto para las operaciones de seguridad TI como para la búsqueda de amenazas, detecta e investiga la actividad sospechosa con un análisis basado en IA. A diferencia de otras herramientas de EDR, añade experiencia, no personal, al replicar las habilidades de analistas difíciles de encontrar.</li>
            </ul>
          </article>

          <article className='herramineta-card'>
            <h2> Detección  y Respuesta Ampliadas (XDR) </h2>
            <ul>
              <li> Sophos Intercept X Advanced with XDR es la única solución XDR del sector que sincroniza la protección nativa de endpoints, servidores, firewalls, correo electrónico, la nube y O365. Obtenga una visión holística del entorno de su organización con conjuntos de datos exhaustivos y un análisis profundo para la detección, investigación y respuesta a las amenazas, tanto para los equipos SOC dedicados como para los administradores de TI. </li>
            </ul>
          </article>

          <article className='herramineta-card'>
            <h2>Antirasomware</h2>
            <ul>
              <li> Los ataques de ransomware actuales a menudo combinan múltiples técnicas avanzadas con hacking en tiempo real. Para minimizar el riesgo de caer víctima, necesita una protección avanzada que monitorice y proteja toda la cadena de ataque. Sophos Intercept X le proporciona tecnologías de protección avanzada que desestabilizan toda la cadena de ataque, incluido el Deep Learning para prevenir los ataques de forma predictiva y CryptoGuard para revertir el cifrado no autorizado de archivos en segundos. </li>
            </ul>
          </article>
          <article className='herramineta-card'>
            <h2>Tecnología de Deep Learning</h2>
            <ul>
              <li> Gracias a la integración del Deep Learning, una forma avanzada de Machine Learning, Intercept X está cambiando la seguridad de los endpoints de un enfoque reactivo a uno predictivo a fin de proteger contra amenazas tanto conocidas como nuevas. Aunque muchos productos afirman utilizar el aprendizaje automático, no todo el aprendizaje automático se crea de la misma manera. El Deep Learning ha superado sistemáticamente otros modelos de Machine Learning en la detección de malware. </li>
            </ul>
          </article>
          <article className='herramineta-card'>
            <h2>Prevención de Exploits</h2>
            <ul>
              <li> La prevención de exploits detiene las técnicas utilizadas en los ataques basados en exploits sin archivos y sin malware. Aunque hay millones de aplicaciones de malware y miles de vulnerabilidades de software esperando a ser explotadas, solo existen unas pocas técnicas de exploits de las que se sirven los hackers como parte de la cadena de ataque. Al arrebatar a los hackers las herramientas clave que tanto les gusta utilizar, Intercept X detiene los ataques de día cero antes de que puedan iniciarse. </li>
            </ul>
          </article>
          <article className='herramineta-card'>
            <h2>Managed Threat Response</h2>
            <ul>
              <li> Sophos Managed Threat Response (MTR) es un servicio totalmente administrado prestado por un equipo de expertos que ofrece funciones de búsqueda, detección y respuesta a amenazas las 24 horas. Sophos MTR fusiona la tecnología del Machine Learning con el análisis de expertos para mejorar la búsqueda y la detección de amenazas, ofrecer una investigación más a fondo de las alertas y facilitar acciones concretas para eliminar las amenazas con rapidez y precisión. A diferencia de otros servicios, el equipo de Sophos MTR va más allá de la simple notificación de ataques o comportamientos sospechosos e inicia acciones específicas en su nombre para neutralizar incluso las amenazas más sofisticadas y complejas. </li>
            </ul>
          </article>


        </div>

      </section>


      <div style={{ width: "100%", height: "2px", backgroundColor: "var(--bordes)", margin: "50px 0" }}></div>

      <section className='container'>


        <div className='productos-introducion'>
          <div className='productos-introducion-titulo'>

            <h2> KASPERSKY </h2>
            <p> Seguridad empresarial capaz de afrontar cualquier desafío </p>

          </div>

          <aside className='introducion-video'>
            <iframe
              src="https://www.youtube-nocookie.com/embed/rqJuVJGSef4?si=ct23f6HZRjuXmfHu"
              title="¿Qué es Firewall?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          </aside>

        </div>

        <div className='subtitulo-pages'>ARQUITECTURA XSTREAM</div>

        <div className='dosarticleflex'>
          <article className='dosarticleuno'>
            <h2 className='subtitulo-pages'> KasperskyEndpoint Security Cloud </h2>
            <p> Ciberseguridad para empresas en crecimiento con recursos limitados. Protección sencilla a través de un navegador web. Todo lo que necesita para que su empresa funcione sin problemas y de forma segura
              Todo lo que necesita para proteger escritorios y servidores de archivos de Windows, dispositivos con sistema operativo Mac, dispositivos móviles iOS y Android, e incluso Microsoft Oﬀice 365: simplemente regístrese en una cuenta. Deje que Kaspersky bloquee el ransomware, el malware sin archivos, los ataques de día cero y otras amenazas emergentes mientras usted se enfoca en otros aspectos de su empresa. </p>


          </article>

          <article className='dosarticledos'>
            <h2 className='subtitulo-pages'>KasperskyEndpoint Security for Business</h2>
            <p> Protección adaptativa de última generación contra las ciberamenazas </p>

            <div className='lista-article'>
              <ul>
                <li> Seguridad adaptativa contra ciberamenazas avanzadas </li>
                <li> Protege todos los endpoints sin ser demasiado costoso </li>
                <li> Optimiza la gestión de seguridad centralizada con una consola web o en la nube </li>
                <li> Minimiza la cantidad de incidentes mediante procesamientos automáticos </li>
              </ul>

            </div>


          </article>
        </div>







        <div className='dosarticleflex'>
          <article className='dosarticleuno'>
            <h2 className='subtitulo-pages'> Kaspersky Security for Mail Server </h2>
            <p> Correo electrónico seguro para comunicaciones empresariales fluidas. El correo electrónico es el método principal que utilizan los ciberdelincuentes para penetrar en los sistemas de TI empresariales y atacarlos.
              Kaspersky Security for Mail Server utiliza varias capas de seguridad basadas en el aprendizaje automático, de modo que aprovecha los datos de inteligencia de amenazas globales para detectar y bloquear las ciberamenazas que se propagan mediante correo electrónico. Brinda una protección completa contra ataques de spam, phishing y BEC, como también contra malware y ransomware. Esta galardonada protección ayuda a evitar que los atacantes perjudiquen su empresa utilizando correos electrónicos y archivos adjuntos de correo electrónico como medio de transmisión. </p>

            <div className='lista-article'>
              <ul>
                <li> Ofrece protección multicapa frente a las amenazas basadas en correo electrónico más </li>
                <li> Neutraliza las infecciones antes de que puedan llegar a sus endpoints </li>
                <li> Bloquea las amenazas de ingeniería social dirigidas a sus usuarios. </li>
                <li> Ahorra tiempo de trabajo y recursos del sistema al bloquear las comunicaciones no deseadas </li>
                <li> Reduce la exposición a los ataques al regular la transmisión de información </li>
              </ul>

            </div>
          </article>

          <article className='dosarticledos'>
            <h2 className='subtitulo-pages'>Protección de vanguardia contra amenazas de correo electrónico</h2>
            <p> Los algoritmos de detección basados en aprendizaje automático con asistencia de la nube, el conocimiento humano y los datos de inteligencia de amenazas globales se combinan para ofrecer altos niveles de detección comprobados, sin perder ni ralentizar ninguna comunicación valiosa debido a falsos positivos.
              La solución bloquea todo tipo de objetos maliciosos, incluidos los siguientes: </p>

            <div className='lista-article'>
              <ul>
                <li> Spyware </li>
                <li> Ransomware </li>
                <li> Mineros </li>
                <li> Wipers </li>
                <li> Direcciones IP de reputación amenazante y URL fraudulentas</li>
              </ul>

            </div>


          </article>
        </div>




        
        <div className='dosarticleflex'>
          <article className='dosarticleuno'>
            <h2 className='subtitulo-pages'> Antiphishing, antispam y anti-BEC </h2>
            <p> El análisis con base en redes neuronales artificiales, respaldado por la comprobación de URL en tiempo real basada en la nube, protege incluso contra el phishing de correo electrónico más convincente, incluidos los mensajes de correo electrónico empresarial comprometidos (BEC) altamente enfocados.
              Los modelos de aprendizaje automático facilitan la detección antispam, mientras que los algoritmos de revisiones especializados minimizan los falsos positivos que desperdician tiempo y recursos. </p>


          </article>

        </div>
      </section>

    </motion.div>
  )
}
