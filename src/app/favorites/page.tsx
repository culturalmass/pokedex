"use server";

import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import getCurrentUser from "@/actions/getCurrentUser";
import { getPokemonById, getPokemonListByURL } from "@/actions/getPokemon";
import { fullPokemonList, sortArray } from "@/lib/utils";
import { InfiniteScrollWrapper } from "../components/search/infinite-scroll-wrapper";
import { PaginationWrapper } from "../components/search/pagination-wrapper";

const Favorites = async () => {
  const user = await getCurrentUser();
  if (!user) {
    notFound();
  }
  const navigation = cookies().get("navigation");
  const favorites = cookies().get("favorites");
  if (!favorites) {
    return (
      <div className="text-2xl text-muted-foreground m-12">
        No Favorites Pokemons found!
      </div>
    );
  }
  let pokemonIds = JSON.parse(favorites?.value);
  let pokemons = [];

  let sortedArray = sortArray(pokemonIds);
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

  const list = await getPokemonListByURL(fullPokemonList);

  let listUrl = list?.results?.find(
    (urls: { url: string }) =>
      Number(urls?.url?.split("/")[urls?.url?.split("/").length - 2]) > 10000
  );
  let limit = list?.results?.indexOf(listUrl);

  return (
    <main>
      {!!user && navigation?.value === "1" ? (
        <PaginationWrapper
          poke={pokemons}
          limit={limit}
          pokemonIds={pokemonIds}
          initialState={initialState}
        />
      ) : (
        <InfiniteScrollWrapper
          pokemons={pokemons}
          limit={limit}
          pokemonIds={pokemonIds}
          initialState={{ ...initialState, currentIndex: 10 }}
        />
      )}
    </main>
  );
};

export default Favorites;
