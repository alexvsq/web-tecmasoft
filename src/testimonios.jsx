import React, { useState, useEffect } from "react";
import "./testimonios.css";
import { motion } from "framer-motion";

export default function Testimonios() {
  const testimonios = [
    {
      texto:
        "Gracias a Perulinux hemos ahorrado en costos de infraestructura tecnológica y hemos recibido atención de calidad, ayudándonos proactivamente para que nuestro negocio siga creciendo.",
      nombre: "Victor Gamarra",
      cargo: "Jefe de Infraestructura y Comunicaciones-Grupo Rockys",
      image: "/testimonios/v-gamarra.jpg"
    },
    {
      texto:
        "Perulinux nos ha demostrado ser más que un proveedor; es un aliado estratégico en tecnología. La empresa está respaldada por asesoría personalizada, calidad en el trabajo y respuestas rápidas y oportunas a cada requerimiento.",
      nombre: "Dante Bazán",
      cargo: "Gerente TI - Mixercon",
      image: "/testimonios/d-bazan.jpg"
    },
    {
      texto:
        "Tenemos más de 5 años en contacto con Tecmasoft. Siempre que hay un problema que no podemos resolver, lo escalamos a Tecmasoft y recibimos una solución eficiente y personalizada.",
      nombre: "Anthony Paravé",
      cargo: "Jefe de Sistemas - Medifarma",
      image: "/testimonios/a-parave.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    const totalItems = testimonios.length;
    let newIndex;

    if (direction === "left") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
    } else {
      newIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
    }

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleArrowClick("right");
    }, 5000);

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta

  }, [currentIndex]);

  return (
    <div className="testimonios">
      <section className="container testimonios-flex">
        <article className="testimonios-titulo">
          <img src="/icono-titulo-testimonios.svg" alt="" />
          <h2>
            Recomendaciones de <br /> <span>Nuestros Clientes</span>{" "}
          </h2>
        </article>

        <aside style={{ overflow: "hidden" }}>
          <motion.div
            key={currentIndex}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="testimonio-card"
          >
            <p className="testimonio-card-texto">
              {testimonios[currentIndex].texto}
            </p>
            <footer className="footer-card">
              <div className="footer-card-flex">
                <img className="footer-card-img" src={testimonios[currentIndex].image} alt="" />
                <div className="testimonio-card-nombre">
                  <h2>{testimonios[currentIndex].nombre}</h2>
                  <p>{testimonios[currentIndex].cargo}</p>
                </div>
              </div>

              <div className="testimonio-card-flechas">
                <img
                  onClick={() => handleArrowClick("left")}
                  src="/arrow-left-azul.svg"
                  alt="boton l"
                />
                <img
                  onClick={() => handleArrowClick("right")}
                  src="/arrow-right-azul.svg"
                  alt="boton r"
                />
              </div>
            </footer>
          </motion.div>
        </aside>
      </section>
    </div>
  );
}


/* 
  const testimonios = [
    {
      texto:
        "Gracias a Perulinux hemos ahorrado en costos de infraestructura tecnológica y hemos recibido atención de calidad, ayudándonos proactivamente para que nuestro negocio siga creciendo.",
      nombre: "Victor Gamarra",
      cargo: "Jefe de Infraestructura y Comunicaciones-Grupo Rockys",
    },
    {
      texto:
        "Perulinux nos ha demostrado ser más que un proveedor; es un aliado estratégico en tecnología. La empresa está respaldada por asesoría personalizada, calidad en el trabajo y respuestas rápidas y oportunas a cada requerimiento.",
      nombre: "Victor Gamarra",
      cargo: "Jefe de Infraestructura y Comunicaciones-Grupo Rockys",
    },
    {
      texto:
        "Tenemos más de 5 años en contacto con Tecmasoft. Siempre que hay un problema que no podemos resolver, lo escalamos a Tecmasoft y recibimos una solución eficiente y personalizada.",
      nombre: "Anthony Paravé",
      cargo: "Jefe de Sistemas - Medifarma",
    },
  ];
*/