import { getId } from "@/actions/getId";
import { getName } from "@/actions/getName";
import { pokemonProps, speciesProps } from "@/types/pokemon";

interface CaptureInfoProps {
  pokemon: pokemonProps;
  species: speciesProps;
}

export const CaptureInfo = ({ pokemon, species }: CaptureInfoProps) => {
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
          <span className="font-semibold">Capture Rate:</span>
          <span className="text-muted-foreground">
            {((species?.capture_rate / 252) * 100).toFixed(2)} %
          </span>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">Base Happiness:</span>
          <span className="text-muted-foreground">
            {((species?.base_happiness / 255) * 100).toFixed(2)} %
          </span>
        </div>
      </div>
    </>
  );
};
