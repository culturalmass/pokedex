import Image from "next/image";
import { pokemonProps } from "@/types/pokemon";

interface LeftPanelDisplayProps {
  pokemon: pokemonProps;
}

export const LeftPanelDisplay = ({ pokemon }: LeftPanelDisplayProps) => {
  return (
    <>
      {pokemon && (
        <Image
          src={
            pokemon?.sprites?.other?.showdown?.front_default === null
              ? pokemon?.sprites?.other?.home?.front_default
              : pokemon?.sprites?.other?.showdown?.front_default
          }
          alt="sprites"
          fill
          sizes="1"
          className="object-contain"
        />
      )}
    </>
  );
};

export default LeftPanelDisplay;
