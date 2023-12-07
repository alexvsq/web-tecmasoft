import React from "react";
import "./nosotros.css";

export default function Nosotros() {
  return (
    <section className="nosotros-contenedor" id="nosotros">
      <div className="container">
        <div className="nosotros">
          <article className="nosotros-article">
            <div className="nosotros-titulo">Nosotros
              <div style={{ width: '100px', height: "2px", backgroundColor: "var(--verde)" }}></div>
            </div>
            <p>
              En Tecmasoft, somos más que una consultora de sistemas; somos
              arquitectos de soluciones tecnológicas diseñadas para impulsar el
              éxito de instituciones públicas y privadas. Nos destacamos por
              nuestra especialización y compromiso, analizando a fondo cada
              proyecto para ofrecer respuestas precisas a las demandas del
              entorno.
            </p>
            <img src="/nosotros2.jpg" alt="nostros" />
          </article>

          <aside className="nosotros-aside">
            <div>
              <h2>Visión</h2>
              <p>Buscamos ser la empresa líder en tecnología y consultoría en el país, reconocida por la excelencia en proyectos de TI para instituciones públicas y privadas.</p>
            </div>
            <div>
              <h2>Misión</h2>
              <p>Contribuir al éxito de nuestros clientes ofreciendo servicios de calidad, basados en soluciones tecnológicas que no solo reducen costos, sino que también mejoran la competitividad de las empresas en el panorama peruano.</p>
            </div>
            <img src="/nosotros1.jpg" alt="nosotros2" />
          </aside>
        </div>
      </div>
    </section>
  );
}
