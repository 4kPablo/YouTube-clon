import React from "react";
import inicio from "../assets/inicio.png";
import shorts from "../assets/shorts.png";
import suscripciones from "../assets/suscripciones.png";
import mi_biblioteca from "../assets/mi_biblioteca.png";
import { CustomLink } from "./CustomLink";

export const BottomNavbar = () => {
  return (
    <div className="flex *:flex-1 fixed bottom-0 items-center justify-around w-full h-[49px] border-t bg-[#0f0f0f] border-gray-800 text-white">
      <CustomLink to="/" className="flex flex-col items-center">
        <img
          src={inicio}
          alt="Inicio"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">Inicio</p>
      </CustomLink>
      <CustomLink to="/shorts" className="flex flex-col items-center">
        <img
          src={shorts}
          alt="Shorts"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">Shorts</p>
      </CustomLink>
      <CustomLink to="/subscriptions" className="flex flex-col items-center">
        <img
          src={suscripciones}
          alt="Suscripciones"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">
          Suscripciones
        </p>
      </CustomLink>
      <CustomLink to="/library" className="flex flex-col items-center">
        <img
          src={mi_biblioteca}
          alt="Mi biblioteca"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">
          Mi biblioteca
        </p>
      </CustomLink>
    </div>
  );
};
