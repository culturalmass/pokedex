"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { getName } from "@/actions/getName";
import { Button } from "@/components/ui/button";
import { Label } from "./label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuChevronsUpDown } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
interface ComboboxProps {
  name: string;
  data: {
    name: string;
    url: string;
  }[];
  handleFilter: ({ filter, url }: { filter: string; url: string }) => void;
}

export function Combobox({ name, data, handleFilter }: ComboboxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Label className="text-xl">{getName(name)}:</Label>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-auto justify-between text-xl"
        >
          {value ? getName(value) : `Select ${name}...`}
          <LuChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput className="text-lg" placeholder={`Search ${name}...`} />
          <CommandEmpty>No {name} found.</CommandEmpty>
          <CommandGroup>
            {data?.map((item, i) => (
              <CommandItem
                key={i}
                value={item.name}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  handleFilter({ filter: name, url: item.url });
                  setOpen(false);
                }}
                className="text-lg"
              >
                <FaCheck
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === item.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {getName(item.name)}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
