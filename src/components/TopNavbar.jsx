import React from "react";
import yt_logo from "../assets/yt_logo.png";
import user_avatar from "../assets/user_avatar.jpg";

export const TopNavbar = () => {
  return (
    <div className="flex items-center justify-between h-[48px] *:mx-3 *:cursor-pointer">
      <img className="h-5" src={yt_logo} alt="logo" />
      <div className="flex gap-6">
        <span className="material-symbols-outlined pointer-events-none text-gray-500">
          search
        </span>
        <img className="h-6 rounded-full" src={user_avatar} alt="logo" />
      </div>
    </div>
  );
};
