import { React, useState } from "react";

import "./servicios-cloud.css";
import Tarjeta from "./components/tarjeta";


export default function ServiciosCloud() {

  const [showZimbra, setShowZimbra] = useState(false);
  const [showImmail, setShowImmail] = useState(false);
  const [showZabbix, setShowZabbix] = useState(false);
  const [showPbx, setShowPbx] = useState(false);


  const handleShowZimbra = () => {
    setShowZimbra(!showZimbra);
  };
  const handleShowImmail = () => {
    setShowImmail(!showImmail);
  };
  const handleShowZabbix = () => {
    setShowZabbix(!showZabbix);
  }
  const handleShowPbx = () => {
    setShowPbx(!showPbx);
  }


  return (
    <>

      <Tarjeta
        show={showZimbra}
        title="Zimbra cloud"
        mainText="Correo Empresarial en la Nube para la Micro, Pequeña y Mediana Empresa
        Los servicios de correo electrónico de Zimbra son un nuevo paradigma que ha surgido en la industria de TI para solucionar todos los problemas de correo.  Zimbra es una excelente alternativa a servidores de correo Exchange y otras opciones costosas bajo licenciamiento del mercado."
        subtitle="Zimbra como Servicio en la Nube  "
        subText="Trabajamos con la configuración que usted prefiera"
        listItems={[
          "Zimbra como Servicio en la Nube  ",
          "Servidor de Zimbra instalado en sus Servidores Onpremise",
          "Servidor de Correo Hibrida, Zimbra Opensource integrado con otras plataformas de correo como Exchance, Office 365, Gsuite, Zimbra Professional."
        ]}
        toolCards={[
          {
            title: "Solo pague por buzones Premium para sus super usuarios",
            items: [""],
          },
          {
            title: "Ahorros superiores al 60% al incorporar la solución zimbra",
            items: [
              "",
            ],
          },
          {
            title: "Servidor Zimbra sin costo por buzón para usuarios básicos",
            items: [
              ""
            ],
          },
        ]}
      />

      <Tarjeta
        show={showImmail}
        title="Immail Cloud"
        mainText="Nuestra Plataforma de Colaboración y Mensajería instantánea, permite mejorar la comunicación entre los colaboradores de la empresa, asigna tareas de trabajos en grupo y por participantes, cuenta con Drive de 1 TB de almacenamiento para realizar backup permite compartir documentos o archivos y por último dispone una solución de Videoconferencia para 250 participantes en por sala."
        subtitle="Costo Por Licencia Anual $ 15.00"
        subText="IMMAIL ENTERPRISE"
        listItems={[
          "Almacenamiento",
          "Número de usuarios",
          "Historial de mensajes",
          "Búsqueda Avanzada",
        ]}
        toolCards={[
          {
            title: "",
            items: [""],
          },
          {
            title: "",
            items: [
              "",
            ],
          },
          {
            title: "",
            items: [
              "",
              "",
            ],
          },
        ]}
      />

      <Tarjeta
        show={showZabbix}
        title="Zabbix Cloud"
        mainText="Monitorea cualquier Dispositivo y Obtén un panorama global de la infraestructura en IT
        - Contrata Zabbix en la Nube, on-premise y obtén mayor flexibilidad para el control de tus dispositivos y aplicaciones, tenga el control total de tus datos."

        subtitle="CARACTERISTICA DE ZABBIX"

        subText="Trabajamos con la configuración que usted prefiera"
        listItems={[
          "Recopilación de Datos",
          "Detectar Problemas",
          "Alertas"
        ]}
        toolCards={[
          {
            title: "Visualizaciones de Datos",
            items: ["Mostrar los datos recopilados de muchas formas posibles , Amplia seleccion de diferentes widgets , Colocacion simple de arrastrar y soltar con ampliado de widgets, Cada widget es altamente personalizable para adaptarse a sus necesidades, Muestra datos, problemas, infraestructura y geo maps en tus dashboards, Muestra la informacion SLA de tu bussiness service en tus tableros"],
          },
          {
            title: "Tablero Consolidado",
            items: [
              "Mejora el seguimiento de problemas con el analisis de la causa raiz Correlaciona lo existente y problemas entrantes y realiza un analisis de la casa",
            ],
          },
          {
            title: "Servicio de Monitoreo",
            items: [
              "Realiza un seguimiento de los KPI con la supervisión de business service monitoring"
            ],
          },
        ]}
      />


      <Tarjeta
        show={showPbx}
        title="CENTRAL PBX CLOUD"
        mainText="Plataforma de Central Telefónica en la Nube, recibe tus llamadas desde el móvil o desde el punto remoto, interconecta sucursales ahorrando costos de comunicación está diseñado para cualquier tipo de empresas

        Con su Central Virtual en la nube, evitará el mantenimiento, las actualizaciones y la necesidad de disponer de un espacio físico. Siempre tendrá lo último en telefonía a un costo fijo por mes y mayores beneficios."

        subtitle="Las funcionalidades estándar de nuestro servicio:"

        subText="Caracteristicas"
        listItems={[
          "Transferencia de llamadas (directas o con consulta)",
          "Conferencias múltiples",
          "Salas de conferencias"
        ]}
        toolCards={[
          {
            title: "Administración Via Web",
            items: ["Olvídese de complicados softwares al que no le dan acceso para administrar su central IP Cloud. La interfaz de administración de nuestra central es Gráfica y accesible desde cualquier navegador web."],
          },
          {
            title: "Reporte y Grabación de Llamadas",
            items: [
              "Monitoree a su personal para controlar su productividad y su atención al cliente. Es más fácil con nuestro sistema porque puede descargar las conversaciones desde una interfase web y escucharlas en su PC o descargarlas para imputaciones judiciales.",
            ],
          },
          {
            title: "Extensiones Virtuales en su Movil",
            items: [
              "Instale una aplicación softphone en su PC o laptop, y tendrá instantáneamente una extensión telefónica de su conmutador en su PC (mediante el uso de diadema y micrófono). Ideal para centros de contacto o usuarios que están de viaje y cuentan con acceso a internet."
            ],
          },
        ]}
      />





      <div className="contenedor-cloud">
        <section className="container">
          <div className=" titulo-cloud ">
            Soluciones <br /> <strong> Cloud </strong>
          </div>
          <section className="soluciones-cloud ">


            <article onClick={handleShowZimbra} className="card-cloud">
              <img src="/cloud/zimbra.svg" alt="zimbra" />
              <p>Zimbra cloud</p>
            </article>



            <article onClick={handleShowImmail} className="card-cloud">
              <img src="/cloud/immail.svg" alt="zimbra" />
              <p>Immail Cloud</p>
            </article>



            <article className="card-cloud">
              <img src="/cloud/vps.svg" alt="zimbra" />
              <p>Servidores VPS</p>
            </article>


            <article onClick={handleShowZabbix} className="card-cloud">
              <img src="/cloud/zabbix.svg" alt="zimbra" />
              <p>Zabbix Cloud</p>
            </article>



            <article className="card-cloud">
              <img src="/cloud/nxt.svg" alt="zimbra" />
              <p>Nextcloud</p>
            </article>



            <article onClick={handleShowPbx} className="card-cloud">
              <img src="/cloud/pbx.svg" alt="zimbra" />
              <p>Central PBX Cloud</p>
            </article>



            <article className="card-cloud">
              <img src="/cloud/callcenter.svg" alt="zimbra" />
              <p>Sistema de Call Center Cloud</p>
            </article>




            <article className="card-cloud">
              <img src="/cloud/proxmox.svg" alt="zimbra" />
              <p>Proxmox Datacenter</p>
            </article>




            <article className="card-cloud">
              <img src="/cloud/backup.svg" alt="zimbra" />
              <p>Backup Cloud</p>
            </article>




            <article className="card-cloud">
              <img src="/cloud/jitsi.svg" alt="zimbra" />
              <p>Videoconferencia JITSI</p>
            </article>



          </section>
        </section>
      </div>
    </>
  );
}
