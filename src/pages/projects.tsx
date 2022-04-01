import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='Projects' />

      <main>
        <section className='dark:bg-dark'>
          <div className='layout min-h-screen py-20 opacity-50'>Projects</div>
        </section>
      </main>
    </Layout>
  );
}
