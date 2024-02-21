import { cn } from "@/lib/utils";
import { Screens } from "../embedeed-content";
import { evolutionProps, pokemonProps, speciesProps } from "@/types/pokemon";
import { EggGroup } from "../screens/egg-group";
import { EvolutionChain } from "../screens/evolution-chain";
import { InfoA } from "../screens/info-a";
import { InfoB } from "../screens/info-b";
import { PokedexDescription } from "../screens/pokedex-description";
import { Stats } from "../screens/stats";
import { CaptureInfo } from "../screens/capture-info";
import Location from "../screens/location";
import { TypeStrengths } from "../screens/type-strengths";
import { TypeWeakness } from "../screens/type-weakness";

interface RigthPanelScreenProps {
  pokemon: pokemonProps;
  species: speciesProps;
  evolution: evolutionProps;
  screen: string;
  ligth: boolean;
}

export const RigthPanelScreen = ({
  pokemon,
  species,
  evolution,
  screen,
  ligth,
}: RigthPanelScreenProps) => {
  return (
    <div
      className={cn(
        "flex select-none pointer-events-none rounded-[6px] ml-[60px] mt-4 h-[50px] w-[107px]",
        ligth && "bg-green-500/25"
      )}
    >
      {Screens.infoA === screen && <InfoA pokemon={pokemon} />}
      {Screens.infoB === screen && <InfoB pokemon={pokemon} />}
      {Screens.pokedex === screen && (
        <PokedexDescription pokemon={pokemon} species={species} />
      )}
      {Screens.location === screen && (
        <Location pokemon={pokemon} species={species} />
      )}
      {Screens.stats === screen && <Stats pokemon={pokemon} />}
      {Screens.captureInfo === screen && (
        <CaptureInfo pokemon={pokemon} species={species} />
      )}
      {Screens.evolution === screen && (
        <EvolutionChain pokemon={pokemon} evolution={evolution} />
      )}
      {Screens.eggs === screen && (
        <EggGroup pokemon={pokemon} species={species} />
      )}
      {Screens.typeStrengths === screen && <TypeStrengths pokemon={pokemon} />}
      {Screens.typeWeakness === screen && <TypeWeakness pokemon={pokemon} />}
    </div>
  );
};
