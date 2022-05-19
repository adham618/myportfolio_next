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
                I&apos;m am a front-end developer from Egypt. I would like to
                work on interesting projects. Anything from fixing already
                existing pages to developing a website from scratch.
              </p>
              <p>
                I&apos;m a hard-working guy who enjoys various things in life
                such as arts with the web and all stuff that is connected with
                web development, web design, and design at all.
              </p>
              <p>
                I like to design and build beautiful and functional websites and
                web applications, taking special care to produce clear and
                understandable code.
              </p>
              <p>
                I can convert any design of any complexity into amazing work
                using HTML, CSS, Bootstrap, TailwindCSS, or Sass, and can build
                any web project for you using React, Redux, Next js, Material
                UI, and Firebase.
              </p>
              <p>
                My skills:
                <br />
                *** HTML/HTML5
                <br />
                *** CSS
                <br />
                *** JavaScript
                <br />
                *** TypeScript
                <br />
                *** Bootstrap
                <br />
                *** TailwindCSS
                <br />
                *** Reactjs
                <br />
                *** NextJS
                <br />
                *** StrapiHeadless CMS
                <br />
                *** Easy communication
              </p>
              <p>If that&apos;s what you need - please, contact me!</p>
              <p>
                Best regards,
                <br />
                Adham
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
