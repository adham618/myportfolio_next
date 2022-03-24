import { FeedbackFish } from '@feedback-fish/react';
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';
import { Tooltip } from 'react-tippy';

import Logo from '@/components/SVG/Logo';
export default function Footer() {
  const [copied, setcopied] = React.useState('Click the mail logo to copy');
  return (
    <footer className='footer footer-center bottom-0 mx-auto w-full border-t bg-primary py-10 text-content-dark dark:border-none'>
      <div>
        <div className='text-slate-300'>
          <Logo />
        </div>
        <p className='font-bold text-slate-300'>
          Providing reliable service since 2020
        </p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved. </p>
        <FeedbackFish
          projectId={process.env.NEXT_PUBLIC_FEEDBACKFISH as string}
        >
          <button className=''>Got any feedback?</button>
        </FeedbackFish>
        <div className='mt-3 grid grid-flow-col gap-4'>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                {copied}
              </div>
            }
            hideOnClick={false}
            position='top'
            trigger='mouseenter'
            interactive
          >
            <CopyToClipboard
              text='adhamtarek291@gmail.com'
              onCopy={() => {
                setcopied('Copied');
                setTimeout(
                  () => setcopied('Click the mail logo to copy'),
                  1500
                );
              }}
            >
              <MdOutlineMail className='mt-[-3px] h-8 w-7 cursor-pointer' />
            </CopyToClipboard>
          </Tooltip>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                See my projects on Github
              </div>
            }
            hideOnClick={false}
            position='top'
            trigger='mouseenter'
            interactive
          >
            <a
              href='https://github.com/adham618'
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
            >
              <BsGithub className='h-6 w-6 cursor-pointer' />
            </a>
          </Tooltip>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                Find me on Linkedin
              </div>
            }
            hideOnClick={false}
            position='top'
            trigger='mouseenter'
            interactive
          >
            <a
              href='https://www.linkedin.com/in/adham-tarek/'
              target='_blank'
              rel='noreferrer'
              aria-label='linkedin'
            >
              <FaLinkedin className='h-6 w-6 cursor-pointer' />
            </a>
          </Tooltip>
        </div>
      </div>
      <ScrollToTop
        className='fixed right-10 bottom-10 z-50 h-10  w-10 rounded-md bg-primary-focus  shadow-sm'
        smooth
        component={<AiOutlineArrowUp className='h-6 w-6' />}
      />
    </footer>
  );
}
