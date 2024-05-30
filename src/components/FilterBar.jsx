import React from "react";

export const FilterBar = () => {
  return (
    <div className="flex items-center justify-between h-[48px] gap-1 *:mx-3 *:cursor-pointer border-b border-gray-800">
      <span className="pointer-events-none bg-[#FFFFFF1A] font-light h-8 w-10 text-center place-content-center rounded-sm text-white material-symbols-outlined">
        explore
      </span>
      <div className="flex *:font-[Roboto] text-sm *:rounded-lg *:h-8 *:px-3 gap-3">
        <p className="bg-white place-content-center">Todo</p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Videojuegos
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          JavaScript
        </p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">Música</p>
        <p className="bg-[#FFFFFF1A] text-white place-content-center">Mixes</p>
      </div>
    </div>
  );
};
