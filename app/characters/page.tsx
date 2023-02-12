import { CharactersList } from '@/components/CharactersList';
import { CharacterFilter, CharacterRequest, FilterCharacterRequest } from '@/types/Character';
import Image from 'next/image';
import Link from 'next/link';

const url = 'https://rickandmortyapi.com/api/character/?'
const filters: CharacterFilter = {
  name: 'Rick',
  status: 'alive',
  gender: 'female'
}

async function getCharacters() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
}

async function getCharactersWithFilter(filter: CharacterFilter) {
  const res = await fetch(url + new URLSearchParams({...filter}));
  if (!res.ok) {
    throw new Error('Failed');
  } 

  return res.json();
}

async function Characters() {
  const filter = null
  const data: CharacterRequest = await getCharacters();
  const dataFiltered: FilterCharacterRequest = await getCharactersWithFilter(filters)
  const { info, results } = data;
  return (
    <main className="main bg-blue ">
      <div className="flex flex-col h-fit text-center"> 
        <h1>{info.count} Characters</h1>
        <h1>{info.pages} Pages</h1>
      </div>
      <CharactersList data={results} />
    </main>
  );
}


export default Characters