import { CustomLink } from "../CustomLink";
import { History } from "./History";

export const Library = () => {
  return (
    <>
      <History />
      <div className="mt-1 border-b border-[#383838]"></div>
      <div className="py-2">
        <CustomLink className="flex p-4 text-white">
          <span className="mr-2 material-symbols-outlined">slideshow</span>
          <p>Mis vídeos</p>
        </CustomLink>
        <CustomLink className="flex p-4 text-white">
          <span class="mr-2 material-symbols-outlined">movie</span>
          <p>Mis películas</p>
        </CustomLink>
      </div>
      <div className="mt-1 border-b-2 border-[#383838]"></div>
      <h2 className="text-lg text-start m-4 font-roboto font-bold text-white">
        Listas de reproducción
      </h2>
    </>
  );
};
