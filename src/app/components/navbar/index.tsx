"use server";

import { getPokemonListByURL } from "@/actions/getPokemon";
import { Logo } from "./logo";
import { Search } from "./search";
import { Actions } from "./actions";
import { Filter } from "./filter";

import { fullPokemonList, generation, location, region } from "@/lib/utils";

export const Navbar = async () => {
  const generationList = await getPokemonListByURL(generation);
  const regionList = await getPokemonListByURL(region);
  const locationList = await getPokemonListByURL(location);
  const list = await getPokemonListByURL(fullPokemonList);

  const listUrl = list?.results?.find(
    (urls: { url: string }) =>
      Number(urls?.url?.split("/")[urls?.url?.split("/").length - 2]) > 10000
  );
  const limit = list?.results?.indexOf(listUrl);
  const searchList = list?.results;
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] bg-black px-2 lg:px-4 flex justify-between items-center shadow-sm">
      <Logo />
      <div className="flex gap-x-4">
        <Filter
          generationList={generationList.results}
          regionList={regionList.results}
          locationList={locationList.results}
          limit={limit}
        />
        <Search searchList={searchList} limit={limit} />
      </div>
      <Actions />
    </nav>
  );
};
