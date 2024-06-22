import { playlists } from "../../data/playlists";
import { CustomLink } from "../CustomLink";
import { History } from "./History";
import { Playlists } from "./Playlist";

export const Library = () => {
  return (
    <>
      <History />
      <div className="mt-1 border-b border-[#383838]"></div>

      <section className="py-2">
        <CustomLink className="flex p-4 text-white">
          <span className="mr-2 material-symbols-outlined">slideshow</span>
          <p>Mis vídeos</p>
        </CustomLink>

        <CustomLink className="flex p-4 text-white">
          <span class="mr-2 material-symbols-outlined">movie</span>
          <p>Mis películas</p>
        </CustomLink>
      </section>

      <div className="mt-1 border-b-2 border-[#383838]"></div>
      <h2 className="text-lg text-start pl-4 pt-3 font-roboto font-extrabold text-white">
        Listas de reproducción
      </h2>

      <section className="flex flex-col mt-3">
        {playlists.map((playlist) => {
          return (
            <Playlists
              key={playlist.id}
              img={playlist.img}
              videoCount={playlist.videoCount}
              title={playlist.title}
              privacy={playlist.privacy}
              showOptions={playlist.showOptions}
            />
          );
        })}
      </section>
    </>
  );
};
