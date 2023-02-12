import { CharacterRequest } from "@/types/Character";
import { EpisodeRequest } from "@/types/Episode";
import { LocationRequest } from "@/types/Location";
import Image from "next/image";

type Props = {
  data: CharacterRequest | EpisodeRequest | LocationRequest,
  listType: 'Characters' | 'Locations' | 'Episodes',
  children: JSX.Element
}


function List({data, listType, children} : Props) {
  const {info, results} = data
  return (
    <>
      <div className="flex-1 text-center">
        <h1>{info.count} {listType}</h1>
        <h1>{info.pages} Pages</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {results.map((elem) => (
          <article key={elem.id} className="bg-primary  text-white m-2 h-60   w-[500px] rounded-2xl flex">
            <div className="flex flex-[3_1_0%] w-full rounded-2xl">
              {children}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default List;
