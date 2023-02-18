import { Info } from './Info';

export interface CharacterFilter {
  name?: string;
  status?: 'alive' | 'dead' | 'unknown';
  type?: string;
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
}

export interface Character {
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'female' | 'male' | 'genderless' | 'unknown';
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterRequest {
  info: Info;
  results: Character[];
}

export interface FilterCharacterRequest extends CharacterRequest {
  filter?: CharacterFilter;
}
