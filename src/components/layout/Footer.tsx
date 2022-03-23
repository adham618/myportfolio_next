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
    <footer className='footer footer-center mx-auto w-full border-t py-10 dark:border-none dark:bg-[#131b2e] dark:text-gray-200'>
      <div>
        <Logo />
        <p className='font-bold'>Providing reliable service since 2020</p>
        <p>© {new Date().getFullYear()} Adham Tarek - All rights reserved. </p>
        <FeedbackFish
          projectId={process.env.NEXT_PUBLIC_FEEDBACKFISH as string}
        >
          <button className=''>Got any feedback?</button>
        </FeedbackFish>
        <div className='mt-3 grid grid-flow-col gap-4'>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-sm border bg-white p-2 text-xs text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200 '>
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
              <div className='mb-2 inline-block rounded-sm border bg-white p-2 text-xs text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200 '>
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
              <div className='mb-2 inline-block rounded-sm border bg-white p-2 text-xs text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200 '>
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
        className='fixed right-10 bottom-10 z-50 h-10  w-10 rounded-md border border-dark bg-white  shadow-sm dark:bg-[#131b2e] dark:text-slate-400'
        smooth
        component={<AiOutlineArrowUp className='h-6 w-6' />}
      />
    </footer>
  );
}
