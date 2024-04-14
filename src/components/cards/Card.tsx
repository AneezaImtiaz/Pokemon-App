import React from 'react';
import { CardContainer, Name } from '../../styles/CardStyles';
import Link from 'next/link';
import { PokemonListResponseItem } from '../../types';

type CardProps = {
    item: PokemonListResponseItem;
    link: string;
};

const Card: React.FC<CardProps> = ({ item, link }) => {
    return (
        <CardContainer data-testid="card">
            <Link data-testid={`link-${item?.name}`} key={item?.name} href={`/${link}/${item?.name}`}>
                <Name>{item?.name}</Name>
            </Link>
        </CardContainer>
    );
};

export default Card;
