import { useQuery } from 'react-query';
import axios from 'axios';
import { PokemonListResponseItem } from '../types';

const fetchPokemonsByCategory = async (pokemonName: string): Promise<PokemonListResponseItem[]> => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return data;
  } catch (error) {
    // If error is an Axios error, throw the response error
    if (axios.isAxiosError(error) && error?.response) {
      throw error?.response?.data;
    } else {
      // Otherwise throw a generic error
      throw new Error('An unknown error occurred');
    }
  }
};

export const usePokemonsDetail = (pokemonName: string) => {
  return useQuery<PokemonListResponseItem[], Error>(['pokemonDetails', pokemonName], () =>  fetchPokemonsByCategory(pokemonName), {
    retry: false, // Disable automatic retry
  });
};
