import * as React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLink45Deg } from 'react-icons/bs';
import { Tooltip } from 'react-tippy';

import NextImage from '../NextImage';
interface ProjectProps {
  image: string;
  title: string;
  siteLink: string;
  GithubLink: string;
  content: string;
}
export default function Project({
  image,
  title,
  siteLink,
  GithubLink,
  content,
}: ProjectProps) {
  return (
    <div className='mb-20 w-auto'>
      <div className='flex flex-col gap-16 md:flex-row'>
        <a href={siteLink} aria-label={title} target='_blank' rel='noreferrer'>
          <figure className='transform cursor-pointer overflow-hidden rounded-lg shadow-2xl transition duration-500 hover:scale-95'>
            <NextImage src={image} width={600} height={300} alt={title} />
          </figure>
        </a>
        <div className='flex flex-col justify-center'>
          <div className='mb-5 flex items-center gap-2'>
            <a
              href={siteLink}
              aria-label={title}
              target='_blank'
              rel='noreferrer'
            >
              <h2 className='font-title text-2xl font-black tracking-wider lg:text-3xl'>
                {title}
              </h2>
            </a>
            <Tooltip
              html={
                <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                  Link to site
                </div>
              }
              hideOnClick={false}
              position='top'
              trigger='mouseenter'
              interactive
            >
              <a
                href={siteLink}
                aria-label={title}
                className='inline-block p-1 hover:rounded-full hover:bg-slate-200  focus:outline-none dark:text-white dark:hover:bg-opacity-50'
                target='_blank'
                rel='noreferrer'
              >
                <BsLink45Deg size={22} />
              </a>
            </Tooltip>
            <Tooltip
              html={
                <div className='mb-2 inline-block rounded-sm border  border-gray-600 bg-dark p-2 text-xs text-gray-200 shadow-md '>
                  Github
                </div>
              }
              hideOnClick={false}
              position='top'
              trigger='mouseenter'
              interactive
            >
              <a
                href={GithubLink}
                aria-label={title}
                className='inline-block p-1 hover:rounded-full hover:bg-slate-200  focus:outline-none dark:text-white dark:hover:bg-opacity-50'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub size={22} />
              </a>
            </Tooltip>
          </div>
          <p className='w-2/3 opacity-50 '>{content}</p>
        </div>
      </div>
    </div>
  );
}
