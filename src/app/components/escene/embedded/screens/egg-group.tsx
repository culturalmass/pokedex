import { getId } from "@/actions/getId";
import { getName } from "@/actions/getName";
import { pokemonProps, speciesProps } from "@/types/pokemon";

interface EggGroupProps {
  pokemon: pokemonProps;
  species: speciesProps;
}

export const EggGroup = ({ pokemon, species }: EggGroupProps) => {
  return (
    <>
      <div className="ml-[5px] mt-1 font-white text-[8px]">
        <div className="flex  gap-x-7">
          <span className="flex font-bold truncate">
            {getName(pokemon?.name)}&nbsp;&nbsp;
            {getId(pokemon?.id)}
          </span>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">Egg groups:</span>
          <div className="flex gap-x-1">
            {species?.egg_groups?.map((type, i) => (
              <span key={i} className="text-muted-foreground">
                {getName(type.name)}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">Hatch Counter:</span>
          <span className="text-muted-foreground">
            {species?.hatch_counter * 255} steps
          </span>
        </div>
      </div>
    </>
  );
};
