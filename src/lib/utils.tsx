import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colorTypes = {
  bug: {
    name: "Bug",
    color: "bg-[#94bc4a]",
    description:
      "Bugs reflect a mix of the green of the plant-life that you find insects more often in, but with a tinge of red to represent the blood of animal-life.",
  },

  dark: {
    name: "Dark",
    color: "bg-[#736c75]",
    description:
      "Dark is dark. Incidentally it seems to be an inversion of the Normal-type.",
  },

  dragon: {
    name: "Dragon",
    color: "bg-[#6a7baf]",
    description:
      "Dragon has had so many different colors associated with it over the years, but indigo seems to be the one that is most associated with it. Though it might be more accurate to consider it “azure”, as that is the color that is most associated with dragons in Asia.",
  },

  electric: {
    name: "Electric",
    color: "bg-[#e5c531]",
    description: "Yellow is the most obvious choice for electricity.",
  },

  fairy: {
    name: "Fairy",
    color: "bg-[#e397d1]",
    description:
      "Fairy has this sort of pixie pink color, which… y’know… is a cute color of little pixie fairies.",
  },

  fighting: {
    name: "Fighting",
    color: "bg-[#cb5f48]",
    description:
      "Fighting is represented by this more sanguine red, almost as if representing the boiling-red blood of physical battle!",
  },

  fire: {
    name: "Fire",
    color: "bg-[#ea7a3c]",
    description:
      "Fire is mostly red, but it also reflects the oranges and yellows that are also part of a roaring flame.",
  },

  flying: {
    name: "Flying",
    color: "bg-[#7da6de]",
    description:
      "Flying takes on the light blue hues of the sky, as well as the slight coldness that comes with flying that high…",
  },

  ghost: {
    name: "Ghost",
    color: "bg-[#846ab6]",
    description:
      "The color of the Ghost-type is a bit more similar to Dragon-type’s color, albeit slightly more red. The dark purple color represents the supernatural spirits that glow ever-so-slightly against the dim light of the night.",
  },

  grass: {
    name: "Grass",
    color: "bg-[#71c558]",
    description: "Grass is green.",
  },
  ground: {
    name: "Ground",
    color: "bg-[#cc9f4f]",
    description:
      "Relative to the similarly earthy Rock-type, Ground-type had more yellow and browns, representing sand and dirt.",
  },
  ice: {
    name: "Ice",
    color: "bg-[#70cbd4]",
    description:
      "Ice has the whites of fresh snow, with some of the blue peeking through due to centuries of ice being compressed.",
  },

  normal: {
    name: "Normal",
    color: "bg-[#aab09f]",
    description:
      "You can’t get more vanilla than this boring grey color. Incidentally, it seems to be an inversion of Dark-type.",
  },

  poison: {
    name: "Poison",
    color: "bg-[#b468b7]",
    description:
      "You can almost imagine a vat of putrid boiling purple sludge at some processing plant somewhere, which seems to be a common color for “goop”.",
  },
  psychic: {
    name: "Psychic",
    color: "bg-[#e5709b]",
    description:
      "This particular shade of purple seems to be a combination of what you’d think “psychic energy” could look like, but it also has more reddish-pinks associated with the color of the brain itself.",
  },
  rock: {
    name: "Rock",
    color: "bg-[#b2a061]",
    description:
      "Rock, on the other hand, reflects more of the dull greys of stone and concrete.",
  },

  steel: {
    name: "Steel",
    color: "bg-[#89a1b0]",
    description:
      "Steel reflects the dull blues of metals in general, but also the blue that come from the oxide layer which forms after tempering metal.",
  },
  water: {
    name: "Water",
    color: "bg-[#539ae2]",
    description:
      "Water has the darker blues that is most associated with it, especially as you dive further down into the depths of the ocean.",
  },
};
