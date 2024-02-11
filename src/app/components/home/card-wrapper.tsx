import { getPokemonById } from "@/actions/getPokemon";
import { PokemonCard } from "./pokemon-card";

interface PokemonCardProps {
  id: Number;
}

export const CardWrapper = async ({ id }: PokemonCardProps) => {
  const pokemon = await getPokemonById(id);

  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  );
};
