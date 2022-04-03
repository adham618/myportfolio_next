import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
import StrokeTitle from '@/components/StrokeTitle';

export default function ContactUSPage() {
  return (
    <Layout>
      <Seo templateTitle='Contact Me' />

      <main className='dark:bg-dark'>
        <section className='layout py-20'>
          <div className='max-w-3xl'>
            <StrokeTitle title='Contact Me' />
            <p
              className='mb-5 ml-5  max-w-sm border-l-2 border-slate-500 py-2
        pl-5 opacity-50'
            >
              Contact me via email.
            </p>
          </div>
          <div className='flex flex-col justify-center py-14 sm:px-14'></div>
        </section>
      </main>
    </Layout>
  );
}
