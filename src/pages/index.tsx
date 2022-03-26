import * as React from 'react';

import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Layout from '@/components/Layout';
import Projects from '@/components/Projects';
import Seo from '@/components/Seo';
import Services from '@/components/Services';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <main>
        <section className='bg-white dark:bg-dark'>
          <div className='layout min-h-screen'>
            <Intro />
            <Services />
            <Projects />
            <Contact />
          </div>
        </section>
      </main>
    </Layout>
  );
}
