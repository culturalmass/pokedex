"use server";

import { Forward } from "./forward";
import { Backward } from "./backward";
import { PokemonCard } from "./pokemon-card";
import {
  getPokemonByName,
  getPokemonListByPage,
  getPokemonListByURL,
} from "@/actions/getPokemon";
import { fullPokemonList } from "@/lib/utils";
import { pokemonProps } from "@/types/pokemon";

interface PaginationWrapperProps {
  state: { page: number };
}

export const PaginationWrapper = async ({ state }: PaginationWrapperProps) => {
  const pokemonList = await getPokemonListByPage(state.page);

  const pokemonDetails = pokemonList?.results?.map((pokemon: pokemonProps) => {
    let details = {
      name: pokemon.name,
    };
    return details;
  });
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
    <section className="flex justify-center items-center gap-x-12 w-screen h-[85vh]">
      <div>
        <Backward page={state?.page} />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 inset-0">
        {pokemons?.map((pokemon, i) => (
          <PokemonCard key={i} pokemon={pokemon} limit={limit} />
        ))}
      </div>
      <div>
        <Forward page={state?.page} />
      </div>
    </section>
  );
};
