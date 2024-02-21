import { cn } from "@/lib/utils";
import { getId } from "@/actions/getId";
import { getName } from "@/actions/getName";
import { evolutionProps, pokemonProps } from "@/types/pokemon";
import { FaArrowRight } from "react-icons/fa";

interface EvolutionChainProps {
  pokemon: pokemonProps;
  evolution: evolutionProps;
}

export const EvolutionChain = ({ pokemon, evolution }: EvolutionChainProps) => {
  return (
    <>
      <div className="ml-[5px] mt-1 font-white text-[8px]">
        <div className="flex  gap-x-7">
          <span className="flex font-bold truncate">
            {getName(pokemon?.name)}&nbsp;&nbsp;
            {getId(pokemon?.id)}
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex">
            {evolution?.chain?.evolves_to?.length < 1 ? (
              <span className="mt-1">Don&apos;t have evolutions</span>
            ) : (
              <span>
                {evolution?.chain?.species?.name &&
                  getName(evolution?.chain?.species?.name)}
              </span>
            )}
          </div>
          {evolution?.chain?.evolves_to?.length >= 1 && (
            <div
              className={cn(
                "flex ml-[18px] gap-x-2",
                evolution?.chain?.evolves_to?.length >= 2 &&
                  "-mt-[3px] ml-[4px]",
                evolution?.chain?.evolves_to[0]?.evolves_to?.length >= 1 &&
                  "flex gap-x-[1px] -mt-[4px] ml-[15px]"
              )}
            >
              <span className="mt-[3px] text-muted-foreground">
                <FaArrowRight className="h-[7px]" />
              </span>
              {evolution?.chain?.evolves_to?.length === 1 ? (
                <span>
                  {getName(evolution?.chain?.evolves_to[0]?.species?.name)}
                </span>
              ) : (
                <div
                  className={cn(
                    "grid grid-cols-3 gap-x-[2px] -mt-[10px] text-[7px]",
                    evolution?.chain?.evolves_to?.length === 3 &&
                      "grid-cols-2 ml-[6px]"
                  )}
                >
                  {evolution?.chain?.evolves_to?.map((poke, i) => (
                    <span key={i}>{getName(poke?.species?.name)}</span>
                  ))}
                </div>
              )}
            </div>
          )}
          {evolution?.chain?.evolves_to[0]?.evolves_to?.length >= 1 && (
            <div className="flex -mt-[3px] ml-[50px]">
              <span className="mt-[3px] text-muted-foreground">
                <FaArrowRight className="h-[7px]" />
              </span>
              {evolution?.chain?.evolves_to[0]?.evolves_to?.length === 1 ? (
                <span>
                  {getName(
                    evolution?.chain?.evolves_to[0]?.evolves_to[0]?.species
                      ?.name
                  )}
                </span>
              ) : (
                <div className="flex flex-col -mt-[10px]">
                  {evolution?.chain?.evolves_to[0]?.evolves_to?.map(
                    (poke, i) => (
                      <span key={i}>{getName(poke?.species?.name)}</span>
                    )
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
