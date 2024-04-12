import { usePokemonTypes } from '../hooks';
import { PokemonList } from '../components';

const Home = () => {
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

export default Home;
