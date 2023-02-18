import { Character } from '@/types/Character';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: Character[];
};

export function CharactersList({ data }: Props) {
  const statusStyle = (status: 'Dead' | 'Alive' | 'unknown', style: string) =>
    clsx(
      style,
      status == 'unknown' && 'bg-gray',
      status === 'Dead' && 'bg-red',
      status === 'Alive' && 'bg-green',
    );

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {data.map((elem) => (
        <article key={elem.id} className="bg-primary  text-white mt-4 mx-0 h-60 sm:w-[500px] sm:m-2 w-[330px] rounded-2xl flex ">
          <div className="flex flex-[3_1_0%] w-full rounded-2xl">
            <Image
              src={elem.image}
              alt={elem.name}
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center rounded-l-xl"
            />
          </div>
          <div className="flex flex-[3_1_0%] pt-4 flex-col relative bg-primary rounded-r-xl">
            <Link href={elem.url}>
              <p className="font-semibold text-xl pb-6 px-6">{elem.name}</p>
            </Link>
            <span className="px-6 flex">
              Status: {elem.status}
              <span className="flex h-3 w-3 relative top-1.5 left-1">
                <span className={statusStyle(elem.status, 'animate-ping absolute inline-flex h-3 w-3 rounded-full')}></span>
                <span className={statusStyle(elem.status, 'relative inline-flex rounded-full h-3 w-3 opacity-40')}></span>
              </span>
            </span>
            <p className="pl-6">Gender: {elem.gender}</p>
            <p className="pl-6">Species: {elem.species}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
