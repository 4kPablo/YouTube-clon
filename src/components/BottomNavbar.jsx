import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CustomLink } from "./CustomLink";
import home from "../assets/ui/home.png";
import shorts from "../assets/ui/shorts.png";
import subscriptions from "../assets/ui/subscriptions.png";
import library from "../assets/ui/library.png";
import home_active from "../assets/ui/home--active.png";
import shorts_active from "../assets/ui/shorts--active.png";
import subscriptions_active from "../assets/ui/subscriptions--active.png";
import library_active from "../assets/ui/library--active.png";

export const BottomNavbar = () => {
  const [homeIsActive, setHomeIsActive] = useState(false);
  const [shortsIsActive, setShortsIsActive] = useState(false);
  const [subscriptionsIsActive, setSubscriptionsIsActive] = useState(false);
  const [libraryIsActive, setLibraryIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHomeIsActive(true);
      setShortsIsActive(false);
      setSubscriptionsIsActive(false);
      setLibraryIsActive(false);
    }
    if (location.pathname === "/shorts") {
      setHomeIsActive(false);
      setShortsIsActive(true);
      setSubscriptionsIsActive(false);
      setLibraryIsActive(false);
    }
    if (location.pathname === "/subscriptions") {
      setHomeIsActive(false);
      setShortsIsActive(false);
      setSubscriptionsIsActive(true);
      setLibraryIsActive(false);
    }
    if (location.pathname === "/all_subscriptions") {
      setHomeIsActive(false);
      setShortsIsActive(false);
      setSubscriptionsIsActive(true);
      setLibraryIsActive(false);
    }
    if (location.pathname === "/library") {
      setHomeIsActive(false);
      setShortsIsActive(false);
      setSubscriptionsIsActive(false);
      setLibraryIsActive(true);
    }
  }, [location.pathname]);

  return (
    <div className="flex *:flex-1 fixed bottom-0 items-center justify-around w-full h-[49px] border-t bg-[#0f0f0f] border-gray-800 text-white">
      <CustomLink to="/" className="flex flex-col items-center">
        <img
          src={homeIsActive ? home_active : home}
          alt="Inicio"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">Inicio</p>
      </CustomLink>

      <CustomLink to="/shorts" className="flex flex-col items-center">
        <img
          src={shortsIsActive ? shorts_active : shorts}
          alt="Shorts"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">Shorts</p>
      </CustomLink>

      <CustomLink to="/subscriptions" className="flex flex-col items-center">
        <img
          src={subscriptionsIsActive ? subscriptions_active : subscriptions}
          alt="Suscripciones"
          className="h-6 mb-[-2px] hover:cursor-pointer"
        />
        <p className="font-[Roboto] text-xs hover:cursor-pointer">
          Suscripciones
        </p>
      </CustomLink>

      <CustomLink to="/library" className="flex flex-col items-center">
        <img
          src={libraryIsActive ? library_active : library}
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
