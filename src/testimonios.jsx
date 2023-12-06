import React from "react";
import "./testimonios.css";

export default function Testimonios() {
  return (
    <div className="testimonios">
      <section className="container testimonios-flex">
        <article className="testimonios-titulo">
          <img src="/icono-titulo-testimonios.svg" alt="" />
          <h2>
            Recomendaciones de <br /> <span>Nuestros Clientes</span>{" "}
          </h2>
        </article>

        <aside >
          <div className="testimonio-card">
            <p className="testimonio-card-texto">
              "Tenemos más de 5 años en contacto con Tecmasoft, y siempre que
              hay un problema que no Io podamos resolver Io escalamos a
              Tecmasoft y recibimos una solucion eficiente y personalizada.
            </p>
            <footer className="footer-card">
              <div>
                <img src="" alt="" />
                <div className="testimonio-card-nombre">
                  <h2>Anthony Paravé</h2>
                  <p>Jefe de Sistemas - Medifarma</p>
                </div>
              </div>

              <div className="testimonio-card-flechas">
                <img src="/arrow-left-azul.svg" alt="" />
                <img src="/arrow-right-azul.svg" alt="" />
              </div>
            </footer>
          </div>
        </aside>
      </section>
    </div>
  );
}
