import { React, useState } from "react";
import yt_logo from "../assets/yt_logo.png";
import user_avatar from "../assets/user_avatar.jpg";
import search_black from "../assets/search_black.png";
import search_gray from "../assets/search_gray.png";

export const TopNavbar = () => {
  const [isSearchBarActive, setIsSearchBarActive] = useState(true);

  return (
    <>
      <div className="flex items-center justify-between h-[48px] *:mx-3 *:cursor-pointer">
        <a href=".">
          <img className="h-5" src={yt_logo} alt="logo" />
        </a>
        <div className="flex items-center gap-6">
          <img
            className="h-5"
            onClick={() => {
              setIsSearchBarActive(!isSearchBarActive);
            }}
            src={search_black}
            alt="buscar"
          />
          <img className="h-6 rounded-full" src={user_avatar} alt="logo" />
        </div>
      </div>
      {isSearchBarActive ? (
        <SearchBar
          isActive={isSearchBarActive}
          setIsActive={setIsSearchBarActive}
        />
      ) : (
        <></>
      )}
    </>
  );
};

const SearchBar = ({ isActive, setIsActive }) => {
  return (
    <div className="flex absolute justify-center items-center h-[49px] px-4 w-full bg-[#212121]">
      <span
        className="material-symbols-outlined hover:cursor-pointer text-white mr-4"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        arrow_back
      </span>
      <input
        className="rounded-full px-4 h-8 w-full outline-none text-white placeholder-[#AAAAAA] bg-[#383838]"
        type="text"
        placeholder="Buscar en YouTube"
      />
      <img
        className="absolute hover:cursor-pointer right-8 h-5"
        src={search_gray}
        alt="buscar"
      />
    </div>
  );
};
