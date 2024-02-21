"use client";

import { useEffect, useState } from "react";
import { Session } from "next-auth";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { getPokemonByName, getPokemonListByURL } from "@/actions/getPokemon";
import { RigthPanelScreen } from "./components/right-panel-screen";
import LeftPanelDisplay from "./components/left-panel-display";
import { LeftPanelButtons } from "./components/left-panel-buttons";
import { RigthPanelMenu } from "./components/rigth-panel-menu";
import { RightPanelButtons } from "./components/rigth-panel-buttons";
import { toast } from "sonner";
import { evolutionProps, pokemonProps, speciesProps } from "@/types/pokemon";

export enum Screens {
  infoA = "infoA",
  infoB = "infoB",
  pokedex = "pokedex",
  location = "location",
  stats = "stats",
  captureInfo = "captureInfo",
  evolution = "evolution",
  eggs = "eggs",
  typeStrengths = "typeStrengths",
  typeWeakness = "typeWeakness",
}

interface EmbedeedContentProps {
  user: Session | null;
  id: string;
  router: {
    push: (value: string) => void;
  };
  handleChangeId: (value: number) => void;
  currentLimit: string;
  favorites: RequestCookie | undefined;
}

const EmbedeedContent = ({
  user,
  id,
  router,
  handleChangeId,
  currentLimit,
  favorites,
}: EmbedeedContentProps) => {
  const [pokemon, setPokemon] = useState<pokemonProps>({
    name: "",
    id: 0,
    height: 0,
    weight: 0,
    abilities: [
      {
        ability: {
          name: "",
        },
      },
    ],
    types: [
      {
        type: {
          name: "",
        },
      },
    ],
    stats: [
      {
        base_stat: 0,
      },
    ],
    sprites: {
      other: {
        showdown: {
          front_default: "",
        },
        home: {
          front_default: "",
        },
        "official-artwork": {
          front_default: "",
        },
      },
    },
    cries: {
      latest: "",
    },
  });
  const [species, setSpecies] = useState<speciesProps>({
    capture_rate: 0,
    base_happiness: 0,
    egg_groups: [
      {
        name: "",
      },
    ],
    hatch_counter: 0,
    habitat: {
      name: "",
    },
    growth_rate: {
      name: "",
    },
    flavor_text_entries: [
      {
        flavor_text: "",
      },
      {
        flavor_text: "",
      },
    ],
    generation: {
      name: "",
    },
  });
  const [evolution, SetEvolution] = useState<evolutionProps>({
    chain: {
      species: {
        name: "",
      },
      evolves_to: [
        {
          evolves_to: [
            {
              species: {
                name: "",
              },
            },
          ],
          species: {
            name: "",
          },
        },
      ],
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [screen, setScreen] = useState<string>(Screens.infoA);
  const [ligth, setLigth] = useState(false);

  const handleChangeScreen = (newScreen: string) => {
    setScreen(newScreen);
  };

  const handleBack = () => {
    router.push("/");
  };
  useEffect(() => {
    setIsLoading(true);
    getPokemonByName(id as string)
      .then((pokemon) => {
        setPokemon(pokemon);
        getPokemonListByURL(pokemon?.species?.url)
          .then((species) => {
            setSpecies(species);
            getPokemonListByURL(species?.evolution_chain?.url).then(
              (evolution) => {
                SetEvolution(evolution);
              }
            );
          })
          .finally(() => setIsLoading(false));
      })
      .catch(() => {
        toast.error(`Not Pokemon Found by ${id}!`);
        router.push("/");
      });
  }, [id, router]);

  return (
    <div className="flex w-[350px] h-[200px] mt-[8px] 2xl:mt-[8px]">
      <div className="flex flex-col h-[190px]">
        <div className="relative flex items-center justify-center select-none pointer-events-none ml-[32px] mt-[24px] h-[60px] w-[105px]">
          {isLoading ? (
            <span className=" text-[10px] text-muted-foreground">
              Loading Pokemon image...
            </span>
          ) : (
            <LeftPanelDisplay pokemon={pokemon} />
          )}
        </div>
        <div className="flex mt-[22px] ml-[7px] h-[80px] w-[140px]">
          <LeftPanelButtons
            pokemon={pokemon}
            id={id}
            handleChangeId={handleChangeId}
            currentLimit={currentLimit}
          />
        </div>
      </div>
      <div className="flex flex-col">
        {isLoading ? (
          <div
            className={
              "flex justify-center items-center select-none pointer-events-none rounded-[6px] ml-[50px] mt-4 h-[50px] w-[107px]"
            }
          >
            <span className=" text-[8px] text-muted-foreground">
              Loading Pokemon data...
            </span>
          </div>
        ) : (
          <RigthPanelScreen
            pokemon={pokemon}
            species={species}
            evolution={evolution}
            screen={screen}
            ligth={ligth}
          />
        )}
        <div className="flex ml-[50px] mt-[5px]  h-[32px] w-[125px]">
          <RigthPanelMenu
            screen={screen}
            handleChangeScreen={handleChangeScreen}
          />
        </div>
        <div className="flex flex-col h-[75px] ml-[46px] w-[140px] mt-[1.3px]">
          <RightPanelButtons
            user={user}
            id={id}
            species={species}
            screen={screen}
            handleChangeScreen={handleChangeScreen}
            setLigth={setLigth}
            handleBack={handleBack}
            favorites={favorites}
          />
        </div>
      </div>
    </div>
  );
};

export default EmbedeedContent;
