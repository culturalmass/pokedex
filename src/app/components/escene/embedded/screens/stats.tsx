import { getId } from "@/actions/getId";
import { getName } from "@/actions/getName";
import { pokemonProps } from "@/types/pokemon";

interface StatsProps {
  pokemon: pokemonProps;
}

export const Stats = ({ pokemon }: StatsProps) => {
  return (
    <>
      <div className="ml-[5px] mt-1 font-white text-[8px]">
        <div className="flex  gap-x-7">
          <span className="flex font-bold truncate">
            {getName(pokemon?.name)}&nbsp;&nbsp;
            {getId(pokemon?.id)}
          </span>
        </div>
        <div className="grid grid-cols-6 grid-rows-2 gap-x-[1px]">
          <span>Hp</span>
          <span>Atk</span>
          <span>Def</span>
          <span>S.Atk</span>
          <span>S.Def</span>
          <span>Spd</span>
          {pokemon?.stats?.map((stat, i) => (
            <span key={i} className="text-muted-foreground">
              {stat.base_stat}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
