import * as React from 'react';

import ButtonLink from '@/components/Button/ButtonLink';
import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='dark:bg-dark'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className='text-4xl dark:opacity-50 md:text-6xl'>
              Page Not Found
            </h1>
            <ButtonLink href='/' className='mt-8' content='Back to Home' />
          </div>
        </section>
      </main>
    </Layout>
  );
}
