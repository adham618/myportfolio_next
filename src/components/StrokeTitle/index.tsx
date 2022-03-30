import * as React from 'react';

export default function StrokeTitle({ title }: { title: React.ReactNode }) {
  return (
    <h2 className='text-stroke dark:text-stroke-black mb-6 text-5xl font-black uppercase leading-[1em] tracking-tight text-transparent sm:text-6xl  sm:leading-[0.8em] md:text-7xl lg:text-8xl'>
      {title}
    </h2>
  );
}
