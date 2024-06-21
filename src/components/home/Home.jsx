import { FilterBar } from "./FilterBar.jsx";
import { VideoCard } from "../VideoCard.jsx";
import { videos } from "../../data/videos.js";
import { randomize } from "../../randomize.js";
import { MoreTopics } from "./MoreTopics.jsx";
import { News } from "./News.jsx";

export const Home = () => {
  randomize(videos);
  return (
    <>
      <FilterBar />
      <div className="flex flex-wrap justify-center min-[588px]:mt-[16px]">
        {videos.slice(0, 9).map((video) => {
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
        <News />
        {videos.slice(9, 15).map((video) => {
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
        <MoreTopics />
        {videos.slice(15).map((video) => {
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
