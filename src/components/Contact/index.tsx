/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { PopupButton } from 'react-calendly';

import ButtonDiv from '../Button/ButtonDiv';
import ButtonLink from '../Button/ButtonLink';
import StrokeTitle from '../StrokeTitle';

export default function Contact() {
  return (
    <section className='bg-slate-100 dark:bg-primary' id='contact'>
      <div className='layout flex h-[30rem] w-full flex-col items-center justify-center px-1 py-80 pt-64 text-center sm:pt-80'>
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
            <PopupButton
              url='https://calendly.com/adham-tarek'
              rootElement={document.getElementById('__next') as never}
              text={
                (
                  <ButtonDiv
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
                ) as never
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
