"use client";

import { UserDropdownMenu } from "./user-dropdown-menu";

export interface User {
  user: {
    name?: string | null | undefined;
    image?: string | null | undefined;
    email?: string | null | undefined;
  };
}
export const User = ({ user }: User) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mx-12">
          <UserDropdownMenu user={user} />
        </div>
      </div>
    </>
  );
};
