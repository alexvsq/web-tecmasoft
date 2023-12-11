import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, Events } from 'react-scroll';
import './nav.css';

export default function Nav() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const [showMenu, setShowMenu] = useState(false);



    // Si estás en la página principal, usa ScrollLink, de lo contrario, usa Link de react-router-dom
    const NavLinkComponent = isHome ? ScrollLink : Link;


    return (
        <>
            <nav className='nav-bg'>
                <nav className='nav-header'>
                    <div className="nav-logo" >
                        <Link to="/"><img src="/logo-tecmasoft.svg" href="#" /></Link>
                    </div>


                    <ul className='lista-nav'>
                        <li>  <NavLinkComponent
                            to={isHome ? "nosotros" : "/#nosotros"}
                            smooth= "true"
                            duration={300}
                        >Nosotros</NavLinkComponent></li>
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
                    <li onClick={() => setShowMenu(!showMenu)}>  <NavLinkComponent
                        to={isHome ? "nosotros" : "/#nosotros"}
                        smooth= "true"
                        duration={500}
                    >Nosotros</NavLinkComponent>
                    </li>
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
