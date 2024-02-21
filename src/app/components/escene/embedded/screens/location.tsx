import { getId } from "@/actions/getId";
import { getName } from "@/actions/getName";
import { pokemonProps, speciesProps } from "@/types/pokemon";

interface LocationProps {
  pokemon: pokemonProps;
  species: speciesProps;
}

export const Location = ({ pokemon, species }: LocationProps) => {
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
          <span className="font-semibold">Habitat:</span>
          <span className="text-muted-foreground">
            {species?.habitat === null
              ? "Uknowm"
              : getName(species?.habitat?.name)}
          </span>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">Growth Rate:</span>
          <span className="text-muted-foreground">
            {getName(species?.growth_rate?.name)}
          </span>
        </div>
      </div>
    </>
  );
};

export default Location;
