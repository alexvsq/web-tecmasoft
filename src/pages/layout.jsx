import { React, useEffect, useState } from 'react';
import Home from './home.jsx';
import Nav from '../nav.jsx';
import Footer from "../footer.jsx";

import ScrollToTop from '../components/ScrollToTop.jsx';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import SeguridadTecnologica from './seguridadtecnologica.jsx';
import Gestionempresarial from './gestionempresarial.jsx';
import Almacenamientoredes from './almacenamientoredes.jsx';
import Infraestructura from './infraestructura.jsx';
import Antiviruscomerciales from './productos/antiviruscomerciales.jsx';
import Firewallcomerciales from './productos/firewallcomerciales.jsx';
import Antispam from './productos/antispam.jsx';
import Telefoniaip from './productos/telefoniaip.jsx';

export default function Layout() {
  const location = useLocation();
/* 
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    // Incrementa el contador cada vez que cambia la ubicación
    setChangeCount((prevCount) => prevCount + 1);
    console.log(changeCount);
    // Verifica si se han realizado 13 cambios y refresca la página
    if (changeCount >= 13 && location.pathname === '/') {
      window.location.reload();
    }
  }, [location.pathname]); // / Solo observa cambios en la ruta 
 */
  return (
    <>
      <Nav />
      <AnimatePresence>
        <Routes location={location} /* key={Date.now()} */>

          <Route path='/' element={<Home />} />
          <Route path='/seguridadtecnologica' element={<SeguridadTecnologica />} />
          <Route path='/gestionempresarial' element={<Gestionempresarial />} />
          <Route path='/almacenamientoredes' element={<Almacenamientoredes />} />
          <Route path='/infraestructura' element={<Infraestructura />} />
          <Route path='/antiviruscomerciales' element={<Antiviruscomerciales />} />
          <Route path='/firewallcomerciales' element={<Firewallcomerciales />} />
          <Route path='/antispam' element={<Antispam />} />
          <Route path='/telefoniaip' element={<Telefoniaip />} />
 
        </Routes>
      </AnimatePresence>
      <Footer />

    </>
  );
}
