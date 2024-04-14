import { render, screen } from '@testing-library/react';
import { CardList } from '../components';
import { PokemonListResponseItem } from '../types';

const mockList: PokemonListResponseItem[] = [
  { name: 'Bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  { name: 'Ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
];

describe('CardList', () => {
  it('renders the title and a list of cards', () => {
    const title = 'Pokémon List';
    const link = '/pokemon';

    render(<CardList title={title} list={mockList} link={link} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getAllByTestId('card')).toHaveLength(mockList.length);

    mockList.forEach(item => {
      expect(screen.getByText(item?.name)).toBeInTheDocument();
      expect(screen.getByTestId(`link-${item?.name}`)).toHaveAttribute('href', `/${link}/${item?.name}`);
    });
  });
});