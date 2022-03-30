/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { PopupButton } from 'react-calendly';

import ClientOnlyPortal from '@/lib/ClientOnlyPortal';

import Button from '../Button';

export default function index() {
  return (
    <ClientOnlyPortal selector='#__next'>
      {typeof window === 'object' && (
        <PopupButton
          url='https://calendly.com/adham-tarek'
          rootElement={document.getElementById('__next') as never}
          text={
            (
              <Button
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
          className='absolute top-0'
        />
      )}
    </ClientOnlyPortal>
  );
}
