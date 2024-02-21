"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cn, colorTypes } from "@/lib/utils";
import { getColor } from "@/actions/getColorType";
import { getName } from "@/actions/getName";
import { getId } from "@/actions/getId";
import { pokemonProps } from "@/types/pokemon";
import { toast } from "sonner";

interface PokemonCardProps {
  pokemon: pokemonProps;
  limit: number;
}

const MotionDiv = motion.div;
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const PokemonCard = ({ pokemon, limit }: PokemonCardProps) => {
  const router = useRouter();
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 1 * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className={cn(
        "cursor-pointer flex flex-col justify-center items-center w-56 h-80 rounded-2xl gap-y-8 border-2 border-white transition-transform hover:translate-x-2 hover:-translate-y-2 hover:border-l-[10px] hover:border-b-[10px]",
        `${getColor(pokemon?.types[0]?.type?.name as keyof typeof colorTypes)}`
      )}
      onClick={() => {
        router.push(`/pokedex/${pokemon?.id}&limit=${limit}`);
      }}
    >
      <div className="flex flex-row justify-center gap-4">
        <h2 className="flex font-bold text-2xl truncate text-wrap">
          {getName(pokemon?.name)}
        </h2>
        <div className="flex justify-center items-center font-bold text-l rounded-2xl w-16 h-8 border-2 bg-white/30 border-white">
          <p>{getId(pokemon?.id)}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="absolute rounded-full h-32 w-32 bg-white/25" />

        <Image
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt={pokemon?.name}
          width={148}
          height={148}
          className="object-contain z-10"
        />
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        {pokemon?.types?.map((slot, index) => (
          <div
            key={index}
            className={cn(
              "flex justify-center text-xl font-semibold rounded-2xl shadow-md  w-24 h-8 contrast-100 border-2 border-white",
              `${getColor(slot.type.name as keyof typeof colorTypes)}`
            )}
          >
            {getName(slot.type.name)}
          </div>
        ))}
      </div>
    </MotionDiv>
  );
};
