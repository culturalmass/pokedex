"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaStepBackward } from "react-icons/fa";

interface BackwardProps {
  page: number;
}

export const Backward = ({ page }: BackwardProps) => {
  const router = useRouter();
  const handleClick = () => {
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
