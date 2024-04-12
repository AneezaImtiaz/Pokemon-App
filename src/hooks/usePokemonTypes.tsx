import { useQuery } from 'react-query';
import axios from 'axios';
import { PokemonType } from '../types';

const fetchPokemonTypes = async (): Promise<PokemonType[]> => {
  try {
    const { data } = await axios.get('https://pokeapi.co/api/v2/type/');
    return data.results;
  } catch (error) {
    // If error is an Axios error, throw the response error
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      // Otherwise throw a generic error
      throw new Error('An unknown error occurred');
    }
  }
};

export const usePokemonTypes = () => {
  return useQuery<PokemonType[], Error>('pokemonTypes', fetchPokemonTypes);
};
