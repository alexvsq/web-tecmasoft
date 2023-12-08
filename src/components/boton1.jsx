import React from 'react'
import './boton1.css'
import { Link } from 'react-router-dom'

export default function Boton1({ texto, path }) {
    return (
        <Link to={path} >
            <button className='boton1' >

                {texto}

            </button>
         </Link>
    )
}