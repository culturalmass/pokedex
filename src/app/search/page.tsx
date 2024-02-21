"use server";

import { ReactElement } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
  getPokemonById,
  getPokemonByTerm,
  getPokemonListByURL,
} from "@/actions/getPokemon";
import getCurrentUser from "@/actions/getCurrentUser";
import { removeDuplicates, sortArray } from "@/lib/utils";
import { InfiniteScrollWrapper } from "../components/search/infinite-scroll-wrapper";
import { PaginationWrapper } from "../components/search/pagination-wrapper";

interface SearchPageProps {
  searchParams: {
    gen?: string;
    filGen: string;
    reg?: string;
    filReg: string;
    loc?: string;
    filLoc: string;
    limit: number;
  };
}

const SearchPage = async ({
  searchParams,
}: SearchPageProps): Promise<ReactElement> => {
  if (!searchParams) {
    redirect("/");
  }
  const user = await getCurrentUser();
  const navigation = cookies().get("navigation");
  let pokemonIds = [];
  let pokemons = [];

  if (searchParams?.gen === "true") {
    const generationList = await getPokemonByTerm(searchParams?.filGen);
    let rawIdPokemons: number[] = [];
    generationList?.pokemon_species?.forEach((urlList: { url: string }) => {
      let urls = urlList.url;
      rawIdPokemons.push(Number(urls?.split("/")[urls?.split("/").length - 2]));
    });
    let sortedArray = sortArray(rawIdPokemons);
    pokemonIds.push(...sortedArray);
  }

  if (searchParams.reg === "true") {
    const pokedexList = await getPokemonByTerm(searchParams.filReg);
    const pokedexes = pokedexList?.pokedexes?.map(
      (pokedex: { url: string }) => {
        let listUrl = {
          url: pokedex.url,
        };
        return listUrl;
      }
    );
    let pokemonsIdList = [];
    let rawIdPokemons: number[] = [];
    for (let i = 0; i < pokedexes.length; i++) {
      const pokemonsList = await getPokemonListByURL(pokedexes[i].url);
      pokemonsIdList.push(...pokemonsList?.pokemon_entries);
    }
    pokemonsIdList?.forEach((urlList) => {
      let urls = urlList.pokemon_species.url;
      rawIdPokemons.push(Number(urls?.split("/")[urls?.split("/").length - 2]));
    });
    let removeDupli = removeDuplicates(rawIdPokemons);
    let sortedArray = sortArray(removeDupli);
    pokemonIds.push(...sortedArray);
  }

  if (searchParams.loc === "true") {
    const locationList = await getPokemonByTerm(searchParams.filLoc);
    const locationAreas = locationList?.areas?.map(
      (locationArea: { url: string }) => {
        let listUrl = {
          url: locationArea.url,
        };
        return listUrl;
      }
    );
    let pokemonsIdList = [];
    let rawIdPokemons: number[] = [];
    for (let i = 0; i < locationAreas.length; i++) {
      const pokemonsList = await getPokemonListByURL(locationAreas[i].url);
      pokemonsIdList.push(...pokemonsList?.pokemon_encounters);
    }
    pokemonsIdList?.forEach((urlList) => {
      let urls = urlList.pokemon.url;
      rawIdPokemons.push(Number(urls?.split("/")[urls?.split("/").length - 2]));
    });
    let removeDupli = removeDuplicates(rawIdPokemons);
    let sortedArray = sortArray(removeDupli);
    pokemonIds.push(...sortedArray);
  }

  if (pokemonIds.length === 0) {
    return (
      <div className="text-2xl text-muted-foreground m-12">
        No Pokemons found!
      </div>
    );
  }

  let removeDupli = removeDuplicates(pokemonIds);
  let sortedArray = sortArray(removeDupli);
  pokemonIds = sortedArray;

  const initialState = {
    pages: Math.ceil(pokemonIds.length / 10),
    size: 10,
    currentIndex: 0,
    currentPage: 1,
  };

  let lengthOfLoop =
    pokemonIds.length < 10 ? pokemonIds.length : initialState.size;

  for (let i = initialState.currentIndex; i < lengthOfLoop; i++) {
    let pokemon = await getPokemonById(pokemonIds[i]);
    pokemons.push(pokemon);
  }

  return (
    <main>
      {!!user && navigation?.value === "1" ? (
        <PaginationWrapper
          poke={pokemons}
          limit={searchParams.limit}
          pokemonIds={pokemonIds}
          initialState={initialState}
        />
      ) : (
        <InfiniteScrollWrapper
          pokemons={pokemons}
          limit={searchParams.limit}
          pokemonIds={pokemonIds}
          initialState={{ ...initialState, currentIndex: 10 }}
        />
      )}
    </main>
  );
};

export default SearchPage;
