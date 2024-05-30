import { TopNavbar } from "./components/TopNavbar";
import { BottomNavbar } from "./components/BottomNavbar";
import { FilterBar } from "./components/FilterBar";
import { VideoCard } from "./components/VideoCard";
import { videos } from "./videos.js";

function App() {
  return (
    <>
      <TopNavbar />
      <FilterBar />
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
      <Spacer />
      <BottomNavbar />
    </>
  );
}

const Spacer = () => {
  return <div className="h-12"></div>;
};

export default App;
