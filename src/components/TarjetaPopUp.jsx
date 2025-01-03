
export default function TarjetaPopUp({ Show, setShow, objCard }) {

  if (!objCard.mainText) {
    return null
  }
  return (
    <div
      class={`fixed z-10 inset-0 bg-white/5 backdrop-blur-md flex justify-center items-center  ${Show ? "" : "hidden"}`}
    >
      <section class="w-[90%] h-[90%] md:w-[80%] md:h-[80%] bg-azulOscuro rounded-xl p-5 md:p-10 animate-fade-up overflow-y-scroll animate-duration-200">
        <header className='flex justify-end'>
          <img
            onClick={() => setShow(!Show)}
            className='w-12 shadow-card cursor-pointer' src="/icons/menu-close.png" alt="menu-close" />
        </header>

        <section className=" flex flex-col md:flex-row">
          <div className=" md:w-1/2">
            <header>
              <p className=" text-3xl font-bold py-4">{objCard.title}</p>
            </header>

            <div>
              <p className="text-sm text-textos max-w-[50ch]">{objCard.mainText}</p>
            </div>
          </div>

          <aside className=" md:w-1/2">
            <p className=" text-verde font-bold py-4">{objCard.subText}</p>
            <ul className=" list-disc marker:text-verde list-inside text-sm">
              {objCard.listItems &&
                objCard.listItems.map((item, index) => {
                  return <li key={index + item}>{item}</li>
                })
              }
            </ul>
          </aside>
        </section>

        <section>

          <header className=" py-4">
            <p className=" text-xl text-verde font-bold py-4">{objCard.subtitle}</p>

          </header>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-10">

            {objCard.toolCards && objCard.toolCards.map((tool, index) => (
              <article key={index}>
                <p className=" text-center text-xl font-bold py-2">{tool.title}</p>
                <ul>
                  {tool.items.map((item, subIndex) => (
                    <li key={subIndex} className="text-textos text-sm">{item}</li>
                  ))}
                </ul>
              </article>
            ))}

          </div>

        </section>
      </section>
    </div>

  )
}

/* let title = "Zimbra cloud"
let mainText = `Correo Empresarial en la Nube para la Micro, Pequeña y Mediana Empresa
Los servicios de correo electrónico de Zimbra son un nuevo paradigma que ha surgido en la industria de TI para solucionar todos los problemas de correo.  Zimbra es una excelente alternativa a servidores de correo Exchange y otras opciones costosas bajo licenciamiento del mercado.`
let subtitle = "Zimbra como Servicio en la Nube  "
let subText = "Trabajamos con la configuración que usted prefiera"
let listItems =
  [
    "Zimbra como Servicio en la Nube  ",
    "Servidor de Zimbra instalado en sus Servidores Onpremise",
    "Servidor de Correo Hibrida, Zimbra Opensource integrado con otras plataformas de correo como Exchance, Office 365, Gsuite, Zimbra Professional."
  ]
let toolCards =
  [
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
  ]
 */

/*
<div
    class={`fixed z-10 inset-0 bg-white/5 backdrop-blur-md flex justify-center items-center  ${Show ? "" : "hidden"}`}
  >
    <section class="w-[80%] h-[80%] bg-azulOscuro rounded-xl  p-10 animate-fade-up overflow-y-scroll animate-duration-200">
      <header className='flex justify-end'>
        <img
          onClick={() => setShow(!Show)}
          className='w-12 shadow-card cursor-pointer' src="/icons/menu-close.png" alt="menu-close" />
      </header>

      <section className=" flex">
        <div className=" w-1/2">
          <header>
            <p className=" text-3xl font-bold py-4">Zimbra Cloud</p>
          </header>

          <div>
            <p className="text-sm text-textos max-w-[50ch]">Correo Empresarial en la Nube para la Micro, Pequeña y Mediana Empresa Los servicios de correo electrónico de Zimbra son un nuevo paradigma que ha surgido en la industria de TI para solucionar todos los problemas de correo. Zimbra es una excelente alternativa a servidores de correo Exchange y otras opciones costosas bajo licenciamiento del mercado.</p>
          </div>
        </div>

        <aside className=" w-1/2">
          <p className=" text-verde font-bold py-4">Trabajamos con la configuración que usted prefiera</p>
          <ul className=" list-disc marker:text-verde list-inside text-sm">
            <li>Zimbra como Servicio en la Nube</li>
            <li>Servidor de Zimbra instalado en sus Servidores Onpremise</li>
            <li>Servidor de Correo Hibrida, Zimbra Opensource integrado con otras plataformas de correo como Exchance, Office 365, Gsuite, Zimbra Professional.</li>
          </ul>
        </aside>
      </section>

      <section>

        <header className=" py-4">
          <p className=" text-xl text-verde font-bold py-4">Zimbra como Servicio en la Nube</p>

        </header>

        <div className=" grid grid-cols-3 gap-10">

          <article>
            <p className=" text-center text-xl font-bold py-2">Solo pague por buzones Premium para sus super usuarios</p>
            <p className="text-textos text-sm">Mostrar los datos recopilados de muchas formas posibles , Amplia seleccion de diferentes widgets , Colocacion simple de arrastrar y soltar con ampliado de widgets, Cada widget es altamente personalizable para adaptarse a sus necesidades, Muestra datos, problemas, infraestructura y geo maps en tus dashboards, Muestra la informacion SLA de tu bussiness service en tus tableros</p>
          </article>

          <article>
            <p className=" text-center text-xl font-bold py-2">Ahorros superiores al 60% al incorporar la solución zimbra</p>
            <p className="text-textos text-sm">Mostrar los datos recopilados de muchas formas posibles , Amplia seleccion de diferentes widgets , Colocacion simple de arrastrar y soltar con ampliado de widgets, Cada widget es altamente personalizable para adaptarse a sus necesidades, Muestra datos, problemas, infraestructura y geo maps en tus dashboards, Muestra la informacion SLA de tu bussiness service en tus tableros</p>
          </article>

          <article>
            <p className=" text-center text-xl font-bold py-2">Servidor Zimbra sin costo por buzón para usuarios básicos</p>
            <p className="text-textos text-sm">Mostrar los datos recopilados de muchas formas posibles , Amplia seleccion de diferentes widgets , Colocacion simple de arrastrar y soltar con ampliado de widgets, Cada widget es altamente personalizable para adaptarse a sus necesidades, Muestra datos, problemas, infraestructura y geo maps en tus dashboards, Muestra la informacion SLA de tu bussiness service en tus tableros</p>
          </article>

        </div>

      </section>
    </section>
  </div>
*/