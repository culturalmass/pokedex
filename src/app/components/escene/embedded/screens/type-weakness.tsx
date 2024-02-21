import { getId } from "@/actions/getId";
import { getName } from "@/actions/getName";
import { removeDuplicates, weakness } from "@/lib/utils";
import { pokemonProps } from "@/types/pokemon";

interface TypeWeaknessProps {
  pokemon: pokemonProps;
}

export const TypeWeakness = ({ pokemon }: TypeWeaknessProps) => {
  let list: string[] = [];
  for (let i = 0; i < pokemon?.types?.length; i++) {
    weakness[pokemon?.types[i]?.type?.name as keyof typeof weakness].forEach(
      (type) => list.push(type)
    );
  }
  const parseList = removeDuplicates(list);
  return (
    <>
      <div className="ml-[5px] mt-1 font-white text-[8px]">
        <div className="flex  gap-x-7">
          <span className="flex font-bold truncate">
            {getName(pokemon?.name)}&nbsp;&nbsp;
            {getId(pokemon?.id)}
          </span>
        </div>
        <div className="flex gap-x-1">
          <span className="font-semibold">Weakness:</span>
          <span className="text-muted-foreground flex gap-x-[2px]">
            {parseList.slice(0, 3).map((item, i) => (
              <p key={i}>{getName(item as string)}</p>
            ))}
          </span>
        </div>
        <span className="text-muted-foreground flex gap-x-[2px]">
          {parseList.slice(4).map((item, i) => (
            <p key={i}>{getName(item as string)}</p>
          ))}
        </span>
      </div>
    </>
  );
};
