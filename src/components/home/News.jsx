import { randomize } from "../../randomize";
import { news } from "../../data/news";

export const News = () => {
  randomize(news);
  return (
    <div className="flex flex-col font-roboto w-full *:cursor-pointer">
      <div className="flex justify-between mx-3">
        <p className="text-lg text-start my-3 font-roboto font-medium text-white">
          Noticias destacadas
        </p>
        <span className="material-symbols-outlined place-content-center font-thin text-4xl text-white">
          close
        </span>
      </div>
      <div className="flex overflow-x-auto no-scrollbar *:font-[Roboto] text-sm font-medium">
        {news.map((video) => {
          return (
            <div className="w-[160px] ml-3 shrink-0">
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
              <div className="flex mt-[12px] mb-[16px] justify-between">
                <div className="flex items-start">
                  <div className="flex flex-col place-content-center hover:cursor-pointer">
                    <p className="text-white text-sm font-normal font-roboto">
                      {video.title}
                    </p>
                    <p className="text-gray-400">{video.channel}</p>
                    <p className="text-gray-400">{video.views}...</p>
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
