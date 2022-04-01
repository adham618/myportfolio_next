import * as React from 'react';

import StrokeTitle from '../StrokeTitle';

export default function Projects() {
  return (
    <section className=''>
      <div className='layout'>
        <div className='max-w-3xl'>
          <StrokeTitle title={<>What I&apos;am offering</>} />
          <p
            className='mb-5 ml-5  max-w-sm border-l-2 border-slate-500 py-2
        pl-5 opacity-50'
          >
            I help you start your business with a modern, user-friendly, and
            intuitive web application.
          </p>
        </div>
      </div>
    </section>
  );
}
