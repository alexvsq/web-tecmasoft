import React from 'react'
import './banner-servicios.css'
import Boton1 from './components/boton1.jsx'

export default function BannerServicios() {
    return (
        <main className='banner-servicios'>
            <article className='banner-servicios-image'>
                <p>Destacados</p>
                <h2 className='banner-servicio-titulos'>
                    Central IP & <br /> <strong>Call Center Call</strong>
                </h2>
            </article>

            <aside className='banner-servicios-textos-caja'>
                <div className='banner-servicios-textos'>

                    <p className='texto-servicio'>Software potente de alto alcance para centro
                        de llamadas alojado en la nube. <br /> <span>Toda la comunicación que tu empresa necesita en Ia nube</span></p>

                </div>
                <a href=""></a>

                <footer className='servicio-aside-footer'> 

                <Boton1 
                texto = 'Más Información'
                />

                <div className='botones-banner-servicio'>
                    <img src="/arrow-left-verde.svg" alt="" />
                    <img src="/arrow-right-verde.svg" alt="" />
                </div>

                </footer>

            </aside>
        </main>
    )
}
