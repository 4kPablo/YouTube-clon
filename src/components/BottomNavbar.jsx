import React from "react";
import home from "../assets/ui/home.png";
import home_active from "../assets/ui/home--active.png";
import shorts from "../assets/ui/shorts.png";
import shorts_active from "../assets/ui/shorts--active.png";
import subscriptions from "../assets/ui/subscriptions.png";
import subscriptions_active from "../assets/ui/subscriptions--active.png";
import library from "../assets/ui/library.png";
import library_active from "../assets/ui/library--active.png";
import { CustomLink } from "./CustomLink";

export const BottomNavbar = () => {
  return (
    <div className="flex *:flex-1 fixed bottom-0 items-center justify-around w-full h-[49px] border-t bg-[#0f0f0f] border-gray-800 text-white">
      <CustomLink to="/" className="flex flex-col items-center">
        <img
          src={home_active}
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
          src={subscriptions}
          alt="Suscripciones"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">
          Suscripciones
        </p>
      </CustomLink>
      <CustomLink to="/library" className="flex flex-col items-center">
        <img
          src={library}
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
