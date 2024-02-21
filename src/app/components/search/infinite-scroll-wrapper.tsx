import { pokemonProps } from "@/types/pokemon";
import { PokemonCard } from "../home/pokemon-card";
import { LoadMore } from "./load-more";

interface InfiniteScrollWrapperProps {
  pokemons: pokemonProps[];
  limit: number;
  pokemonIds: number[];
  initialState: {
    pages: number;
    size: number;
    currentIndex: number;
    currentPage: number;
  };
}

export const InfiniteScrollWrapper = ({
  pokemons,
  limit,
  pokemonIds,
  initialState,
}: InfiniteScrollWrapperProps) => {
  return (
    <>
      <section className="flex justify-center items-center gap-3 w-screen h-[85vh]">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 inset-0">
          {pokemons?.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} limit={Number(limit)} />
          ))}
        </div>
      </section>
      {pokemonIds?.length > 10 && (
        <LoadMore
          initialState={initialState}
          listPokemons={pokemonIds}
          limit={Number(limit)}
        />
      )}
    </>
  );
};
