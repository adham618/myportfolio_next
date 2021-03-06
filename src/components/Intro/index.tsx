import * as React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

import ButtonLink from '../Button/ButtonLink';
import StrokeTitle from '../StrokeTitle';

export default function Intro() {
  return (
    <section className='layout gap-y-12 py-20 pb-12 md:pt-24'>
      <div className='flex flex-col items-center justify-center text-center'>
        <div className='mb-11 max-w-3xl sm:max-w-5xl'>
          <StrokeTitle
            title={
              <>
                Hello I am{' '}
                <span className='text-black dark:text-white'>Adham Tarek</span>{' '}
                a Frontend Developer
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
          className='flex items-center justify-center border-0 border-none bg-rose-500 px-12 text-center text-slate-50 hover:bg-rose-600 dark:hover:bg-rose-600 dark:hover:text-slate-50'
          href='#contact'
          content="Let's Get Started!"
          style={{ border: 'none' }}
        />
      </div>
    </section>
  );
}
