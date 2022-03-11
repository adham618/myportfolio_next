import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
          <input type="checkbox" className="toggle" />
            <div className="alert alert-success">Message sent successfully</div>
            <input type="checkbox" className="checkbox" />
            <a className="btn">Hello!</a></div>
        </section>
      </main>
    </Layout>
  );
}
