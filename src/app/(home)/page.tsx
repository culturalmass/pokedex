"use server";
import { cookies } from "next/headers";
import getCurrentUser from "@/actions/getCurrentUser";
import { InfiniteScrollWrapper } from "../components/home/infinite-scroll-wrapper";
import { PaginationWrapper } from "../components/home/pagination-wrapper";

export default async function Home() {
  const user = await getCurrentUser();
  const navigation = cookies().get("navigation");

  const initialState = {
    page: 0,
  };

  return (
    <main>
      {!!user && navigation?.value === "1" ? (
        <PaginationWrapper state={initialState} />
      ) : (
        <InfiniteScrollWrapper state={initialState} />
      )}
    </main>
  );
}
