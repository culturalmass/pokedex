"use client";

import { Session } from "next-auth";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { setFavorites } from "@/actions/getCookies";
import { Screens } from "../embedeed-content";
import { speciesProps } from "@/types/pokemon";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { cn } from "@/lib/utils";
import { MdFavorite } from "react-icons/md";
import { PiSignOut } from "react-icons/pi";
import {
  FaArrowDown,
  FaArrowUp,
  FaLightbulb,
  FaRegLightbulb,
} from "react-icons/fa6";

interface RightPanelButtonsProps {
  user: Session | null;
  id: string;
  species: speciesProps;
  screen: string;
  handleChangeScreen: (value: string) => void;
  setLigth: (value: boolean) => void;
  handleBack: () => void;
  favorites: RequestCookie | undefined;
}

export const RightPanelButtons = ({
  user,
  id,
  species,
  screen,
  handleChangeScreen,
  setLigth,
  handleBack,
  favorites,
}: RightPanelButtonsProps) => {
  let screensArray = Object.keys(Screens);
  let favArray = !!favorites && JSON.parse(favorites.value);

  return (
    <>
      <div className="flex">
        <div className="-mt-[4px] ml-[26px]">
          <button
            type="button"
            className=" hover:text-black/55"
            onClick={() => setLigth(false)}
          >
            <FaRegLightbulb className="w-[3px]" />
          </button>
        </div>
        <div className="-mt-[4px] ml-[7px]">
          <button
            type="button"
            className=" hover:text-black/55"
            onClick={() => setLigth(true)}
          >
            <FaLightbulb className="w-[3px]" />
          </button>
        </div>
        <div className="-mt-[4px] ml-[25px]">
          <button
            type="button"
            className={cn(
              "hover:text-black/55",
              screensArray.indexOf(screen) - 1 < 0 && "text-black/55"
            )}
            disabled={screensArray.indexOf(screen) - 1 < 0}
            onClick={() =>
              handleChangeScreen(screensArray[screensArray.indexOf(screen) - 1])
            }
          >
            <CgChevronLeft className="w-[8px]" />
          </button>
        </div>
        <div className="-mt-[4px] ml-[27px]">
          <button
            type="button"
            className={cn(
              "hover:text-black/55",
              screensArray.indexOf(screen) + 1 > screensArray.length - 1 &&
                "text-black/55"
            )}
            disabled={
              screensArray.indexOf(screen) + 1 > screensArray.length - 1
            }
            onClick={() =>
              handleChangeScreen(screensArray[screensArray.indexOf(screen) + 1])
            }
          >
            <CgChevronRight className="w-[8px]" />
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="-mt-[9px] ml-[29px] ">
          <button
            type="button"
            className={cn(
              "hover:text-gray-500/55",
              screensArray.indexOf(screen) + 1 > screensArray.length - 1 &&
                "text-gray-500/55"
            )}
            disabled={
              screensArray.indexOf(screen) + 1 > screensArray.length - 1
            }
            onClick={() =>
              handleChangeScreen(screensArray[screensArray.indexOf(screen) + 1])
            }
          >
            <FaArrowUp className="w-[9px]" />
          </button>
        </div>
        <div className="-mt-[9px] ml-[5px] ">
          <button
            type="button"
            className={cn(
              "hover:text-gray-500/55",
              screensArray.indexOf(screen) - 1 < 0 && "text-gray-500/55"
            )}
            disabled={screensArray.indexOf(screen) - 1 < 0}
            onClick={() =>
              handleChangeScreen(screensArray[screensArray.indexOf(screen) - 1])
            }
          >
            <FaArrowDown className="w-[9px]" />
          </button>
        </div>
        <div className="-mt-[10px] ml-[53px]">
          <button
            type="button"
            className={cn(
              "hover:text-red-800/85",
              !user && "text-gray-600/85",
              !!user &&
                favArray.length > 0 &&
                favArray.find((idFav: string) => idFav === id) &&
                "text-red-800/85"
            )}
            disabled={!user}
            onClick={() => setFavorites(id)}
          >
            <MdFavorite className="w-[10px]" />
          </button>
        </div>
      </div>
      <div className="flex">
        <div
          className="mt-[3px] ml-[17px] text-[12px]"
          onClick={() => handleBack()}
        >
          <button
            type="button"
            className="flex items-center gap-1 hover:text-gray-500/55"
          >
            <span className="select-none">Back</span>
            <PiSignOut className="w-[10px]" />
          </button>
        </div>
        <div className="mt-[3px] ml-[27px] text-[12px] text-muted-foreground select-none pointer-events-none">
          Gen:&nbsp;
          {species && species?.generation?.name?.split("-")[1]?.toUpperCase()}
        </div>
      </div>
    </>
  );
};
