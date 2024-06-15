import { channels } from "../../data/channels";
import { GoDotFill as Dot } from "react-icons/go";

export const AllSubscriptions = () => {
  return (
    <div className="w-full font-roboto px-3 text-xl text-white">
      {channels.map((channel) => {
        return (
          <div className="flex items-center">
            <div className="flex w-full items-center justify-between">
              <img
                src={channel.pfp}
                alt="user logo"
                className="h-12 mr-3 rounded-full hover:cursor-pointer"
              />
              <p className="text-base w-full">{channel.name}</p>
              {channel.hasNewVideo ? (
                <Dot className="text-[#AAAAAA] font-extrabold text-xs" />
              ) : (
                <></>
              )}
              {channel.isLive ? (
                <p className="text-[#AAAAAA] whitespace-nowrap text-xs">
                  EN DIRECTO
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
