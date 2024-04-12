import { usePokemonTypes } from '../hooks';
import { PokemonList } from '../components';

const HomePage = () => {
  const { data: pokemonCategories } = usePokemonTypes();

  return (
    <>
      {pokemonCategories &&
        <PokemonList
          pokemonCategories={pokemonCategories}
        />
      }
    </>
  );
}

export default HomePage;
