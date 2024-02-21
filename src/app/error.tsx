"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
  return (
    <div className="h-screen w-screen flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <Image
        src="/stickersPA/sPA1.png"
        height={128}
        width={128}
        alt="404-icon"
      />
      <p>Something went wrong</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default Error;
