"use client";

import { useEffect, useState } from "react";
import { getPokemonByName, getPokemonListByPage } from "@/actions/getPokemon";
import { useInView } from "react-intersection-observer";
import { PokemonCard } from "./pokemon-card";
import { pokemonListByPageProps, pokemonProps } from "@/types/pokemon";
import { Spinner } from "@/components/ui/spinner";

export const LoadMore = ({
  currentPage,
  limit,
}: {
  currentPage: number;
  limit: number;
}) => {
  const { ref, inView } = useInView();
  const [pokemons, setPokemons] = useState<pokemonProps[]>([]);
  const [page, setPage] = useState(currentPage + 1);
  const [reachMaxCurrentPokemons, setReachMaxCurrentPokemons] = useState(false);

  const getNextPagination = async () => {
    const pokemonList = await getPokemonListByPage(page);
    setReachMaxCurrentPokemons(
      !!pokemonList.results.find(
        (id: { url: string }) =>
          Number(id?.url?.split("/")[id?.url?.split("/").length - 2]) >= 10000
      )
    );
    const pokemonDetails = pokemonList?.results?.map(
      (pokemon: pokemonListByPageProps) => {
        let details = {
          name: pokemon.name,
        };
        return details;
      }
    );
    let fetchedPokemons = [];
    for (let i = 0; i < pokemonDetails.length; i++) {
      let pokemon = await getPokemonByName(pokemonDetails[i].name);
      fetchedPokemons.push(pokemon);
    }
    setPage(page + 1);
    setPokemons([...pokemons, ...fetchedPokemons]);
  };

  useEffect(() => {
    if (inView) {
      getNextPagination();
    }
  }, [inView]);

  return (
    <>
      <section className="flex justify-center items-center gap-3 w-screen">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 inset-0">
          {pokemons?.map(
            (pokemon, i) =>
              pokemon.id <= 10000 && (
                <PokemonCard key={i} pokemon={pokemon} limit={limit} />
              )
          )}
        </div>
      </section>
      <section className="flex justify-center items-center w-full mt-4">
        {!reachMaxCurrentPokemons && (
          <div ref={ref}>
            <Spinner />
          </div>
        )}
      </section>
    </>
  );
};
