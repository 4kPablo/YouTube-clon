import { channels } from "../../data/channels";
import { GoDotFill as Dot } from "react-icons/go";
import { SlArrowRight as ArrowRight } from "react-icons/sl";
import { CustomLink } from "../CustomLink";

export const ChannelFilter = () => {
  return (
    <div className="flex items-center justify-between w-full h-[52px] px-3">
      <div className="flex gap-4">
        {channels.slice(0, 9).map((channel) => {
          return (
            <div className="flex flex-col items-center">
              <img
                src={channel.pfp}
                alt="user logo"
                className="h-8 rounded-full hover:cursor-pointer"
              />
              {channel.hasNewVideo ? (
                <Dot className="text-[#3ea6ff] font-extrabold text-xs" />
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
      <CustomLink
        to="/all_subscriptions"
        className="flex flex-col items-center"
      >
        <ArrowRight className="pointer-events-none h-6 text-sm text-center place-content-center rounded-sm text-white" />
      </CustomLink>
    </div>
  );
};
