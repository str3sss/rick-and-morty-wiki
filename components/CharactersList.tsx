// import { Character } from '@/types/Character';
import { Character } from '@/lib/gql/graphql';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: Character[];
};

export function CharactersList({ data }: Props) {
  const statusStyle = (status: string, style: string) =>
    clsx(style, status == 'unknown' && 'bg-gray', status === 'Dead' && 'bg-red', status === 'Alive' && 'bg-green');

  return (
    
    <div className="flex flex-wrap justify-center mt-8">
      {data.map((elem) => ( 
        <article key={elem.id} className="bg-primary  text-white mt-4 mx-0 h-60 sm:w-[500px] sm:m-2 w-11/12 rounded-2xl flex ">
          <div className="flex flex-row w-full rounded-2xl">
            <div className="basis-1/2">
              <Image
                src={elem.image!}
                alt={elem.name!}
                width={1000}
                height={1000}
                className="w-full basis-1/2 h-full object-cover object-center rounded-l-xl"
              />
            </div>
            <div className="flex basis-1/2 pt-4 flex-col relative bg-primary rounded-r-xl pl-4 pr-2">
              <Link href={'/'}>
                <p className="font-semibold text-xl pb-6">{elem.name}</p>
              </Link>
              <span>
                Status: {elem.status}
                <span className="h-3 w-3 left-2 relative">
                  <span
                    className={statusStyle(elem.status!, 'animate-ping inline-flex absolute top-1 h-3 w-3 rounded-full')}
                  ></span>
                  <span className={statusStyle(elem.status!, 'absolute top-1 inline-flex rounded-full h-3 w-3 opacity-40')}></span>
                </span>
              </span>
              <p>Gender: {elem.gender}</p>
              <p>Species: {elem.species}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
