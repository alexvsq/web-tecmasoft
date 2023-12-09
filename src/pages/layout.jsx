import React from 'react'
import Home from './home.jsx'
import Nav from '../nav.jsx'
import Footer from "../footer.jsx"

import ScrollToTop from '../components/ScrollToTop.jsx';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"

import SeguridadTecnologica from './seguridadtecnologica.jsx'
import Gestionempresarial from './gestionempresarial.jsx'
import Alamacenamientoredes from './alamacenamientoredes.jsx'
import Infraestructura from './infraestructura.jsx'
import Antiviruscomerciales from './productos/antiviruscomerciales.jsx'
import Firewallcomerciales from './productos/firewallcomerciales.jsx'
import Antispam from './productos/antispam.jsx'
import Telefoniaip from './productos/telefoniaip.jsx'


export default function layout() {

    const location = useLocation();

    return (
        <>
            < Nav />
            
            <AnimatePresence >

            <Routes location={location} key={location.pathname} >
                
                <Route path='/' element={<Home />} />
                <Route path='/seguridadtecnologica' element={<SeguridadTecnologica />} />
                <Route path='/gestionempresarial' element={<Gestionempresarial />} />
                <Route path='/alamacenamientoredes' element={<Alamacenamientoredes />} />
                <Route path='/infraestructura' element={<Infraestructura />} />
                <Route path='/antiviruscomerciales' element={<Antiviruscomerciales />} />
                <Route path='/firewallcomerciales' element={<Firewallcomerciales />} />
                <Route path='/antispam' element={<Antispam />} />
                <Route path='/telefoniaip' element={<Telefoniaip />} />

            </Routes>

            </AnimatePresence>
            <Footer />

            <Outlet />
        </>
    )
}
