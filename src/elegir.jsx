import React from 'react'
import './elegir.css'

export default function Elegir() {
  return (
    <div className='elegir'>

      <div className='container'>

        <h2 className='elegir-titulo'>¿Por qué elegir <strong> Tecmasoft? </strong></h2>

        <div className=' elegir-grid'>

          <article className='textos-elegir'>

            <div className='num-circulo'>01</div>
            <h3>Experiencia y Especialización</h3>
            <p>Con más de 15 años de experiencia, somos líderes en el diseño e implementación de soluciones tecnológicas. Contamos con un equipo altamente calificado y soluciones q estan a la vanguardia de las últimas tendencias.</p>

          </article>

          <article className='textos-elegir'>

            <div className='num-circulo'>02</div>
            <h3>Compromiso con el Cliente</h3>
            <p>Trabajamos mano a mano contigo, brindando atención dedicada y apoyo integral. Estamos comprometidos a asegurar que cada cliente alcance sus objetivos tecnológicos de manera eficaz y satisfactoria.</p>

          </article>

          <article className='textos-elegir'>

            <div className='num-circulo'>03</div>
            <h3>Enfoque Personalizado</h3>
            <p>Reconocemos la singularidad de cada empresa y adaptamos nuestras soluciones para satisfacer sus necesidades específicas.
              Nos esforzamos por entender y abordar tus desafíos </p>

          </article>




        </div>

      </div>

    </div>
  )
}
