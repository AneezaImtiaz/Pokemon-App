import React from 'react';
import { Card } from '..';
import { CardListHeader, ListContainer } from '../../styles/CardListStyles';
import { PokemonListResponseItem } from '../../types';

type CardListProps = {
  title: string;
  link: string;
  list: PokemonListResponseItem[];
}

const CardList: React.FC<CardListProps> = ({ title, list, link }) => {
  return (
    <div>
      <CardListHeader>{title}</CardListHeader>
      <ListContainer>
        {list.map(item => (
          <Card item={item} link={link} />
        ))}
      </ListContainer>
    </div>
  );
};

export default CardList;
