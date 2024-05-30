import React from "react";

export const VideoCard = ({
  img,
  pfp,
  duration,
  title,
  channel,
  views,
  date,
}) => {
  return (
    <div className="mb-2 relative">
      <img src={img} alt="thumbnail" className="hover:cursor-pointer" />
      <p className="absolute bottom-20 right-2 place-content-center bg-black/80 rounded pt-[1px] px-1 font-medium text-white text-sm font-roboto">
        {duration}
      </p>
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={pfp}
            alt="user logo"
            className="h-10 m-4 rounded-full hover:cursor-pointer"
          />
          <div className="flex flex-col place-content-center hover:cursor-pointer">
            <p className="text-white font-bold">{title}</p>
            <ul className="flex text-sm">
              <li className="text-gray-400">{channel}</li>
              <li className="text-gray-400 font-bold mx-1">·</li>
              <li className="text-gray-400">{views} visualizaciones</li>
              <li className="text-gray-400 font-bold mx-1">·</li>
              <li className="text-gray-400">hace {date}</li>
            </ul>
          </div>
        </div>
        <span class="p-4 hover:cursor-pointer hover:bg-[#3F3F3F] h-fit rounded-full material-symbols-outlined text-white">
          more_vert
        </span>
      </div>
    </div>
  );
};
