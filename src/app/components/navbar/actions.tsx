import Auth from "../authorization/auth";
import { User } from "./user";
import getCurrentUser from "@/actions/getCurrentUser";

export const Actions = async () => {
  const session = await getCurrentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!session?.user?.name && <Auth />}
      {session?.user?.name && <User user={session?.user} />}
    </div>
  );
};
