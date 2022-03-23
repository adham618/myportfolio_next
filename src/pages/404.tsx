import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='text-slate-500 dark:bg-dark dark:text-slate-400'>
          <div className='container mx-auto flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='text-4xl md:text-6xl'>Page Not Found</h1>
            <Link href='/'>
              <a className='btn btn-primary mt-8 md:text-lg'>Back to Home</a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
