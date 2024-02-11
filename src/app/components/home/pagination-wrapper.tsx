"use server";
import { CardWrapper } from "./card-wrapper";
import { Forward } from "./forward";
import { Backward } from "./backward";

interface PaginationWrapperProps {
  state: {
    page: number;
    index: number;
    currentId: number;
  };
}

export const PaginationWrapper = ({ state }: PaginationWrapperProps) => {
  return (
    <div className="flex justify-center items-center gap-3 ml-4 h-[85vh]">
      <div>
        <Backward page={state.page} />
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 inset-0">
        {[...Array(state.index)].map((_, i) => (
          <CardWrapper key={i} id={i + 1 + state.currentId} />
        ))}
      </div>
      <div>
        <Forward page={state.page} />
      </div>
    </div>
  );
};
