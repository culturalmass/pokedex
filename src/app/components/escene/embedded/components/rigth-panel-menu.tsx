import { cn } from "@/lib/utils";
import { Screens } from "../embedeed-content";
import { FaEgg, FaInfo, FaMap } from "react-icons/fa6";
import { IoIosBook, IoIosStats } from "react-icons/io";
import { LuBringToFront } from "react-icons/lu";
import { MdOutlineCatchingPokemon, MdOutlineCrisisAlert } from "react-icons/md";
import { BsExposure } from "react-icons/bs";
import { TbMessageSearch } from "react-icons/tb";

interface RigthPanelMenuProps {
  screen: string;
  handleChangeScreen: (value: string) => void;
}

export const RigthPanelMenu = ({
  screen,
  handleChangeScreen,
}: RigthPanelMenuProps) => {
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-x-4 ml-2 mb-[7px]">
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.infoA && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.infoA)}
      >
        <FaInfo className="w-[3px] ml-[5px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.infoB && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.infoB)}
      >
        <IoIosBook className="w-[10px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.pokedex && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.pokedex)}
      >
        <TbMessageSearch className="w-[10px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.location && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.location)}
      >
        <FaMap className="w-[10px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.stats && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.stats)}
      >
        <IoIosStats className="w-[10px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.captureInfo && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.captureInfo)}
      >
        <MdOutlineCatchingPokemon className="w-[10px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.evolution && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.evolution)}
      >
        <LuBringToFront className="w-[9px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.eggs && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.eggs)}
      >
        <FaEgg className="w-[6px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.typeStrengths && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.typeStrengths)}
      >
        <BsExposure className="w-[10px]" />
      </button>
      <button
        type="button"
        className={cn(
          "hover:text-black/55",
          screen === Screens.typeWeakness && "text-black/55"
        )}
        onClick={() => handleChangeScreen(Screens.typeWeakness)}
      >
        <MdOutlineCrisisAlert className="w-[10px]" />
      </button>
    </div>
  );
};
