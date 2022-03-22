import { FeedbackFish } from '@feedback-fish/react';
import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { Tooltip } from 'react-tippy';

import Logo from '@/components/SVG/Logo';
export default function Footer() {
  const [copied, setcopied] = React.useState('Click the mail logo to copy');
  return (
    <footer className='footer footer-center mx-auto w-full border-t py-10 dark:border-gray-600 dark:text-gray-200'>
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
              <div className='mb-2 inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200 '>
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
              <div className='mb-2 inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200 '>
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
            >
              <BsGithub className='h-6 w-6 cursor-pointer' />
            </a>
          </Tooltip>
          <Tooltip
            html={
              <div className='mb-2 inline-block rounded-md border bg-white p-2 text-gray-600 shadow-md dark:border-gray-600 dark:bg-dark dark:text-gray-200 '>
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
            >
              <FaLinkedin className='h-6 w-6 cursor-pointer' />
            </a>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}
