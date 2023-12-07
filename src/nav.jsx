import { React, useState } from 'react'
import './nav.css'

export default function Nav() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <nav className='nav-bg'>
                <nav className='nav-header'>
                    <div className="nav-logo" >
                        <a href=""><img src="/logo-tecmasoft.svg" href="#" /></a>
                    </div>


                    <ul className='lista-nav'>
                        <li> <a href="#nosotros">Nosotros</a></li>
                        <li><a href="">Contacto</a>  </li>
                        <li><a href="">Intranet</a>  </li>
                        <li><a href="">Blog</a>  </li>
                    </ul>

                    <ul className='lista-nav-icons'>
                        <li> <a href=""> <img src="/facebook-logo.svg" alt="icono" /></a> </li>
                        <li> <a href=""><img src="/twitter-logo.svg" alt="icono" /></a> </li>
                        <li> <a href=""><img src="/youtube-logo.svg" alt="icono" /></a> </li>
                    </ul>


                    <div
                        className='menu-nav-icon'
                        onClick={() => setShowMenu(!showMenu)}
                    ><img src={showMenu ? "/menu-nav-close.svg" : "/menu-nav.svg"} alt="" /></div>

                </nav>

            </nav>

            <div className={`menu-mobile ${showMenu ? 'open' : ''}`}>

                <ul className='lista-nav2'>
                    <li onClick={() => setShowMenu(!showMenu)}> <a href="#nosotros">Nosotros</a></li>
                    <div className='linea-div-lista'></div>
                    <li onClick={() => setShowMenu(!showMenu)}><a href="#">Contacto</a>  </li>
                    <div className='linea-div-lista'></div>
                    <li onClick={() => setShowMenu(!showMenu)}><a href="#">Intranet</a>  </li>
                    <div className='linea-div-lista'></div>
                    <li onClick={() => setShowMenu(!showMenu)}><a href="#">Blog</a>  </li>
                </ul>

                <ul className='lista-nav-icons2 '>
                    <li onClick={() => setShowMenu(!showMenu)}> <a href="#"> <img src="/facebook-logo.svg" alt="icono" /></a> </li>
                    <li onClick={() => setShowMenu(!showMenu)}> <a href="#"><img src="/twitter-logo.svg" alt="icono" /></a> </li>
                    <li onClick={() => setShowMenu(!showMenu)}> <a href="#"><img src="/youtube-logo.svg" alt="icono" /></a> </li>
                </ul>
            </div>
        </>
    )
}
