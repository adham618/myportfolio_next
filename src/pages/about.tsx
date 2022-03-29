/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/Layout';
import Seo from '@/components/Seo';
// interface AboutPageProps {
//   data: {
//     attributes: {
//       title: string;
//       content: string;
//     };
//   };
// }
// I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
// I'm a Freelancer Front-end Developer with over 12 years of experience. I'm from San Francisco. I code and create web elements for amazing people around the world. I like work with new people. New people are new experiences.
export default function AboutPage() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      <main>
        <section className='dark:bg-dark'>
          <div
            className='layout prose  relative flex min-h-screen flex-col justify-center overflow-hidden
      py-8 lg:py-16 '
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, recusandae nesciunt ullam aut et ratione dicta ab
              fugit aperiam reprehenderit tenetur repellendus labore beatae non
              maiores consectetur saepe impedit soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, recusandae nesciunt ullam aut et ratione dicta ab
              fugit aperiam reprehenderit tenetur repellendus labore beatae non
              maiores consectetur saepe impedit soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, recusandae nesciunt ullam aut et ratione dicta ab
              fugit aperiam reprehenderit tenetur repellendus labore beatae non
              maiores consectetur saepe impedit soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, recusandae nesciunt ullam aut et ratione dicta ab
              fugit aperiam reprehenderit tenetur repellendus labore beatae non
              maiores consectetur saepe impedit soluta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, recusandae nesciunt ullam aut et ratione dicta ab
              fugit aperiam reprehenderit tenetur repellendus labore beatae non
              maiores consectetur saepe impedit soluta.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
// export const getStaticProps = async () => {
//   const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
//   const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/about`);
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: { data: data.data },
//     revalidate: 1,
//   };
// };
