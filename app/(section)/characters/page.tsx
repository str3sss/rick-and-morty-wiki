import { CharactersList } from '@/components/CharactersList';
import { graphql } from '@/lib/gql';
import {  GetCharactersDocument, GetCharactersQuery } from '@/lib/gql/graphql';
import { gqlClient } from '@/lib/service/client';
// import { GET_CHARACTERS } from '@/lib/service/GetCharacters';
import { CharacterFilter, FilterCharacterRequest } from '@/types/Character';
import request, { gql } from 'graphql-request';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Characters',
  description: 'Rick and Morty characters',
};

const url = 'https://rickandmortyapi.com/api/character/?'
const filters: CharacterFilter = {
  name: 'Rick',
  status: 'alive',
  gender: 'female'
}

async function getCharacters(page = 1) {
  const { characters } = await gqlClient.request(GetCharactersDocument, {page: page})
  return characters!
}

async function getCharactersWithFilter(filter: CharacterFilter) {
  const res = await fetch(url + new URLSearchParams({...filter}));
  if (!res.ok) {
    throw new Error('Failed');
  } 
  return res.json();
}

export default async function Characters() {
  const filter = null
  const data = await getCharacters();
  const dataFiltered: FilterCharacterRequest = await getCharactersWithFilter(filters)
  const info = data.info!;
  const results = data.results!
  return (
    <main className="main bg-blue ">
      <div className="flex flex-col h-fit text-center"> 
        <h1>{info.count} Characters</h1>
        <h1>{info.pages} Pages</h1>
      </div>
      <CharactersList data={results as []} />
    </main>
  );
}