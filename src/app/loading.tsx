"use client";

import Image from "next/image";

function Loading() {
  return (
    <section className="flex w-[96vw] mt-60 justify-center items-center gap-x-16">
      <h3 className="flex text-4xl font-bold">Loading...</h3>
      <div className="flex h-36 w-36 rounded-full drop-shadow-[5px_5px_15px_rgba(255,0,0,0.8)]">
        <Image
          src={`/loading_1.gif`}
          height={136}
          width={136}
          alt="loading"
          className="object-contain"
        />
      </div>
    </section>
  );
}
export default Loading;
