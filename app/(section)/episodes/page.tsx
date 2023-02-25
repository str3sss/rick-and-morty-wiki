import { EpisodesList } from '@/components/EpisodesList';
import { EpisodeRequest } from '@/types/Episode';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Episodes',
  description: 'Rick and Morty episodes',
};

async function getEpisodes() {
  const res = await fetch('https://rickandmortyapi.com/api/episode');
  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
}

async function Episodes() {
  const data: EpisodeRequest = await getEpisodes();
  const { info, results } = data;
  return (
    <main className="main bg-orange">
      <div className="flex flex-col h-fit text-center">
        <h1>{info.count} Episodes</h1>
        <h1>{info.pages} Pages</h1>
      </div>
      <EpisodesList data={results} />
    </main>
  );
}

export default Episodes;
