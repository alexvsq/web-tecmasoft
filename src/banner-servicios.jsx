import React, { useState, useEffect } from 'react';
import './banner-servicios.css';
import Boton1 from './components/boton1.jsx';

export default function BannerServicios() {
    const [currentInfoIndex, setCurrentInfoIndex] = useState(1);

    const info = {
        1: {
            img: "image1",
            titulo: " Central &",
            tituloStrong: "Call Center Cloud",
            texto: "Software potente de alto alcance para centro de llamadas alojado en la nube.",
            textoSpan: "Toda la comunicación que tu empresa necesita en Ia nube",
        },

        2: {
            img: "image2",
            titulo: " Backup",
            tituloStrong: "Cloud",
            texto: "Respalda la información de tu empresa en la nube y asegura la continuidad operacional",
            textoSpan: "Backup sincronizado para servidores físicos virtuales",
        },

        3: {
            img: "image3",
            titulo: " Datacenter",
            tituloStrong: "Cloud",
            texto: "Migra tus Servidores Fisicos a la nube te ofrecemos tráfico ilimitado, firewall y protección DDoS",
            textoSpan: "Tu negocio siempre disponible en la nube",
        },

        4: {
            img: "image4",
            titulo: "Mejore su rendimiento",
            tituloStrong: "De monitoreo",
            texto: "ZABBIX",
            textoSpan: "Zabbix esta 100% listo para empresas",
        },

        5: {
            img: "image5",
            titulo: "Ethical Hacking",
            tituloStrong: "Cyber Seguridad",
            texto: "Protegemos puntos debiles de tu empresa",
            textoSpan: "El 95% de los ciberataques son Fallos Humanos",
        },

        6: {
            img: "image6",
            titulo: "Zimbra",
            tituloStrong: "Cloud",
            texto: "Soluciónes de correo electrónico seguro para tu empresa",
            textoSpan: "Migra con nosotros y ahorra en soporte",
        }
    };


    const handleArrowClick = (direction) => {
        const totalItems = Object.keys(info).length;
        let newIndex;

        if (direction === "left") {
            newIndex = currentInfoIndex > 1 ? currentInfoIndex - 1 : totalItems;
        } else {
            newIndex = currentInfoIndex < totalItems ? currentInfoIndex + 1 : 1;
        }

        setCurrentInfoIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleArrowClick("right");
        }, 7000);


        return () => clearInterval(intervalId);
    }, [currentInfoIndex]);


    return (
        <main className='banner-servicios'>

                <article className={`banner-servicios-image ${info[currentInfoIndex].img} `}>
                    <p>Destacados</p>
                    <h2 className='banner-servicio-titulos'>
                        {info[currentInfoIndex].titulo} <br /> <strong>{info[currentInfoIndex].tituloStrong}</strong>
                    </h2>
                </article>

                <aside className='banner-servicios-textos-caja'>
                    <div className='banner-servicios-textos'>
                        <p className='texto-servicio'>
                            {info[currentInfoIndex].texto} <br /> <span>{info[currentInfoIndex].textoSpan}</span>
                        </p>
                    </div>

                    <footer className='servicio-aside-footer'>
                        <Boton1 texto='Más Información' />

                        <div className='botones-banner-servicio'>
                            <img onClick={() => handleArrowClick("left")} src="/arrow-left-verde.svg" alt="" />
                            <img onClick={() => handleArrowClick("right")} src="/arrow-right-verde.svg" alt="" />
                        </div>
                    </footer>
                </aside>

        </main >
    );
}

