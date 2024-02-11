export const getPokemonById = async (id: Number) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    //TODO: HANDLE ERROR
    console.log(error);
  }
};
