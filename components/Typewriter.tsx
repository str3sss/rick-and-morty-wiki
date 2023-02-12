'use client'
import Typewriter from 'react-ts-typewriter';

function TypewriterComponent() {
  return (
    <h1 className='text-4xl'>
      <Typewriter text="Simple Rick and Morty wiki " loop random={300} delay={3000}/>
    </h1>
  );
}

export default TypewriterComponent;
