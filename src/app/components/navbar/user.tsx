"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { PiSignOut } from "react-icons/pi";

interface User {
  user: {
    name?: string | null | undefined;
    image?: string | null | undefined;
    email?: string | null | undefined;
  };
}

export const User = ({ user }: User) => {
  // console.log(user);
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <Button variant="default" type="button" className="text-2xl mr-12">
          Favorites
        </Button>
        <Image
          src={user.image!}
          alt="user-icon"
          width={24}
          height={24}
          className="rounded-lg w-10"
        />
        <div className="text-2xl">{user.name}</div>

        <Button
          variant="default"
          type="button"
          size="icon"
          className="text-2xl"
          onClick={() => signOut()}
        >
          <PiSignOut className="h-7 w-7" />
        </Button>
      </div>
    </>
  );
};
