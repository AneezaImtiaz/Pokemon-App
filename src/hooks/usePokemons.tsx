import { useQuery } from 'react-query';
import axios from 'axios';
import { PokemonListResponseItem } from '../types';

const fetchPokemonsByCategory = async (categoryName: string): Promise<PokemonListResponseItem[]> => {
  try {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${categoryName}`);
    return data?.pokemon?.map((item: {pokemon: {name: string; url: string}}) => item?.pokemon); 
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

export const usePokemons = (categoryName: string) => {
  return useQuery<PokemonListResponseItem[], Error>(['pokemons', categoryName], () =>  fetchPokemonsByCategory(categoryName), {
    retry: false, // Disable automatic retry
  });
};
