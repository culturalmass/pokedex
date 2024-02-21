"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaStepBackward } from "react-icons/fa";

interface BackwardProps {
  page: number;
}

export const Backward = ({ page }: BackwardProps) => {
  const router = useRouter();
  const handleClick = () => {
    if (Number(page) === 1) {
      router.push("/");
      return;
    }
    router.push(`/page/${Number(page) - 1}`);
  };
  return (
    <Button
      variant="default"
      type="button"
      className="text-xl"
      disabled={Number(page) === 0 ? true : false}
      onClick={handleClick}
    >
      <FaStepBackward />
    </Button>
  );
};
