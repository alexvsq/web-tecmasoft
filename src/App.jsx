import { useState } from 'react'
import './App.css'
import Nav from './nav.jsx'
import Header from './header.jsx'
import Servicios from './servicios.jsx'
import Elegir from './elegir.jsx'
import Introduccion from './introduccion.jsx'
import Productos from './productos.jsx'
import ServiciosCloud from './servicios-cloud.jsx'




function App() {

  return (
    <>
    <Nav />
    <Header />
    <Introduccion />
    <Servicios />
    <Elegir />
    <Productos />
    <ServiciosCloud />





    <div className=''>

     <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur earum corrupti error nesciunt temporibus reiciendis assumenda officiis odit. Molestias excepturi nostrum quod est ipsam repudiandae ut quidem obcaecati eveniet assumenda!</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aspernatur inventore. Ipsa ex adipisci, recusandae repudiandae perferendis voluptates autem unde sint, dignissimos possimus reiciendis mollitia totam numquam quas expedita commodi.</p>
    </div>
    </>
  )
}

export default App
