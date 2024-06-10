import { videos } from "../../videos";
import { GoDotFill as Dot } from "react-icons/go";
import { SlArrowRight as ArrowRight } from "react-icons/sl";

export const ChannelFilter = () => {
  return (
    <div className="flex items-center justify-between w-full h-[52px] px-3">
      <div className="flex gap-4">
        {videos.slice(0, 10).map((video) => {
          return (
            <div className="flex flex-col items-center" key={video.key}>
              <img
                src={video.pfp}
                alt="user logo"
                className="h-8 rounded-full hover:cursor-pointer"
              />
              <Dot className="text-[#3ea6ff] font-extrabold text-xs" />
            </div>
          );
        })}
      </div>
      <ArrowRight className="pointer-events-none h-6 text-sm text-center place-content-center rounded-sm text-white" />
    </div>
  );
};
