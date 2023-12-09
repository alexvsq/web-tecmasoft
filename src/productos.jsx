import React from 'react'
import './productos.css'
import { Link } from 'react-router-dom'

export default function Productos() {
    return (
        <section className='container' id='productos'>

            <header className='titulo-productos'>

                <p>Nuestros Productos</p>
                <div style={{ width: '290px', height: '1px', backgroundColor: 'var(--verde)' }}></div>
            </header>

            <main className='productos-grid'>
                <Link to="firewallcomerciales">
                    <article className='card-producto1'>
                        <img className='card-producto1-icon' src="/productos/firewall-comerciales.svg" alt="" />
                        <h3>Firewall Comerciales</h3>
                        <ul>
                            <li>UTM Sophos XG</li>
                            <li>UTM Fortinet</li>
                            <li>FortiMail</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>

                <Link to="antiviruscomerciales">
                    <article className='card-producto1'>
                        <img src="/productos/antivirus-antiransomware.svg" alt="" />
                        <h3>Antivirus Antiransomware</h3>
                        <ul>
                            <li>Sophos Antivirus </li>
                            <li>Kaspersky</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>

                <Link to="antispam">

                    <article className='card-producto1'>
                        <img src="/productos/antispam.svg" alt="" />
                        <h3>Antispam Comerciales</h3>
                        <ul>
                            <li>Sophos Mail</li>
                            <li>Magic Spam</li>
                            <li>FortiMail</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>

                <Link to="telefoniaip">

                    <article className='card-producto1'>
                        <img src="/productos/telefonia.svg" alt="" />
                        <h3>Telefonía IP</h3>
                        <ul>
                            <li>Centrales Telefónicas</li>
                            <li>Módulos de Telefonía</li>
                            <li>Sistema de Borde Controler (SBC)</li>
                        </ul>
                        <footer className='producto1-arrow'>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </footer>
                    </article>
                </Link>



            </main>

            <div className='flex-grid-productos'>

                <section className='flex-grid-productos-texto'>
                   Descubre soluciones avanzadas que potenciarán el rendimiento de tu empresa, cada producto en nuestra selección está diseñado para impulsar la eficiencia, seguridad y rendimiento de tu empresa. Con tecnología de vanguardia, te ofrecemos las herramientas que necesitas para prosperar en la era digital.
                   
                    <div style={{ width: '100px', height: "1px", backgroundColor: "var(--verde)", marginTop: "15px" }}></div>

                </section>

                <aside className='flex-grid-productos-cards'>
                    <a href="#">
                        <article className='card-producto2'>
                            <img className='card-producto2-icon' src="/productos/redhat-icon.svg" alt="redhat" />

                            <p>Red Hat</p>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </article>
                    </a>

                    <a href="#">
                        <article className='card-producto2'>
                            <img className='card-producto2-icon' src="/productos/linux-icon.svg" alt="redhat" />

                            <p>Suse Linux</p>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </article>
                    </a>

                    <a href="#">
                        <article className='card-producto2'>
                            <img className='card-producto2-icon' src="/productos/servidores-cloud-icon.svg" alt="redhat" />

                            <p>Servidores Cloud</p>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </article>
                    </a>

                    <a href="#">
                        <article className='card-producto2'>
                            <img className='card-producto2-icon' src="/productos/storage-icon.svg" alt="redhat" />

                            <p>Storage</p>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </article>
                    </a>

                    <a href="#">
                        <article className='card-producto2'>
                            <img className='card-producto2-icon' src="/productos/certificados-icon.svg" alt="redhat" />

                            <p>Certificados Digitales</p>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </article>
                    </a>

                    <a href="#">
                        <article className='card-producto2'>
                            <img className='card-producto2-icon' src="/productos/zextras-icon.svg" alt="redhat" />

                            <p>Zextras Carbonio</p>

                            <img src="/productos/producto-arrow-right.svg" alt="producto-arrow-right" />

                        </article>
                    </a>
                </aside>

            </div>

        </section>

    )
}
