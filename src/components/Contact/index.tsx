/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import ButtonLink from '../Button/ButtonLink';
import Calendly from '../Calendly';
import StrokeTitle from '../StrokeTitle';

export default function Contact() {
  return (
    <section className=' bg-slate-100 dark:bg-primary'>
      <div className='layout  flex h-[30rem] w-full flex-col justify-center py-80'>
        <div className='flex flex-col items-center justify-center text-center'>
          <StrokeTitle
            title={
              <>
                start your project with{' '}
                <span className='text-black dark:text-white'>me</span>
              </>
            }
          />
          <p className='dark:opacity-50'>
            Tell me more about your project. Send me a message <br />
            and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className='mt-24 flex h-14 w-full flex-col items-center justify-center gap-4 sm:mt-11 sm:flex-row'>
          <ButtonLink
            href='/contact'
            content={
              <>
                <img
                  className='h-6 w-6'
                  width='24'
                  height='24'
                  src='/svg/gmail.svg'
                  alt='email'
                />
                Send me an Email
              </>
            }
            className='flex items-center justify-center gap-3 text-center'
          />{' '}
          <div className='opacity-50'>OR</div>{' '}
          <div className='relative inline-block'>
            <Calendly />
          </div>
        </div>
      </div>
    </section>
  );
}
