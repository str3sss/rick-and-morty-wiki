import { Location } from '@/types/Location';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: Location[]
}

export function LocationsList({data} : Props) {
  return (
    <div className="flex flex-wrap justify-center mt-8">
        {data.map((elem) => (
          <article key={elem.id} className="bg-primary  text-white mt-4 mx-0 h-60 sm:w-[500px] sm:m-2 w-11/12 rounded-2xl flex">
            <div className="flex flex-[3_1_0%] pt-4 flex-col relative bg-primary rounded-xl">
              <Link href={elem.url}>
                <p className='font-semibold text-xl pb-6 px-6'>{elem.name}</p>
              </Link>
              <p className='pl-6'>Dimension:  {elem.dimension}</p>
              <p className='pl-6'>Type: {elem.type}</p>
              <p className='pl-6'>Created: {elem.created}</p>
            </div>
          </article>
        ))}
      </div>
  );
}