export const getName = (name: string) => {
  const properName = name?.slice(0, 1).toUpperCase() + name?.slice(1);
  return properName;
};
