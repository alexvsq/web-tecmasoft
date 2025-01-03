import React from 'react'
import TarjetaPopUp from './TarjetaPopUp.jsx';

export default function ProductoCardSecondary({ infoCardProducto }) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <article
        onClick={
          () =>
            setShowMenu(!showMenu)}
        class="h-[80px] w-auto border border-bordes rounded-3xl flex justify-between items-center p-4 hover:bg-bordes transition cursor-pointer shadow-card"
      >
        <div class="bg-verde rounded-full w-12 h-12 flex justify-center items-center">
          <img loading="lazy" class="object-contain p-2" src={infoCardProducto.imgSrc} alt="redhat" />
        </div>

        <div>
          <p>{infoCardProducto.title}</p>
        </div>

        <div>
          <img loading="lazy" class="h-6" src="/icons/arrow.png" alt="arrow" />
        </div>
      </article>

      <TarjetaPopUp Show={showMenu} setShow={setShowMenu} objCard={infoCardProducto} />
    </>
  )
}
