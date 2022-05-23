import Link from 'next/link';
import * as React from 'react';

import projectsData from '@/data/projectsData.json';

import Project from './Project';
import StrokeTitle from '../StrokeTitle';
export default function Projects() {
  return (
    <section className='layout py-20'>
      <div className='max-w-3xl'>
        <StrokeTitle title='Projects' />
        <p
          className='mb-5 ml-5  max-w-sm border-l-2 border-slate-500 py-2
        pl-5 opacity-50'
        >
          Checkout some of my successful projects.
        </p>
      </div>
      <div className='flex flex-col justify-center pt-20 pb-2'>
        {projectsData
          .sort((a: { id: number }, b: { id: number }) => {
            return b.id - a.id;
          })
          .slice(0, 4)
          .map(
            (project: {
              id: React.Key | null | undefined;
              image: string;
              title: string;
              siteLink: string;
              GithubLink: string;
              content: string;
            }) => (
              <Project
                key={project.id}
                image={project.image}
                title={project.title}
                siteLink={project.siteLink}
                GithubLink={project.GithubLink}
                content={project.content}
              />
            )
          )}
      </div>
      <div className='flex justify-center'>
        {/* <ButtonLink
          content='See More Projects'
          className='flex items-center justify-center border text-center'
          href='/projects'
        /> */}
        <Link href='/projects'>
          <a className='flex items-center justify-center rounded-md border border-black bg-transparent px-5 py-4 text-center transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black'>
            See More Projects
          </a>
        </Link>
      </div>
    </section>
  );
}
