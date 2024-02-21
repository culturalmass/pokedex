"use client";
import { setSticker } from "@/actions/getCookies";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";

export const Stickers = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 93 }).map((_, i) => (
          <CarouselItem key={i}>
            <div
              className="relative h-56 w-56 ml-12 cursor-pointer"
              onClick={() => {
                setSticker(`/stickersPA/sPA${i}.png`);
                toast.success("Sticker change");
              }}
            >
              <Image
                src={`/stickersPA/sPA${i}.png`}
                fill
                sizes="1"
                alt={`sticker-${i}`}
                className="object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
