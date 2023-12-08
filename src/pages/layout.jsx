import React from 'react'
import Home from './home.jsx'
import Nav from '../nav.jsx'
import Footer from "../footer.jsx"
import Nosotros from '../nosotros.jsx'

import { Routes, Route, Outlet } from 'react-router-dom'
import SeguridadTecnologica from './seguridadtecnologica.jsx'

export default function layout() {
    return (
        <>
            < Nav />
            
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/seguridadtecnologica' element={<SeguridadTecnologica />} />
                <Route path="/#nosotros" element={<Nosotros />}  />
            </Routes>

            <Footer />

            <Outlet />
        </>
    )
}
