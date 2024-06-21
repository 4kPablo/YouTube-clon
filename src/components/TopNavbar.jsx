import { React, useEffect, useState } from "react";
import { CustomLink } from "./CustomLink";
import { useLocation } from "react-router-dom";
import yt_logo from "../assets/ui/yt_logo.png";
import yt_textless from "../assets/ui/yt_textless.png";
import user_avatar from "../assets/ui/user_avatar.jpg";
import search_black from "../assets/ui/search--black.png";
import search_gray from "../assets/ui/search--gray.png";

export const TopNavbar = () => {
  const [isSearchBarActive, setIsSearchBarActive] = useState(false);
  const [isSubsModeActive, setIsSubsModeActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/all_subscriptions") {
      setIsSubsModeActive(true);
    } else {
      setIsSubsModeActive(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="flex items-center justify-between w-full h-[48px]">
        <CustomLink to="/">
          <img
            className={isSubsModeActive ? "h-[30px] mx-3" : "h-5 mx-3"}
            src={isSubsModeActive ? yt_textless : yt_logo}
            alt="logo"
          />
        </CustomLink>
        <p
          className={
            isSubsModeActive
              ? "flex-1 font-roboto text-[15px] font-medium text-white"
              : "hidden"
          }
        >
          Todas las suscripciones
        </p>
        <div className="flex items-center mx-3 gap-6">
          <img
            className="h-5"
            onClick={() => {
              setIsSearchBarActive(!isSearchBarActive);
            }}
            src={search_black}
            alt="buscar"
          />
          {isSubsModeActive ? (
            <span className="h-6 items-center justify-center material-symbols-outlined hover:cursor-pointer text-white">
              more_vert
            </span>
          ) : (
            <img className="h-6 rounded-full" src={user_avatar} alt="logo" />
          )}
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
