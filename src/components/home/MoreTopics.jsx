import { randomize } from "../../randomize";
import { filters } from "../../data/filters";

export const MoreTopics = () => {
  randomize(filters);
  return (
    <div className="flex flex-col font-roboto h-[148px] w-full *:mx-3 *:cursor-pointer">
      <div className="flex justify-between">
        <p className="text-lg text-start my-3 font-roboto font-medium text-white">
          Descubre más temas
        </p>
        <div className="flex -mt-1 -mr-3 hover:cursor-pointer hover:bg-[#3F3F3F] h-[48px] w-[48px] rounded-full items-center place-content-center text-center">
          <span className="material-symbols-outlined text-white">
            more_vert
          </span>
        </div>
      </div>
      <div className="flex flex-wrap *:font-[Roboto] text-sm font-medium text-nowrap *:rounded-lg *:h-8 *:px-3 gap-2">
        {filters.slice(0, 6).map((filter) => {
          return (
            <p className="bg-[#FFFFFF1A] text-white place-content-center">
              {filter}
            </p>
          );
        })}
      </div>
    </div>
  );
};

// 423 x 148
