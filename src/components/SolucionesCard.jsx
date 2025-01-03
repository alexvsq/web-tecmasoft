import React from 'react'
import TarjetaPopUp from './TarjetaPopUp.jsx';

export default function SolucionesCard({ objCard }) {

  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <>
      <div
        onClick={() =>
          setShowMenu(!showMenu)}
      >
        <article
          className="h-[165px] border border-bordes p-2 flex flex-col justify-center items-center gap-4  hover:bg-bordes cursor-pointer"
        >
          <div>
            <img
              loading="lazy"
              className="w-14 h-14 object-contain"
              src={objCard.imgSrc}
              alt="zimbra"
            />
          </div>

          <p className="text-center">{objCard.title}</p>
        </article>
      </div>
      <TarjetaPopUp Show={showMenu} setShow={setShowMenu} objCard={objCard} />

    </>
  )
}

