import Form from '@/components/Form';
import SwipeMenu from '@/components/SwipeMenu';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Survey',
  description: 'Rick and Morty surveys',
};

function Survay() {
  return (
    <SwipeMenu status>
      <main className="main bg-pink -z-2  0">
        <Form />
      </main>
    </SwipeMenu>
  );
}

export default Survay;
