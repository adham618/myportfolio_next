import * as React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

import ButtonLink from '../Button/ButtonLink';
import StrokeTitle from '../StrokeTitle';

export default function Intro() {
  return (
    <section className='layout gap-y-12 py-20'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='mb-11 max-w-3xl'>
          <StrokeTitle
            title={
              <>
                YOUR PARTNER{' '}
                <span className='font-thin text-black dark:text-white'>—</span>{' '}
                IN <span className='text-black dark:text-white'>DESIGN</span> &{' '}
                <span className='text-black dark:text-white'>DEVELOPMENT</span>
              </>
            }
          />
          <p className='text-sm sm:text-base'>
            I create{' '}
            <span className='font-bold text-black dark:text-white'>apps</span>{' '}
            and websites your{' '}
            <span className='font-bold text-black dark:text-white'>
              clients
            </span>{' '}
            will{' '}
            <BsFillHeartFill className='ml-1 inline-block	 animate-bounce text-rose-500' />
          </p>
        </div>
        <ButtonLink
          className='flex items-center justify-center border-none bg-rose-500 text-center text-white hover:bg-rose-600 dark:hover:bg-rose-600 dark:hover:text-white sm:px-12'
          href='#contact'
          content="Let's Get Started!"
        />
      </div>
    </section>
  );
}
