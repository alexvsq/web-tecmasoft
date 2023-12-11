import React, { useEffect, useState } from 'react';
import './tarjeta.css';

export default function Tarjeta({ show, title,subtitle, mainText, subText, listItems, toolCards }) {

  
    const [mostrar, setMostrar] = useState(true)



    return (
        <div className='tarjeta-backgroud' style={show === mostrar ? { display: "block" } : { display: "none" }}>

            <div className='tarjeta-contenido'>

                <section style={{ paddingTop: "20px" }} className='container'>

                    <div onClick={() => setMostrar(!mostrar)} className='tarjeta-boton-close'> <img src="/menu-nav-close.svg" alt="" /></div>
                    <div className='dosarticleflex' >
                        <div className='titulo-pages'>
                            <h2>{title}</h2>
                            <p>{mainText}</p>
                        </div>
                        <article className='dosarticledos'>
                            <h2 className='subtitulo-pages'>{subText}</h2>
                            <div className='lista-article'>
                                <ul>
                                    {listItems.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </div>

                    <div style={{ marginTop: "50px" }}>
                        <p className='subtitulo-pages'>{subtitle}</p>
                        <div className='herramientas-grid'>
                            {toolCards.map((tool, index) => (
                                <article key={index} className='herramineta-card'>
                                    <h2>{tool.title}</h2>
                                    <ul>
                                        {tool.items.map((item, subIndex) => (
                                            <li key={subIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
