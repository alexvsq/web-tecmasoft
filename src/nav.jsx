import { React, useState } from 'react'
import './nav.css'

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <nav className='nav-bg'>
                <nav className='nav-header'>

                    <img src="/logo-tecmasoft.svg" className="nav-logo" />

                    <ul className='lista-nav'>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                        <li>Intranet</li>
                        <li>Blog</li>
                    </ul>

                    <ul className='lista-nav-icons'>
                        <li> <img src="/facebook-logo.svg" alt="icono" /></li>
                        <li> <img src="/twitter-logo.svg" alt="icono" /></li>
                        <li> <img src="/youtube-logo.svg" alt="icono" /></li>
                    </ul>


                    <div
                        className='menu-nav-icon'
                        onClick={() => setShowMenu(!showMenu)}
                    ><img src={showMenu ? "/menu-nav-close.svg" : "/menu-nav.svg"} alt="" /></div>

                </nav>

            </nav>

            <div className={`menu-mobile ${showMenu ? 'open' : ''}`}>

                <ul className='lista-nav2'>
                    <li>Nosotros</li>
                    <div className='linea-div-lista'></div>
                    <li>Contacto</li>
                    <div className='linea-div-lista'></div>
                    <li>Intranet</li>
                    <div className='linea-div-lista'></div>
                    <li>Blog</li>
                </ul>

                <ul className='lista-nav-icons2 '>
                    <li> <img src="/facebook-logo.svg" alt="icono" /></li>
                    <li> <img src="/twitter-logo.svg" alt="icono" /></li>
                    <li> <img src="/youtube-logo.svg" alt="icono" /></li>
                </ul>
            </div>
        </>
    )
}
