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
    <div className="min-[588px]:min-w-[270px] min-[588px]:max-w-[397px] min-[588px]:mx-[8px] min-[874px]:w-[270px]">
      <div className="relative">
        <p className="absolute bottom-2 right-2 place-content-center bg-black/70 rounded pt-[1px] px-1 font-medium text-white text-xs font-roboto hover:cursor-pointer">
          {duration}
        </p>
        <img
          src={img}
          alt="thumbnail"
          className="hover:cursor-pointer min-[550px]:rounded-md"
        />
      </div>
      <div className="flex ml-[12px] mt-[12px] mb-[16px] justify-between">
        <div className="flex items-start">
          <img
            src={pfp}
            alt="user logo"
            className="h-10 rounded-full hover:cursor-pointer"
          />
          <div className="flex ml-[12px] flex-col place-content-center hover:cursor-pointer">
            <p className="text-white text-sm font-bold">{title}</p>
            <ul className="flex flex-wrap text-xs">
              <li className="text-gray-400">{channel}</li>
              <li className="text-gray-400 font-bold mx-1">·</li>
              <li className="text-gray-400">{views} visualizaciones</li>
              <li className="text-gray-400 font-bold mx-1">·</li>
              <li className="text-gray-400">hace {date}</li>
            </ul>
          </div>
        </div>
        <span className="flex -mt-2 px-4 hover:cursor-pointer hover:bg-[#3F3F3F] h-[48px] w-[48px] rounded-full items-center justify-center material-symbols-outlined text-white">
          more_vert
        </span>
      </div>
    </div>
  );
};
