import React from "react";

export const FilterBar = () => {
  return (
    <div className="flex items-center justify-between h-[49px] *:mx-3 *:cursor-pointer border-y overflow-x-auto no-scrollbar border-[#3f3f3f]">
      <span className="pointer-events-none shrink-0 px-2 h-8 text-center place-content-center rounded-sm bg-[#FFFFFF1A] text-white material-symbols-outlined">
        explore
      </span>
      <div className="flex *:font-[Roboto] text-sm font-medium text-nowrap *:rounded-lg *:h-8 *:px-3 gap-3">
        <p className="bg-white place-content-center">Todo</p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Videojuegos
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          JavaScript
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">Música</p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">Mixes</p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Psicología
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Sistemas Operativos
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Teorías
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          En directo
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Nintendo
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Subidas recientes
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Speed paiting
        </p>
      </div>
    </div>
  );
};
