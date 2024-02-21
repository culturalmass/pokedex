import { Key } from "react";
import { getName } from "@/actions/getName";
import { getId } from "@/actions/getId";
import { pokemonProps } from "@/types/pokemon";

interface InfoBProps {
  pokemon: pokemonProps;
}

export const InfoB = ({ pokemon }: InfoBProps) => {
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
          <span className="font-semibold">Abilities:</span>
          <span className="text-muted-foreground">
            {getName(pokemon?.abilities[0]?.ability?.name)}
          </span>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">Type:</span>
          <span className="flex gap-x-2">
            {pokemon?.types?.map((slot, index: Number) => (
              <p key={index as Key} className="flex text-muted-foreground">
                {getName(slot.type.name)}
              </p>
            ))}
          </span>
        </div>
      </div>
    </>
  );
};
