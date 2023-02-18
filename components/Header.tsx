import Link from 'next/link';

function Header() {
  return (
    <header className="fixed px-3 w-full flex justify-between bg-primary text-white text-bold text-sm sm:text-base z-10 sm:font-bold h-12 items-center pointer-events-auto overflow-x-auto">
      <Link href="/" className='hover:text-green before:content-["#"] before:mr-0.5 sm:mr-0 mr-12 transition ease-in-out delay-75'>Home</Link>
      <nav className='flex gap-6 mx-4 p-2'>
        <Link href="/characters" className='hover:text-blue before:content-["/"] before:mr-0.5 transition ease-in-out delay-75'>Characters</Link>
        <Link href="/locations" className='hover:text-pink before:content-["/"] before:mr-0.5 transition ease-in-out delay-75'>Locations</Link>
        <Link href="/episodes" className='hover:text-orange before:content-["/"] before:mr-0.5 transition ease-in-out delay-75'>Episodes</Link>
        <Link href="/survey" className='hover:text-orange before:content-["/"] before:mr-0.5 transition ease-in-out delay-75'>???</Link>
      </nav>
    </header>
  );
}

export default Header;
