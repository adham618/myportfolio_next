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
                Hello! My name is Adham Tarek, a Frontend Engineer. this website
                to showcase my projects in web development.
              </p>
              <p>
                There are a lot of things and technologies to learn in frontend
                development and I am motivated to learn as much as possible. I
                enjoy learning something new and getting feedback to make myself
                better and improve.
              </p>
              <p>
                I like to design and build beautiful and functional websites and
                web applications, taking special care to produce clear and
                understandable code.
              </p>
              <p>
                I can convert any design of any complexity into amazing work
                using HTML, CSS, Bootstrap, TailwindCSS and Sass, and can build
                the web project for you using React, Redux, Next js, Material
                UI, and Firebase.
              </p>
              <p>
                The websites you will get is always be pixel-perfect,
                SEO-friendly, responsive, mobile-optimized, w3c validated and
                the style is always consistent and centralized.
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
