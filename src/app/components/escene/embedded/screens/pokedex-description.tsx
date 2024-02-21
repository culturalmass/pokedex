import { getId } from "@/actions/getId";
import { getName } from "@/actions/getName";
import { pokemonProps, speciesProps } from "@/types/pokemon";

interface PokedexDescriptionProps {
  pokemon: pokemonProps;
  species: speciesProps;
}

export const PokedexDescription = ({
  pokemon,
  species,
}: PokedexDescriptionProps) => {
  return (
    <>
      <div className="ml-[5px] mt-1 font-white text-[8px]">
        <div className="flex  gap-x-7">
          <span className="flex font-bold truncate">
            {getName(pokemon?.name)}&nbsp;&nbsp;
            {getId(pokemon?.id)}
          </span>
        </div>
        <p className="flex gap-x-1 text-muted-foreground text-[6px] w-[95px] leading-[6px]">
          {species?.flavor_text_entries[1]?.flavor_text?.replace("", " ")}
        </p>
      </div>
    </>
  );
};
