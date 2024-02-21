"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  generationListProps,
  locationListProps,
  regionListProps,
} from "@/types/pokemon";

enum Filters {
  generation = "generation",
  region = "region",
  city = "city",
}

interface FilterProps {
  generationList: generationListProps;
  regionList: regionListProps;
  locationList: locationListProps;
  limit: string;
}

export const Filter = ({
  generationList,
  regionList,
  locationList,
  limit,
}: FilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [filterParams, setFilterParams] = useState({
    generationParams: "",
    regionParams: "",
    locationParams: "",
  });

  const handleFilter = ({ filter, url }: { filter: string; url: string }) => {
    if (filter === Filters.generation) {
      setFilterParams({
        ...filterParams,
        generationParams: url,
      });
    }
    if (filter === Filters.region) {
      setFilterParams({
        ...filterParams,
        regionParams: url,
      });
    }
    if (filter === Filters.city) {
      setFilterParams({
        ...filterParams,
        locationParams: url,
      });
    }
  };
  const handleSubmit = () => {
    router.push(
      `/search?gen=${
        filterParams.generationParams !== ""
          ? "true&filGen=" +
            filterParams.generationParams.split("/")[5] +
            "/" +
            filterParams.generationParams.split("/")[6]
          : "false"
      }&reg=${
        filterParams.regionParams !== ""
          ? "true&filReg=" +
            filterParams.regionParams.split("/")[5] +
            "/" +
            filterParams.regionParams.split("/")[6]
          : "false"
      }&loc=${
        filterParams.locationParams !== ""
          ? "true&filLoc=" +
            filterParams.locationParams.split("/")[5] +
            "/" +
            filterParams.locationParams.split("/")[6] +
            `&limit=${limit}`
          : `false&limit=${limit}`
      }
      `
    );
    setFilterParams({
      generationParams: "",
      regionParams: "",
      locationParams: "",
    });
  };

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button
          variant="default"
          disabled={pathname.split("/")[1] === "pokedex"}
          type="button"
          className="text-2xl"
        >
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm text-center z-50">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Filters</DrawerTitle>
            <DrawerDescription className="text-xl ">
              Selet the way you want to filter the search.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex items-center justify-center gap-8">
            <Combobox
              name={Filters.generation}
              data={generationList}
              handleFilter={handleFilter}
            />
            <Combobox
              name={Filters.region}
              data={regionList}
              handleFilter={handleFilter}
            />
            <Combobox
              name={Filters.city}
              data={locationList}
              handleFilter={handleFilter}
            />
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button className="text-2xl" onClick={handleSubmit}>
                Apply
              </Button>
            </DrawerClose>
            <DrawerClose asChild>
              <Button variant="outline" className="text-2xl">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
