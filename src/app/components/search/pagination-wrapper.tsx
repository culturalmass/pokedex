"use client";
import { useEffect, useState } from "react";
import { PokemonCard } from "../home/pokemon-card";
import { Button } from "@/components/ui/button";
import { FaStepBackward } from "react-icons/fa";
import { FaForwardStep } from "react-icons/fa6";
import { getPokemonById } from "@/actions/getPokemon";
import { pokemonProps } from "@/types/pokemon";

interface PaginationWrapperProps {
  poke: pokemonProps[];
  limit: number;
  pokemonIds: number[];
  initialState: {
    pages: number;
    size: number;
    currentIndex: number;
    currentPage: number;
  };
}

export const PaginationWrapper = ({
  poke,
  limit,
  pokemonIds,
  initialState,
}: PaginationWrapperProps) => {
  const [pokemons, setPokemons] = useState<pokemonProps[]>(poke);
  const [pagination, setPagination] = useState(initialState);

  const fetchPokemon = async () => {
    if (pagination.currentPage > pagination.pages) {
      return;
    }
    let fetchedPokemons = [];
    let lengthOfLoop =
      pokemonIds.length < pagination.currentIndex + pagination.size
        ? pokemonIds.length
        : pagination.size + pagination.currentIndex;
    for (let i = pagination.currentIndex; i < lengthOfLoop; i++) {
      let pokemon = await getPokemonById(pokemonIds[i]);
      fetchedPokemons.push(pokemon);
    }

    setPokemons(fetchedPokemons);
  };

  const handleForward = () => {
    if (pagination.currentPage >= pagination.pages) {
      return;
    }
    setPagination({
      ...pagination,
      currentIndex: pagination.currentIndex + 10,
      currentPage: pagination.currentPage + 1,
    });
  };
  const handleBackward = () => {
    if (pagination.currentPage <= pagination.pages) {
      return;
    }
    setPagination({
      ...pagination,
      currentIndex: pagination.currentIndex - 10,
      currentPage: pagination.currentPage - 1,
    });
  };

  useEffect(() => {
    fetchPokemon();
  }, [pagination]);

  useEffect(() => {
    setPokemons(poke);
    setPagination(initialState);
  }, [poke]);

  return (
    <>
      <section className="flex justify-center items-center gap-x-12 w-screen h-[85vh]">
        <div>
          <Button
            variant="default"
            type="button"
            className="text-xl"
            disabled={pagination.currentPage <= pagination.pages}
            onClick={() => handleBackward()}
          >
            <FaStepBackward />
          </Button>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 inset-0">
          {pokemons?.map((pokemon, i) => (
            <PokemonCard key={i} pokemon={pokemon} limit={limit} />
          ))}
        </div>
        <div>
          <Button
            variant="default"
            type="button"
            className="text-xl"
            disabled={pagination.currentPage >= pagination.pages}
            onClick={() => handleForward()}
          >
            <FaForwardStep />
          </Button>
        </div>
      </section>
    </>
  );
};
