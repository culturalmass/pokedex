"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { getName } from "@/actions/getName";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

interface SearchProps {
  searchList: searchListProps;
  limit: number;
}
type searchListProps = {
  name: string;
}[];

export const Search = ({ searchList, limit }: SearchProps) => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [quickMatch, setQuickMatch] = useState<searchListProps | []>([]);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let spaces = /^.+\s.+$/;
    let number = /^\d+$/;
    let string = /^[^0-9]+[^0-9]$/;

    e.preventDefault();

    if (!value) return;

    if (spaces.test(value)) {
      toast.error("No spaces in the search!");
      return;
    }
    if (!string.test(value) && !number.test(value)) {
      toast.error("Only the number or the name in the search!");
      return;
    }

    router.push(`/pokedex/${value}&limit=${limit}`);
  };

  const onClear = () => {
    setValue("");
    setIsOpen(false);
  };

  const handleValueChange = (data: string) => {
    setValue(data);
    let newQuickMatch = searchList
      .slice(0, limit)
      .filter((poke) => poke.name.slice(0, data.length) === data);
    setQuickMatch(newQuickMatch);
    if (data.length > 1 && newQuickMatch.length > 0) {
      setIsOpen(true);
    }
    if (data.length <= 1) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="relative w-full lg:w-[400px] flex items-center"
      >
        <Input
          value={value}
          onChange={(e) => handleValueChange(e.target.value)}
          placeholder="Search by name or number of the pokemon"
          className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
        />
        {value && (
          <IoIosCloseCircle
            className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
            onClick={onClear}
          />
        )}
        <Button
          variant="default"
          type="submit"
          size="icon"
          className="text-2xl rounded-l-none"
        >
          <IoSearchOutline className="h-7 w-7 " />
        </Button>
      </form>
      <div
        className={cn(
          "absolute flex flex-col justify-center items-start  transition-colors focus:bg-accent focus:text-accent-foreground rounded-sm w-80 top-16 left-50 ml-28 outline outlie-[1px] outline-gray-800 bg-black/95",
          !isOpen && "hidden"
        )}
      >
        {quickMatch.map((poke, i) => (
          <span
            key={i}
            className="flex ml-2 text-muted-foreground cursor-pointer hover:bg-slate-700 w-[300px] rounded-sm"
            onClick={() => {
              setValue(poke.name);
              setIsOpen(false);
            }}
          >
            {getName(poke.name)}
          </span>
        ))}
      </div>
    </>
  );
};
