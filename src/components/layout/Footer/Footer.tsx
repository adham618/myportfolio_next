/* eslint-disable react/jsx-curly-brace-presence */
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

import Logo from '@/components/SVG/Logo';
export default function Footer() {
  const [copied, setcopied] = React.useState('Click the mail logo to copy');
  return (
    <footer className='footer footer-center mx-auto w-full border-y border-base-300 bg-base-100 p-10'>
      <div>
        <Logo />
        <p className='font-bold'>Providing reliable tech since 2021</p>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{' '}
          <a
            className='link link-hover'
            href='https://adhamtarek.vercel.app'
            target='_blank'
            rel='noreferrer'
          >
            Adham Tarek
          </a>
        </p>
      </div>
      <div>
        <div className='grid grid-flow-col gap-4'>
          <CopyToClipboard
            text='adhamtarek291@gmail.com'
            onCopy={() => {
              setcopied('Copied');
              setTimeout(() => setcopied('Click the mail logo to copy'), 1500);
            }}
          >
            <a className='tooltip' data-tip={copied}>
              <MdOutlineMail className='mt-[-3px] h-8 w-7 cursor-pointer' />
            </a>
          </CopyToClipboard>
          <a
            href='https://github.com/adham618'
            className='tooltip'
            data-tip='See my projects on Github'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub className='h-6 w-6 cursor-pointer' />
          </a>
          <a
            href='https://www.linkedin.com/in/adham-tarek/'
            className='tooltip'
            data-tip='Find me on Linkedin'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedin className='h-6 w-6 cursor-pointer' />
          </a>
        </div>
      </div>
    </footer>
  );
}
