import { Info } from './Info';

export type CharacterStatus = 'Dead' | 'Alive' | 'unknown'
export type CharacterGender = 'female' | 'male' | 'genderless' | 'unknown'
export interface CharacterFilter {
  name?: string;
  status?: CharacterStatus;
  type?: string;
  gender?: CharacterGender;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
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
