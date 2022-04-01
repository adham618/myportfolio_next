import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

export default function ContactUSPage() {
  return (
    <Layout>
      <Seo templateTitle='Contact Me' />

      <main>
        <section className='dark:bg-dark'>
          <div className='layout min-h-screen py-20 opacity-50'>Contact Me</div>
        </section>
      </main>
    </Layout>
  );
}
