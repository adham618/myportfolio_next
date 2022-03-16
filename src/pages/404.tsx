import Link from 'next/link';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-base-100'>
          <div className='container mx-auto flex min-h-screen flex-col items-center justify-center text-center text-black'>
            <h1 className='text-4xl text-base-content  md:text-6xl'>
              Page Not Found
            </h1>
            <Link href='/'>
              <a className='btn btn-primary mt-8 md:text-lg'>Back to Home</a>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
