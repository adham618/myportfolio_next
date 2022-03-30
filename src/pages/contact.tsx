import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

export default function ContactUSPage() {
  return (
    <Layout>
      <Seo templateTitle='Contact Me' />

      <main>
        <section className='dark:bg-dark'>
          <div className='layout dark:text-contentdark min-h-screen py-20 text-content'>
            Contact Me
          </div>
        </section>
      </main>
    </Layout>
  );
}
