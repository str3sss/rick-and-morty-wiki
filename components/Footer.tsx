import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className='justify-around w-1/2 flex flex-1'>
          <div className='flex justify-center items-center font-light'>Copyright 2023 by str3sss</div>
          <div className='gap-1 flex flex-col items-center'>
          <Link href={'https://t.me/str3s55'} className='hover:text-blue'> telegram</Link>
          <Link href={'https://github.com/str3sss'} className='hover:text-orange'> github</Link>
          <Link href={'https://github.com/str3sss'} className='hover:text-pink'> discord</Link>
          </div> 
      </div>
    </footer>
  );
}

export default Footer;
