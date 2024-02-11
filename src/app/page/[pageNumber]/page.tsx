import { PaginationWrapper } from "@/app/components/home/pagination-wrapper";
import React from "react";

interface PageProps {
  params: {
    pageNumber: number;
  };
}

const Page = ({ params }: PageProps) => {
  const state = {
    page: params.pageNumber,
    index: 10,
    currentId: params.pageNumber * 10,
  };
  return (
    <>
      <PaginationWrapper state={state} />
    </>
  );
};

export default Page;
