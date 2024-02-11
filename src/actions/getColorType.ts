import { colorTypes } from "@/lib/utils";

export const getColor = (type: keyof typeof colorTypes) => {
  const getColor = colorTypes[type]?.color;
  return getColor;
};
