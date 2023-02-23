import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faEarth, faHouse, faQuestion, faUsers } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="fixed px-3 w-full flex justify-between bg-primary text-white text-bold text-sm sm:text-base z-10 sm:font-bold h-12 items-center pointer-events-auto overflow-x-auto">
      <Link href="/" className="hover:text-green sm:mr-0 mr-12 transition ease-in-out delay-75 group">
        <FontAwesomeIcon icon={faHouse} height="24px" />
        <span className='tooltip group-hover:scale-100'>Home</span>
      </Link>
      <nav className="flex gap-6 mx-4 p-2 items-center static">
        <Link href="/characters" className="hover:text-blue touch-auto transition ease-in-out delay-75 group">
          <FontAwesomeIcon icon={faUsers} height="24px" />
          <span className="tooltip group-hover:scale-100">Characters</span>
        </Link>
        <Link href="/locations" className="hover:text-pink transition ease-in-out delay-75 group">
          <FontAwesomeIcon icon={faEarth} height="24px" />
          <span className="tooltip group-hover:scale-100">Locations</span>
        </Link>
        <Link href="/episodes" className="hover:text-orange transition ease-in-out delay-75 group">
          <FontAwesomeIcon icon={faClapperboard} height="24px" />
          <span className="tooltip group-hover:scale-100">Episodes</span>
        </Link>
        <Link href="/survey" className="hover:text-pink transition ease-in-out delay-75 group">
          <FontAwesomeIcon icon={faQuestion} height="24px" />
          <span className='tooltip group-hover:scale-100'>Survey</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
