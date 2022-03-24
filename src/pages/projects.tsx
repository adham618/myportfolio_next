import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo templateTitle='Projects' />

      <main>
        <section className='dark:bg-slate-900'>
          <div className='dark:text-contentdark layout min-h-screen py-20 text-content'>
            Projects
          </div>
        </section>
      </main>
    </Layout>
  );
}
