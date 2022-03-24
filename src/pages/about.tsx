import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
interface AboutPageProps {
  data: {
    attributes: {
      title: string;
      content: string;
    };
  };
}
export default function AboutlPage({ data }: AboutPageProps) {
  return (
    <Layout>
      <Seo templateTitle='About' />

      <main>
        <section className='dark:bg-dark'>
          <div className='dark:text-contentdark layout min-h-screen py-20 text-content'>
            <h1>{data.attributes.title}</h1>
            <>
              {JSON.stringify(data.attributes.content).replace(
                /\s|&nbsp;/g,
                ''
              )}
            </>
          </div>
        </section>
      </main>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/about`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data.data },
    revalidate: 1,
  };
};
