"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaForwardStep } from "react-icons/fa6";

interface ForwardProps {
  page: number;
}

export const Forward = ({ page }: ForwardProps) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/page/${Number(page) + 1}`);
  };
  return (
    <Button
      variant="default"
      type="button"
      className="text-xl"
      onClick={handleClick}
    >
      <FaForwardStep />
    </Button>
  );
};
