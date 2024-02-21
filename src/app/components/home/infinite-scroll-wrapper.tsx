"use server";

import {
  getPokemonByName,
  getPokemonListByPage,
  getPokemonListByURL,
} from "@/actions/getPokemon";
import { fullPokemonList } from "@/lib/utils";
import { PokemonCard } from "./pokemon-card";
import { LoadMore } from "./load-more";
import { pokemonListByPageProps } from "@/types/pokemon";

interface InfiniteScrollWrapperProps {
  state: { page: number };
}

export const InfiniteScrollWrapper = async ({
  state,
}: InfiniteScrollWrapperProps) => {
  const pokemonList = await getPokemonListByPage(state.page);
  const pokemonDetails = pokemonList?.results?.map(
    (pokemon: pokemonListByPageProps) => {
      let details = {
        name: pokemon.name,
      };
      return details;
    }
  );
  let pokemons = [];
  for (let i = 0; i < pokemonDetails.length; i++) {
    let pokemon = await getPokemonByName(pokemonDetails[i].name);
    pokemons.push(pokemon);
  }

  const list = await getPokemonListByURL(fullPokemonList);

  let listUrl = list?.results?.find(
    (urls: { url: string }) =>
      Number(urls?.url?.split("/")[urls?.url?.split("/").length - 2]) > 10000
  );
  let limit = list?.results?.indexOf(listUrl);

  return (
    <>
      <section className="flex justify-center items-center gap-3 h-[85vh] w-screen">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 inset-0">
          {pokemons?.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} limit={limit} />
          ))}
        </div>
      </section>

      <LoadMore currentPage={state.page} limit={limit} />
    </>
  );
};
