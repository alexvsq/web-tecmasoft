import React from 'react'
import './boton1.css'

export default function Boton1({texto , path}) {
    return (

        <button className='boton1' >

            <a href={path}>{texto}</a>
        
        </button>
    )
}
