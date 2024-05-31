import { TopNavbar } from "./components/TopNavbar";
import { BottomNavbar } from "./components/BottomNavbar";
import { FilterBar } from "./components/FilterBar";
import { VideoCard } from "./components/VideoCard";
import { videos } from "./videos.js";

function App() {
  return (
    <div className="flex flex-col">
      <TopNavbar />
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
      <Spacer />
      <BottomNavbar />
    </div>
  );
}

const Spacer = () => {
  return <div className="h-12"></div>;
};

export default App;
