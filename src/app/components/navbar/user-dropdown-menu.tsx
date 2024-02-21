import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { PiSignOut } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import { User } from "./user";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserDropdownMenu = ({ user }: User) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={user.image!}
          alt="user-icon"
          width={24}
          height={24}
          className="rounded-full w-12 cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-12">
        <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => router.push("/favorites")}
          >
            <MdFavorite className="mr-2 h-4 w-4" />
            <span>Favorites</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => router.push("/settings")}
          >
            <IoMdSettings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          <PiSignOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
