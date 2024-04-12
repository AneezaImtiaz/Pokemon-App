import React from 'react';
import styled from 'styled-components';
import { PokemonType } from '../../types';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding: 20px;
`;

interface PokemonListProps {
  pokemonCategories: PokemonType[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemonCategories }) => {
  return (
    <div>
      <ListContainer>
        {pokemonCategories.map(category => (
          <div>{category.name}</div>
        ))}
      </ListContainer>
    </div>
  );
};

export default PokemonList;