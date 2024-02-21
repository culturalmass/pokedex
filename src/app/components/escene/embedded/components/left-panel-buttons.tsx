import { cn } from "@/lib/utils";
import { AiOutlineSound } from "react-icons/ai";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { pokemonProps } from "@/types/pokemon";
import {
  CgChevronDown,
  CgChevronLeft,
  CgChevronRight,
  CgChevronUp,
} from "react-icons/cg";

enum Options {
  chevronLeft = -1,
  chevronRight = 1,
  ArrowLeft = -10,
  ArrowRight = 10,
  ArrowUp = 100,
  ArrowDown = -100,
}

interface LeftPanelButtonsProps {
  pokemon: pokemonProps;
  id: string;
  handleChangeId: (value: number) => void;
  currentLimit: string;
}

export const LeftPanelButtons = ({
  pokemon,
  id,
  handleChangeId,
  currentLimit,
}: LeftPanelButtonsProps) => {
  return (
    <>
      <audio src={pokemon?.cries?.latest} controls className="hidden" />
      <div className="mt-[31px] ml-[26px] ">
        <button
          type="button"
          className=" hover:text-black/55 "
          onClick={() => {
            document.querySelector("audio")?.play();
          }}
        >
          <AiOutlineSound className="w-[10px]" />
        </button>
      </div>
      <div className="ml-[21px] mt-[15px]">
        <button
          type="button"
          className={cn(
            "hover:text-black/55",
            Number(id) + Options.chevronLeft <= 0 && "text-black/55"
          )}
          disabled={Number(id) + Options.chevronLeft <= 0}
          onClick={() => handleChangeId(Options.chevronLeft)}
        >
          <FiChevronsLeft className="w-[10px]" />
        </button>
      </div>
      <div className="ml-[26px] mt-[15px]">
        <button
          type="button"
          className={cn(
            "hover:text-black/55",
            Number(id) + Options.chevronRight > Number(currentLimit) &&
              "text-black/55"
          )}
          disabled={Number(id) + Options.chevronRight <= 0}
          onClick={() => handleChangeId(Options.chevronRight)}
        >
          <FiChevronsRight className="w-[10px]" />
        </button>
      </div>
      <div className="mt-[50.5px] -ml-[1px]">
        <button
          type="button"
          className={cn(
            "hover:text-gray-500/55",
            Number(id) + Options.ArrowLeft <= 0 && "text-gray-500/55"
          )}
          disabled={Number(id) + Options.ArrowLeft <= 0}
          onClick={() => handleChangeId(Options.ArrowLeft)}
        >
          <CgChevronLeft className="w-[10px]" />
        </button>
      </div>
      <div className="mt-[63px] z-10">
        <button
          type="button"
          className={cn(
            "hover:text-gray-500/55",
            Number(id) + Options.ArrowDown <= 0 && "text-gray-500/55"
          )}
          disabled={Number(id) + Options.ArrowDown <= 0}
          onClick={() => handleChangeId(Options.ArrowDown)}
        >
          <CgChevronDown className="w-[10px]" />
        </button>
      </div>
      <div className="-ml-[10px] mt-[41px] ">
        <button
          type="button"
          className={cn(
            "hover:text-gray-500/55",
            Number(id) + Options.ArrowUp > Number(currentLimit) &&
              "text-gray-500/55"
          )}
          disabled={Number(id) + Options.ArrowUp <= 0}
          onClick={() => handleChangeId(Options.ArrowUp)}
        >
          <CgChevronUp className="w-[10px]" />
        </button>
      </div>
      <div className="mt-[50.5px]">
        <button
          type="button"
          className={cn(
            "hover:text-gray-500/55",
            Number(id) + Options.ArrowRight > Number(currentLimit) &&
              "text-gray-500/55"
          )}
          disabled={Number(id) + Options.ArrowRight <= 0}
          onClick={() => handleChangeId(Options.ArrowRight)}
        >
          <CgChevronRight className="w-[10px]" />
        </button>
      </div>
    </>
  );
};
