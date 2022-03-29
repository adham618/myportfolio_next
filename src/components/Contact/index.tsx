/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

export default function Contact() {
  return (
    <section className='bg-slate-100 dark:bg-primary'>
      <div className='layout prose prose-slate flex max-h-[60rem] min-h-[30rem] w-full flex-col justify-center py-20'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='mb-4 stroke-black text-9xl font-black leading-[0.7em]  text-slate-200 text-transparent dark:stroke-white '>
            START YOUR PROJECT WITH{' '}
            <span className='text-black dark:text-white'>Me</span>
          </h2>
          <p className='prose prose-slate '>
            Tell us more about your project. Send us a message <br />
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <div className='flex h-14 w-full flex-col items-center justify-center gap-2 sm:flex-row'>
          <a
            className='btn btn-outline xl:btn-lg gap-3'
            href='mailto:hi@manasky.com'
          >
            <img
              className='h-6 w-6'
              width='24'
              height='24'
              src='/svg/gmail.svg'
              alt='email'
            />
            Send us an Email
          </a>{' '}
          <div className='divider sm:divider-vertical opacity-50'>OR</div>{' '}
          <div className='inline-block'>
            <button className='btn btn-outline xl:btn-lg gap-3'>
              <img
                width='24'
                height='24'
                className='h-6 w-6'
                src='/svg/zoom.svg'
                alt='zoom'
              />
              Schedule Zoom meeting
            </button>
          </div>{' '}
        </div>
        <div className='prose prose-slate'>
          <h3>hhhhhhhff yf</h3>
        </div>
      </div>
    </section>
  );
}
