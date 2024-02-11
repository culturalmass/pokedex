import getCurrentUser from "@/actions/getCurrentUser";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Auth from "../authorization/auth";
import { signOut } from "next-auth/react";
import { PiSignOut } from "react-icons/pi";
import { User } from "./user";

export const Actions = async () => {
  const session = await getCurrentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!session?.user?.name && <Auth />}
      {session?.user?.name && <User user={session?.user} />}
    </div>
  );
};
