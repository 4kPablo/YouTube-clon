import { FilterBar } from "./FilterBar.jsx";
import { VideoCard } from "../VideoCard.jsx";
import { videos } from "../../data/videos.js";
import { randomize } from "../../randomize.js";

export const Home = () => {
  randomize(videos);
  return (
    <>
      <FilterBar />
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
