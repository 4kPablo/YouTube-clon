import { randomize } from "../../randomize";
import { filters } from "../../data/filters";

export const FilterBar = () => {
  randomize(filters);
  return (
    <div className="flex items-center justify-between h-[50px] *:mx-3 *:cursor-pointer border-y overflow-x-auto no-scrollbar border-[#3f3f3f]">
      <span className="pointer-events-none shrink-0 px-2 h-8 text-center place-content-center rounded-sm bg-[#FFFFFF1A] text-white material-symbols-outlined">
        explore
      </span>
      <div className="flex *:font-[Roboto] text-sm font-medium text-nowrap *:rounded-lg *:h-8 *:px-3 gap-3">
        <p className="bg-white place-content-center">Todo</p>
        {filters.map((filter) => {
          return (
            <p className="bg-[#FFFFFF1A] text-white place-content-center">
              {filter}
            </p>
          );
        })}
        <p className="bg-[#FFFFFF1A] text-white place-content-center">
          Novedad para ti
        </p>
      </div>
    </div>
  );
};
