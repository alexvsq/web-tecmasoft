import { React, useState } from "react";

import "./servicios-cloud.css";
import Tarjeta from "./components/tarjeta";

export default function ServiciosCloud() {

  const [show, setShow] = useState(false);

  const handleShow = () => {
      setShow(!show);
  }
  

  const info = [
    {
      id: 1,
      titulo: "Zimbra cloud",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
      id: 2,
      titulo: "Immail Cloud",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    },
    {
      id: 3,
      titulo: "Servidores VPS",
      texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    }
  ]




  return (
    <>

      <Tarjeta 
        show={show}
      />

      <div className="contenedor-cloud">
        <section className="container">
          <div className=" titulo-cloud ">
            Soluciones <br /> <strong> Cloud </strong>
          </div>
          <section className="soluciones-cloud ">

    
              <article onClick={handleShow} className="card-cloud">
                <img src="/cloud/zimbra.svg" alt="zimbra" />
                <p>Zimbra cloud</p>
              </article>
 

            <a href="">
              <article className="card-cloud">
                <img src="/cloud/immail.svg" alt="zimbra" />
                <p>Immail Cloud</p>
              </article>
            </a>

            <a href="">
              <article className="card-cloud">
                <img src="/cloud/vps.svg" alt="zimbra" />
                <p>Servidores VPS</p>
              </article>
            </a>
            <a href="">
              <article className="card-cloud">
                <img src="/cloud/zabbix.svg" alt="zimbra" />
                <p>Zabbix Cloud</p>
              </article>
            </a>
            <a href="">
              <article className="card-cloud">
                <img src="/cloud/nxt.svg" alt="zimbra" />
                <p>Nextcloud</p>
              </article>
            </a>
            <a href="">
              <article className="card-cloud">
                <img src="/cloud/pbx.svg" alt="zimbra" />
                <p>Central PBX Cloud</p>
              </article>
            </a>
            <a href="">
              <article className="card-cloud">
                <img src="/cloud/callcenter.svg" alt="zimbra" />
                <p>Sistema de Call Center Cloud</p>
              </article>
            </a>
            <a href="">

              <article className="card-cloud">
                <img src="/cloud/proxmox.svg" alt="zimbra" />
                <p>Proxmox Datacenter</p>
              </article>
            </a>
            <a href="">

              <article className="card-cloud">
                <img src="/cloud/backup.svg" alt="zimbra" />
                <p>Backup Cloud</p>
              </article>
            </a>
            <a href="">

              <article className="card-cloud">
                <img src="/cloud/jitsi.svg" alt="zimbra" />
                <p>Videoconferencia JITSI</p>
              </article>
            </a>


          </section>
        </section>
      </div>
    </>
  );
}
