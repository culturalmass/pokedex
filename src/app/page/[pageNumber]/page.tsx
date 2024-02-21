"use server";

import { notFound } from "next/navigation";
import getCurrentUser from "@/actions/getCurrentUser";
import { PaginationWrapper } from "@/app/components/home/pagination-wrapper";

interface PageProps {
  params: {
    pageNumber: number;
  };
}

const Page = async ({ params }: PageProps) => {
  const user = await getCurrentUser();

  if (!user) {
    notFound();
  }

  const state = {
    page: params.pageNumber,
  };
  return (
    <>
      <PaginationWrapper state={state} />
    </>
  );
};

export default Page;
