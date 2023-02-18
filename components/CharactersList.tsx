import { Character} from '@/types/Character';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: Character[]
}

export function CharactersList({data} : Props) {
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
                <p className='font-semibold text-xl pb-6 px-6'>{elem.name}</p>
              </Link>
              <p className='px-6'>Status: {elem.status}</p>
              <p className='pl-6'>Gender: {elem.gender}</p>
              <p className='pl-6'>Species: {elem.species}</p>
            </div>
          </article>
        ))}
      </div>
  );
}

