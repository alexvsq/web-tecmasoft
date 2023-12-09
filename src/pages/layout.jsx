import React from 'react'
import Home from './home.jsx'
import Nav from '../nav.jsx'
import Footer from "../footer.jsx"

import { Routes, Route, Outlet } from 'react-router-dom'

import SeguridadTecnologica from './seguridadtecnologica.jsx'
import Gestionempresarial from './gestionempresarial.jsx'
import Alamacenamientoredes from './alamacenamientoredes.jsx'
import Infraestructura from './infraestructura.jsx'


export default function layout() {

 

    return (
        <>
            < Nav />
            
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/seguridadtecnologica' element={<SeguridadTecnologica />} />
                <Route path='/gestionempresarial' element={<Gestionempresarial />} />
                <Route path='/alamacenamientoredes' element={<Alamacenamientoredes />} />
                <Route path='/infraestructura' element={<Infraestructura />} />
            </Routes>

            <Footer />

            <Outlet />
        </>
    )
}
