import { ChannelFilter } from "./ChannelFilter";
import { VideoCard } from "../VideoCard";
import { videos } from "../../videos";

export const Subscriptions = () => {
  return (
    <>
      <ChannelFilter />
      <div className="flex flex-wrap justify-center min-[588px]:mt-[16px]">
        {videos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              img={video.img}
              pfp={video.pfp}
              duration={video.duration}
              title={video.title}
              channel={video.channel}
              views={video.views}
              date={video.date}
            />
          );
        })}
      </div>
    </>
  );
};
