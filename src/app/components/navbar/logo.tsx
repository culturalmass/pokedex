import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-90 transition">
        <div className="mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/stickersPA/sPA61.png"
            alt="pokedex-icon"
            priority={true}
            height="70"
            width="70"
          />
        </div>
        <div className="block">
          <p className="text-2xl font-semibold">Pokedex</p>
          <p className="text-ms text-muted-foreground">Let the search begin!</p>
        </div>
      </div>
    </Link>
  );
};
