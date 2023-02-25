import { LocationsList } from '@/components/LocationsList';
import { LocationRequest } from '@/types/Location';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: 'Locations',
  description: 'Rick and Morty locations',
};

async function getLocations() {
  const res = await fetch('https://rickandmortyapi.com/api/location');
  if (!res.ok) {
    throw new Error('Failed');
  }
  return res.json();
}
async function Locations() {
  const data: LocationRequest = await getLocations();
  const { info, results } = data;
  return (
    <main className="main bg-pink">
      <div className="flex flex-col h-fit text-center">
        <h1>{info.count} Locations</h1>
        <h1>{info.pages} Pages</h1>
      </div>
      <LocationsList data={results} />
    </main>
  );
}

export default Locations