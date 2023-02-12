import Image from 'next/image';
import { Montserrat } from '@next/font/google';
import styles from './page.module.css';
import TypewriterComponent from '@/components/Typewriter';

const inter = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="main bg-green">
      <TypewriterComponent />

      <p className="text-2xl font-medium py-8">
        Here you can find all available information on characters, locations and episodes of the Rick and Morty universe.
      </p>
    </main>
  );
}
