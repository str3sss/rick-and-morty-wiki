import { CharactersList } from "@/components/CharactersList";
import {
  CharacterFilter,
  CharacterRequest,
  FilterCharacterRequest,
} from "@/types/Character";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Characters",
  description: "Rick and Morty characters",
};

const url = "https://rickandmortyapi.com/api/character/?";

const filters: CharacterFilter = {
  name: "Rick",
  status: "Alive",
  gender: "female",
};

async function getCharacters() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}

async function getCharactersWithFilter(filter: CharacterFilter) {
  const res = await fetch(url + new URLSearchParams({ ...filter }));
  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
}

export default async function Characters() {
  const filter = null;
  const data: CharacterRequest = await getCharacters();
  const dataFiltered: FilterCharacterRequest = await getCharactersWithFilter(
    filters
  );
  const { info, results } = data;
  return (
    <main className="main bg-blue ">
      <header className="flex flex-col h-fit text-center">
        <h1>{info.count} Characters</h1>
        <h1>{info.pages} Pages</h1>
      </header>
      <CharactersList data={results} />
    </main>
  );
}
