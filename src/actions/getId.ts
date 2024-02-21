export const getId = (idRaw: number) => {
  if (idRaw >= 1 && idRaw < 10) {
    return "#00" + idRaw?.toString();
  }
  if (idRaw >= 10 && idRaw < 100) {
    return "#0" + idRaw?.toString();
  }
  return "#" + idRaw?.toString();
};
