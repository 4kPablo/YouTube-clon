import { randomize } from "../../randomize";
import { videos } from "../../data/videos";

export const History = () => {
  randomize(videos);
  return (
    <div className="flex flex-col font-roboto w-full *:cursor-pointer">
      <div className="flex justify-between mx-2 items-center">
        <div className="flex items-center">
          <span className="material-symbols-outlined font-extralight text-3xl mr-2 text-white">
            history
          </span>
          <h2 className="text-lg text-start my-3 font-roboto font-bold text-white">
            Historial
          </h2>
        </div>
        <p className="place-content-center font-semibold text-sm rounded-full w-fit h-10 px-3 hover:bg-blue-600/30 text-[#3ea6ff]">
          Ver todo
        </p>
      </div>
      <div className="flex overflow-x-auto no-scrollbar *:font-[Roboto] text-sm font-medium">
        {videos.slice(0, 16).map((video) => {
          return (
            <div className="w-[160px] ml-3 shrink-0" key={video.key}>
              <div className="relative">
                <p className="absolute bottom-1 right-1 place-content-center bg-black/70 rounded pt-[1px] px-1 font-medium text-white text-xs font-roboto hover:cursor-pointer">
                  {video.duration}
                </p>
                <img
                  src={video.img}
                  alt="thumbnail"
                  className="hover:cursor-pointer rounded-md"
                />
              </div>
              <div className="flex mt-[7px] justify-between">
                <div className="flex items-start">
                  <div className="flex flex-col place-content-center hover:cursor-pointer">
                    <p className="text-white text-[13px] font-normal font-roboto leading-4 truncate-multiline">
                      {video.title}
                    </p>
                    <p className="text-gray-400 text-xs">{video.channel}</p>
                    <p className="text-gray-400 text-xs">{video.views} ...</p>
                  </div>
                </div>
                <span className="flex -mt-2 px-4 hover:cursor-pointer hover:bg-[#3F3F3F] h-[48px] w-[48px] rounded-full items-center justify-center material-symbols-outlined text-white">
                  more_vert
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// 423 x 148
