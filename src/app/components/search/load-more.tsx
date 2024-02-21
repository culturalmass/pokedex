"use client";

import { useEffect, useState } from "react";
import { getPokemonById } from "@/actions/getPokemon";
import { useInView } from "react-intersection-observer";
import { PokemonCard } from "../home/pokemon-card";
import { pokemonProps } from "@/types/pokemon";
import { Spinner } from "@/components/ui/spinner";

interface LoadMoreProps {
  initialState: {
    pages: number;
    size: number;
    currentIndex: number;
    currentPage: number;
  };
  listPokemons: number[];
  limit: number;
}

export const LoadMore = ({
  initialState,
  listPokemons,
  limit,
}: LoadMoreProps) => {
  const { ref, inView } = useInView();
  const [pokemons, setPokemons] = useState<pokemonProps[]>([]);
  const [pagination, setPagination] = useState({
    ...initialState,
    currentIndex: 10,
  });

  const getNextPagination = async () => {
    if (pagination.currentPage > pagination.pages) {
      return;
    }
    let fetchedPokemons = [];
    let lengthOfLoop =
      listPokemons.length < pagination.currentIndex + pagination.size
        ? listPokemons.length
        : pagination.size + pagination.currentIndex;
    for (let i = pagination.currentIndex; i < lengthOfLoop; i++) {
      let pokemon = await getPokemonById(listPokemons[i]);
      fetchedPokemons.push(pokemon);
    }

    setPagination({
      ...pagination,
      currentIndex: pagination.currentIndex + 10,
      currentPage: pagination.currentPage + 1,
    });
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
          {pokemons?.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} limit={limit} />
          ))}
        </div>
      </section>
      <section className="flex justify-center items-center w-full mt-4">
        {pagination.currentPage < pagination.pages && (
          <div ref={ref}>
            <Spinner />
          </div>
        )}
      </section>
    </>
  );
};
