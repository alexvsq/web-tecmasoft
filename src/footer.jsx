import React from 'react'
import "./footer.css"

export default function Footer() {
    return (
        <>
            <section className='footer-contenedor'>
                <div className='container'>
                    <footer className='footer-main'>

                        <div className='footer-img'>
                            <img src="/logo.png" alt="" />
                        </div>

                        <div className='footer-col'>
                            <h3>Productos</h3>

                            <ul>
                                <li>Firewall</li>
                                <li>Antivirus - Antiransomware</li>
                                <li>Antispam</li>
                                <li>Telefonía IP</li>
                                <li>Red Hat</li>
                                <li>SUSE Linux</li>
                                <li>Certificados Digitales</li>
                                <li>Storage</li>
                            </ul>
                        </div>

                        <div className='footer-col'>
                            <h3>Servicios</h3>

                            <ul>
                                <li>Ethical Hacking</li>
                                <li>Servicio (IaaS) Gestionado</li>
                                <li>Migración de Data Center</li>
                                <li>Mantenimiento de Data Center</li>
                                <li>Soporte de Servidores</li>
                                <li>Outsourcing</li>
                                <li>Monitoreo de Red</li>

                            </ul>
                        </div>


                        <div className='footer-col'>
                            <h3>Cloud y Data Center</h3>

                            <ul>
                                <li>Zimbra Cloud</li>
                                <li>Servidores Cloud</li>
                                <li>Drive Nextcloud</li>
                                <li>Centralita PBX Cloud</li>
                                <li>Virtualización</li>
                                <li>Backup Cloud</li>

                            </ul>
                        </div>

                        <div className='footer-col'>
                            <h3>Certificación LPI</h3>

                            <ul>
                                <li> Certificación LPIC 1 Oficial </li>

                                <li> Certificación LPIC 2 Oficial </li>
                            </ul>
                        </div>

                    </footer>

                </div>
            </section>
            <footer className='container'>
                <div className='footer-footer'>

                    <div className='icons-footer'>
                        <img src="/footer/icon-ubicacion.svg" alt="" />
                        <p>tecamsoft (dirección)</p>
                    </div>

                    <div className='icons-footer'>
                        <img src="/footer/icon-telefono.svg" alt="" />
                        <p>tecamsoft (número)</p>
                    </div>

                    <div className='icons-footer'>
                        <img src="/footer/icon-mail.svg" alt="" />
                        <p>tecamsoft (correo)</p>
                    </div>

                    <div className='icons-footer'>
                        <img src="/footer/icon-wsp.svg" alt="" />
                        <p>tecamsoft (número)</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
