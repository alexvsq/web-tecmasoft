import React from 'react'
import './header.css'


export default function Header() {
    return (
        <header className='header-principal'>
            <div className='textos-header'>
                <h1>Bienvenido a <strong>TECMASOFT</strong></h1>
                <h2> Soluciones Tecnológicas Innovadoras para el Éxito Empresarial</h2>
                <p> En Tecmasoft, nos dedicamos a ofrecer consultoría de sistemas especializada para instituciones públicas y privadas. Con una trayectoria sólida y un compromiso innegable con la excelencia, nos enorgullece ofrecer servicios y productos que transforman desafíos en oportunidades.</p>

             
            </div>
            <div className='botones-header'>
                    <a className='boton1-header' href="#servicios">Servicios</a>
                    <a className='boton2-header' href="#productos">Productos</a>
                </div>
        </header>
    )
}
