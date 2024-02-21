"use server";
export const getPokemonByName = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getPokemonById = async (id: number) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getPokemonListByPage = async (page: number) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${page * 10}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getPokemonListByURL = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const getPokemonByTerm = async (term: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/${term}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
