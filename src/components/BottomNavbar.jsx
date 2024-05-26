import React from "react";
import inicio from "../assets/inicio.png";
import shorts from "../assets/shorts.png";
import suscripciones from "../assets/suscripciones.png";
import mi_biblioteca from "../assets/mi_biblioteca.png";

export const BottomNavbar = () => {
  return (
    <div className="flex fixed bottom-0 items-center justify-around w-full h-[49px] border-t border-gray-800 text-white *:flex-1 *:pointer-events-none">
      <div className="flex flex-col items-center">
        <img src={inicio} alt="Inicio" className="h-6 mb-[-2px]" />
        <p className="font-[Roboto] text-xs">Inicio</p>
      </div>
      <div className="flex flex-col items-center">
        <img src={shorts} alt="Shorts" className="h-6 mb-[-2px]" />
        <p className="font-[Roboto] text-xs">Shorts</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={suscripciones}
          alt="Suscripciones"
          className="h-6 mb-[-2px]"
        />
        <p className="font-[Roboto] text-xs">Suscripciones</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={mi_biblioteca}
          alt="Mi biblioteca"
          className="h-6 mb-[-2px]"
        />
        <p className="font-[Roboto] text-xs">Mi biblioteca</p>
      </div>
    </div>
  );
};
