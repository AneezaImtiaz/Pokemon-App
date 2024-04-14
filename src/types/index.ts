
// Define the basic structure for a Pokemon's list reponse item
export type PokemonListResponseItem = {
  name: string;
  url: string;
};

// Define the basic structure for a Pokemon's ability
export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};


// Define the basic structure for a Pokemon's type
 export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

// Define the basic structure for a Pokemon's stat
export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

// Define the basic structure for a Pokemon's sprites
export type PokemonSprite = {
  front_default: string;
  other?: {
    'official-artwork': {
      front_default: string;
    }
  };
};

// Define the main Pokemon
export type Pokemon = {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  types: PokemonType[];
  stats: PokemonStat[];
  sprites: PokemonSprite;
  height: number; 
  weight: number;
};
