"use client";

import Image from "next/image";

const LoadingScreen = ({ progress }: { progress: number }) => {
  return (
    <>
      {progress < 100 && (
        <section className="fixed top-0 left-0 bottom-0 right-0 bg-inherit z-50 flex justify-center items-center gap-x-16">
          <h3 className="flex text-4xl font-bold">Loading the pokedex...</h3>
          <div className="flex h-36 w-36 rounded-full drop-shadow-[5px_5px_15px_rgba(255,0,0,0.8)]">
            <Image
              src={`/loading_2.gif`}
              height={136}
              width={136}
              alt="loading"
              className="object-contain"
            />
          </div>
        </section>
      )}
    </>
  );
};

export default LoadingScreen;
