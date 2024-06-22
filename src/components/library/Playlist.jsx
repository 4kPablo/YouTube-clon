import React from "react";

export const Playlists = ({
  id,
  img,
  videoCount,
  title,
  privacy,
  creator,
  showOptions,
}) => {
  return (
    <div className="flex mx-4 my-2 *:shrink-0" key={id}>
      <div className="relative flex flex-col items-center">
        <div className="absolute flex items-center bottom-2 right-2 place-content-center bg-black/55 rounded pt-[1px] px-1 z-20 font-medium text-white text-xs font-roboto hover:cursor-pointer">
          <span class="material-symbols-outlined">playlist_play</span>
          <p className="ml-1">{videoCount}</p>
        </div>
        <div className="absolute -m-1 z-0 bg-[#767F93] rounded-t-xl h-[92px] w-[144px]"></div>
        <img
          src={img}
          alt="thumbnail"
          className="hover:cursor-pointer z-10 w-[160px] rounded-xl"
        />
      </div>
      <div className="flex flex-1 pl-3 pt-[7px] justify-between">
        <div className="flex  justify-start items-start flex-col place-content-center hover:cursor-pointer">
          <p className="text-white text-sm font-normal font-roboto leading-4 truncate-multiline">
            {title}
          </p>
          <ul className="flex items-center leading-4">
            <li className="text-gray-400 text-xs">{privacy}</li>
            <li className="text-gray-400 font-bold mx-1">·</li>
            <li className="text-gray-400 text-xs">Lista de reproducción</li>
          </ul>
        </div>
      </div>
      <span
        className={
          showOptions
            ? "flex px-4 hover:cursor-pointer hover:bg-[#3F3F3F] h-[48px] w-[48px] rounded-full items-center justify-center material-symbols-outlined text-white"
            : "hidden"
        }
      >
        more_vert
      </span>
    </div>
  );
};
