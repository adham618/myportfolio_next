/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { InlineWidget } from 'react-calendly';
import { IoClose } from 'react-icons/io5';

import Button from '../Button';
import ButtonLink from '../Button/ButtonLink';
import StrokeTitle from '../StrokeTitle';

export default function Contact() {
  const [open, setopen] = React.useState(false);
  return (
    <section className=' bg-slate-100 dark:bg-primary'>
      <div className='layout  flex h-[30rem] w-full flex-col items-center justify-center py-80 text-center'>
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
          <div className='inline-block'>
            <Button
              onClick={() => setopen(!open)}
              content={
                <>
                  <img
                    width='24'
                    height='24'
                    className='h-6 w-6'
                    src='/svg/zoom.svg'
                    alt='zoom'
                  />
                  Schedule Zoom meeting
                </>
              }
              className='top-0 flex items-center justify-center gap-3 text-center'
            />
          </div>
        </div>
        {open && (
          <>
            <div
              onClick={() => setopen(!open)}
              className='absolute top-0 left-0 z-[99999] h-screen w-full cursor-pointer bg-dark opacity-30'
            ></div>
            <div className='absolute left-3 top-[20%] z-[99999] ml-4 h-screen w-10/12 bg-transparent p-0 text-black sm:top-16 sm:left-[7%] md:top-0'>
              <IoClose
                onClick={() => setopen(!open)}
                className='absolute top-0 right-0 inline-block  h-7 w-7  cursor-pointer'
              />
              <InlineWidget url='https://calendly.com/adham-tarek' />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
