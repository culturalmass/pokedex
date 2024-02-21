import { getName } from "@/actions/getName";
import { getId } from "@/actions/getId";
import { pokemonProps } from "@/types/pokemon";

interface InfoAProps {
  pokemon: pokemonProps;
}

export const InfoA = ({ pokemon }: InfoAProps) => {
  if (!pokemon) {
    return <div className="ml-[5px] mt-1 font-white text-[8px]"></div>;
  }
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
          <span className="font-semibold">Heigth:</span>
          <span className="text-muted-foreground">
            {(pokemon?.height * 0.1).toFixed(2)} m
          </span>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">Weigth:</span>
          <span className="text-muted-foreground">
            {(pokemon?.weight * 0.1).toFixed(2)} kg
          </span>
        </div>
      </div>
    </>
  );
};
