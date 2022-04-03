import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import StrokeTitle from '@/components/StrokeTitle';

export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main className='dark:bg-dark'>
        <section className='layout py-20'>
          <div className='prose max-w-3xl dark:prose-invert'>
            <StrokeTitle title='About Me' />
            <p
              className='mb-5 ml-5 max-w-sm  border-l-2 border-slate-500 py-2 pl-5
        '
            >
              Learn more about me.
            </p>
          </div>
          <div className='flex flex-col py-8 sm:py-12 sm:px-14'>
            <div className='prose prose-slate dark:prose-invert lg:prose-xl'>
              <p>
                I am Adham Tarek, a Frontend Developer from Egypt. I completed
                my degree with a Bachelor of Computer Science from Mansoura
                University.
              </p>
              <p>
                I am experienced in Javascript, React, Redux, TypeScript,
                Next.js, etc.
              </p>
              <p>
                I am a passionate person who loves to learn new things and solve
                problems. I am a self-taught developer and I am always looking
                for new challenges.
              </p>
              <p>
                I like to design and build beautiful and functional websites and
                web applications, taking special care to produce clear and
                understandable code. I love teamwork and good communication,am
                always open to feedback and willing to learn new things.
              </p>
            </div>
            <div className='flex justify-center'>
              <a
                href='/Frontend Developer(resume).pdf'
                className='mt-16 rounded-md border border-primary-focus bg-primary-focus px-10 py-4 text-slate-200 transition-colors hover:bg-primary hover:text-slate-100 dark:border-slate-300 dark:bg-primary-focus dark:hover:bg-slate-200 dark:hover:text-black'
                aria-label='my resume'
                target='_blank'
              >
                My Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
