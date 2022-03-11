import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Skeleton from '@/components/Skeleton';

export default function IndexPage() {
  return (
    <Layout>
      <Seo templateTitle='Index' />

      <main>
        <section className=''>
          <div className='container min-h-screen py-20'>
            <Skeleton />
          </div>
        </section>
      </main>
    </Layout>
  );
}
